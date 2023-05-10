import { GraphQLResolveInfo } from "graphql/type/definition";
import { CalendarEventArgs } from "~/api/queries/filters/FilterInterfaces";

export default async function make(
  _: null,
  args: CalendarEventArgs,
  context: object,
  info: GraphQLResolveInfo
) {
  // @ts-ignore
  const schema =
    context.mirageSchema[context.mirageSchema.toCollectionName(info.fieldName)];

  let { param } = args;
  if (param) {
    delete args.param;
  }

  let records =
    Object.keys(args).length > 0
      ? schema.where(args).models
      : schema.all().models;

  // filter
  if (param?.viewUser) {
    records = records.filter((e: any) => {
      if (e.attendees && e.attendees.models) {
        // @ts-ignore
        return e.attendees.models.some((a) => a.entity_id === param.viewUser);
      }
      return false;
    });
  }

  return records;
}
