import {Collection} from "miragejs";
import {Filter} from "~/api/queries/filters/FilterInterfaces";

export function apply(records: Collection<any>, filter: Filter): Collection<any> {
    console.log('filter')
    console.log(filter)
    return records.filter(event => event.owner_id == filter.search);
}