import { GraphQLResolveInfo } from "graphql/type/definition";
import { InputInterface } from "~/api/mutations/resolvers/ResolverInterfaces";
import DbCollection from "miragejs/db-collection";

// You can use default resolver:
// export { apply } from "~/api/mutations/resolvers/update.default";

// Or make one:
export function apply(
  args: InputInterface,
  { mirageSchema }: any,
  info: GraphQLResolveInfo
) {
  const schema: DbCollection = mirageSchema.users;
  // @ts-ignore
  const user = schema.find(args.input.id);

  return user.update(args.input);
}

/**
 * @see UpdateMutationResolver
 * @param message
 */
export function onError(message: string) {}

/**
 * @see UpdateMutationResolver
 * @param data
 */
export function onCompleted(data: object) {}
