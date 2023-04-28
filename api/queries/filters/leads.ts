import { Collection } from "miragejs";
import { Filter } from "~/api/queries/filters/FilterInterfaces";

export function apply(
  records: Collection<any>,
  filter: Filter
): Collection<any> {
  if (filter.status) {
    records = records.filter(
      (record) => record.lead_status_id === filter.status
    );
  }
  return records;
}
