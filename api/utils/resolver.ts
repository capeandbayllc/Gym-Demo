import {
  DocumentNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  Kind,
  ObjectTypeDefinitionNode,
  TypeNode,
} from "graphql/language";
import {
  Filter,
  Filterable,
  Paginator,
  PaginatorArgs,
  PaginatorOrderByClause,
} from "~/api/queries/filters/FilterInterfaces";
import { Collection } from "miragejs";
import { getPageInfo } from "~/api/utils/getPageInfo";
import { Server } from "miragejs/server";
import DbCollection from "miragejs/db-collection";
import { GraphQLResolveInfo } from "graphql/type/definition";
import * as defaultMutationResolver from "~/api/mutations/resolvers/update.default";
import {
  InputInterface,
  UpdateMutationResolver,
} from "~/api/mutations/resolvers/ResolverInterfaces";

class QueryResolver {
  protected schema?: DbCollection;
  protected server?: Server;
  protected isFilterable: boolean;
  protected isPaginatable: boolean;

  constructor(server: Server, isFilterable: boolean, isPaginatable: boolean) {
    this.server = server;
    this.isFilterable = isFilterable;
    this.isPaginatable = isPaginatable;
  }

  protected async filter(
    records: Collection<any>,
    filter: Filter,
    args: object,
    context: object,
    info: GraphQLResolveInfo
  ): Promise<Collection<any> | null> {
    const name = info.fieldName;
    let module: Filterable;

    try {
      module = await import(`~/api/queries/filters/${name}.ts`);
    } catch (e) {
      console.warn(`No filter defined for "${name}" at ~/api/queries/filters`);
      return null;
    }

    try {
      return module.apply(records, filter, name, args);
    } catch (e) {
      throw e;
    }
  }

  protected paginator(
    records: Collection<any>,
    page: number,
    first: number,
    orderBy?: PaginatorOrderByClause
  ): Paginator {
    // TODO implement orderBy
    // @ts-ignore
    records = records.splice(page, first + page);

    return {
      data: records,
      paginatorInfo: getPageInfo(this.server, records, { first }),
    };
  }

  public async make(
    _: null,
    args: PaginatorArgs,
    context: object,
    info: GraphQLResolveInfo
  ) {
    // @ts-ignore
    const schema =
      context.mirageSchema[
        context.mirageSchema.toCollectionName(info.fieldName)
      ];
    let { first = 0, page = 0, orderBy, filter } = args;

    if (this.isPaginatable) {
      delete args.first;
      delete args.page;
      delete args.orderBy;
    }

    if (this.isFilterable) {
      delete args.filter;
    }

    // @todo: use instead:
    //const records = mirageGraphQLFieldResolver(obj, args, context, info);
    let records =
      Object.keys(args).length > 0
        ? schema.where(args).models
        : schema.all().models;
    if (filter) {
      records = await this.filter(records, filter, args, context, info);
    }

    // this should always be called last.
    if (this.isPaginatable) {
      return this.paginator(records, page, first, orderBy);
    }

    return records;
  }
}

class MutationResolver {
  public static async make(
    _: null,
    args: InputInterface,
    context: object,
    info: GraphQLResolveInfo
  ) {
    const name = info.fieldName;
    let resolver: UpdateMutationResolver;

    try {
      resolver = await import(`~/api/mutations/resolvers/${name}.ts`);
    } catch (e) {
      console.log(e);
      console.warn(
        `No resolver defined for "${name}" at ~/api/mutations/resolvers defaulting to update.default`
      );
      // @ts-ignore
      resolver = defaultMutationResolver;
    }

    try {
      const data = resolver.apply(args, context, info);
      if (typeof resolver.onCompleted === "function" && data) {
        resolver.onCompleted(data, args, context, info);
      }

      return data;
    } catch (e) {
      if (typeof resolver.onError === "function") {
        // @ts-ignore
        return resolver.onError(e, args, context, info);
      }
      throw e;
    }
  }
}

function getQueryResolvers(
  query: ObjectTypeDefinitionNode,
  server: Server
): object {
  const queries: object = {};
  query.fields?.forEach((query: FieldDefinitionNode) => {
    // @ts-ignore
    const isFilterable: boolean = query.arguments?.some(
      (a: FieldDefinitionNode) => a.type?.name?.value === "Filter"
    );
    const type: TypeNode = query.type;
    const name: string = query.name.value;
    const isPaginatable: boolean =
      type.kind === Kind.NAMED_TYPE && type.name.value.endsWith("Paginator");

    if (isPaginatable || isFilterable) {
      const resolver = new QueryResolver(server, isFilterable, isPaginatable);
      // @ts-ignore
      queries[name] = resolver.make.bind(resolver);
    }
  });

  return queries;
}

function getMutationResolvers(
  mutation: ObjectTypeDefinitionNode,
  server: Server
): object {
  const mutations: object = {};

  mutation.fields?.forEach((mutation: FieldDefinitionNode) => {
    const name: string = mutation.name.value;
    if (name.startsWith("update")) {
      // @ts-ignore
      mutations[name] = MutationResolver.make;
    }
  });

  return mutations;
}

export default function registerResolver(node: DocumentNode, server: Server) {
  const resolvers = { Query: {}, Mutation: {} };

  // @ts-ignore
  node.definitions.forEach((doc: ObjectTypeDefinitionNode) => {
    if (doc.name.value === "Query") {
      resolvers.Query = getQueryResolvers(doc, server);
    } else if (doc.name.value === "Mutation") {
      resolvers.Mutation = getMutationResolvers(doc, server);
    }
  });

  return resolvers;
}
