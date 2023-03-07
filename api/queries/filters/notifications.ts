import DbCollection from "miragejs/db-collection";
import {Condition, Filter} from "~/api/queries/filters/FilterInterfaces";

export function apply(mirageSchemaElement: DbCollection, filter: Filter): Condition {
    return new Condition({ user_id: filter.search });
}
