import {Collection} from "miragejs";
import {Filter} from "~/api/queries/filters/FilterInterfaces";

export function apply(records: Collection<any>, filter: Filter): Collection<any> {
    // return records.filter(user => user.email.endsWith(filter.search));
    return records;
}
