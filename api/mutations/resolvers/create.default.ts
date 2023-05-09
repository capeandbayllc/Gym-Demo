import { GraphQLResolveInfo } from "graphql/type/definition";
import { InputInterface } from "~/api/mutations/resolvers/ResolverInterfaces";
// import dateFormat from "dateformat";

export function apply(
  args: InputInterface,
  { mirageSchema }: any,
  info: GraphQLResolveInfo
) {
  const name: string = info.fieldName;
  if (!args.input) {
    throw new Error(`"${name}" must have an "input"`);
  }

  if (!args.input.id) {
    throw new Error(`"${name}" input does not have an id`);
  }

  const tableName = name.replace(/create(\w+?)s?$/i, "$1s").toLowerCase();
  const schema: any = mirageSchema[tableName];
  if (schema === undefined) {
    throw new Error(`Could not auto resolve table name for "${name}"`);
  }

  const model = schema.create(Object.assign({}, args.input));

  return model;
}
