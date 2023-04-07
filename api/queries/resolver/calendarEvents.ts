import { GraphQLResolveInfo } from "graphql/type/definition";
import { CalendarEventArgs } from "~/api/queries/filters/FilterInterfaces";

export default async function make(_: null, args: CalendarEventArgs, context: object, info: GraphQLResolveInfo) {
    // @ts-ignore
    const schema = context.mirageSchema[context.mirageSchema.toCollectionName(info.fieldName)];

    let { param } = args;
    if(param){
        delete args.param;
    }

    let records = (Object.keys(args).length > 0) ? schema.where(args).models : schema.all().models;

    // filter
    if(param?.viewUser){
        // @ts-ignore
        records = records.filter(e => e.owner_id == param.viewUser);
    }

    return records;
}