import {GraphQLResolveInfo} from "graphql/type/definition";
import {InputInterface} from "~/api/mutations/resolvers/ResolverInterfaces";
import DbCollection from "miragejs/db-collection";

export function apply(args: InputInterface, { mirageSchema } : any, info: GraphQLResolveInfo) {
    const name: string = info.fieldName;
    if (! args.input) {
        throw new Error(`"${name}" must have an "input"`);
    }

    if (!args.input.id) {
        throw new Error(`"${name}" input does not have an id`)
    }

    // try to guess tables name
    const tableName = name.replace(/update(\w+?)s?$/i, '$1s').toLowerCase();
    const schema: DbCollection = mirageSchema[tableName];
    if (schema === undefined) {
        throw new Error(`Could not auto resolve table name for "${name}"`);
    }

    const data: DbCollection = schema.find(args.input.id);
    if (data === null) {
        throw new Error(`"${name}": cant find record with id:"${args.input.id}" on "${tableName}"`);
    }

    return data.update(args.input);
}


