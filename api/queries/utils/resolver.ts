import {
    DocumentNode,
    FieldDefinitionNode,
    Kind,
    ObjectTypeDefinitionNode,
    TypeNode
} from "graphql/language";
import {Condition, Filterable, Paginator} from "~/api/queries/filters/FilterInterfaces";
import {Collection} from "miragejs";
import {getPageInfo} from "~/api/utils/getPageInfo";
import {Server} from "miragejs/server";
import DbCollection from "miragejs/db-collection";
import {GraphQLResolveInfo} from "graphql/type/definition";


class Resolvers {
    protected server?: Server;
    protected conditions: Array<Condition> = [];
    protected isFilterable: boolean;
    protected isPaginatable: boolean;

    constructor(server: Server, isFilterable: boolean, isPaginatable: boolean) {
        this.server = server;
        this.isFilterable = isFilterable;
        this.isPaginatable = isPaginatable;
    }

    protected async filter(args: object, context: object, info: GraphQLResolveInfo) {
        // @ts-ignore
        const filter = args.filter;
        const name = info.fieldName;
        let module: Filterable;

        if (! filter) {
            return;
        }

        try {
            module = await import(`~/api/queries/filters/${name}.ts`);
        } catch (e) {
            console.warn(`No filter defined for "${name}" at ~/api/queries/filters`);
            return;
        }

        try {
            // @ts-ignore
            const filter = args.filter;
            // @ts-ignore
            delete args.filter;
            // @ts-ignore
            this.conditions.push(module.apply(context.mirageSchema[name], filter, name, args));
        } catch (e) {
            console.error(e);
        }
    }

    protected paginator(args: object, context: object, info: GraphQLResolveInfo): Paginator {
        // @ts-ignore grab pagination params
        const first = args.first;
        // @ts-ignore
        delete args.first;
        this.conditions.push(new Condition(args));

        // limit records at first X elements
        // @ts-ignore
        const records = [...this.getRecords(context, info.fieldName)].splice(0, first);
        // TODO: fix for other pages
        // TODO: the rest of the Laravel pagination params

        return {
            data: records,
            paginatorInfo: getPageInfo(this.server, records, {first}),
        };
    }

    protected getRecords(context: object, name: string): Collection<any> {
        // @ts-ignore
        let schema: DbCollection = context.mirageSchema[name];
        const condition: Array<object> = Object.assign({}, ...this.conditions.map((c: Condition) => c.condition));
        if (Object.keys(condition).length > 0) {
            return schema.where(condition).models;
        } else {
            // @ts-ignore
            return schema.all().models;
        }
    }

    public async make(_: null, args: object, context: object, info: GraphQLResolveInfo) {
        if (this.isFilterable) {
            await this.filter(args, context, info);
        }

        // Add additional resolver calls here....


        // this should always be called last.
        if (this.isPaginatable) {
            return this.paginator(args, context, info);
        }

        return this.getRecords(context, info.fieldName);
    }

}

export default function registerResolver(node: DocumentNode, server: Server) {
    const resolvers = {Query: {}, Mutation: {}}
    // @ts-ignore
    const queries: ObjectTypeDefinitionNode | undefined = node.definitions.find((doc: ObjectTypeDefinitionNode) => doc.name.value === 'Query');

    // @ts-ignore
    queries.fields.forEach((query: FieldDefinitionNode) => {
        // @ts-ignore
        const isFilterable: boolean = query.arguments?.some((a: FieldDefinitionNode) => a.type?.name?.value === 'Filter');
        const type: TypeNode = query.type;
        const name: string = query.name.value;
        const isPaginatable: boolean = (type.kind === Kind.NAMED_TYPE && type.name.value.endsWith('Paginator'));
        const resolver = new Resolvers(server, isFilterable, isPaginatable);

        // @ts-ignore
        resolvers.Query[name] = resolver.make.bind(resolver);
    });

    return resolvers;
}
