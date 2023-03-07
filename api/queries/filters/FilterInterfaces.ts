import DbCollection from "miragejs/db-collection";

export interface Filter {
    search: String
    trashed: String
    state: String
}

export interface Filterable {
    apply: (mirageSchemaElement: DbCollection, filter: Filter, name: string, args: object) => Condition
}

export interface PaginatorInfo {
    count: number
    currentPage: number
    firstItem: number
    hasMorePages: Boolean
    lastItem: number
    lastPage: number
    perPage: number
    total: number
}

export interface Paginator {
    paginatorInfo: PaginatorInfo,
    data: Array<object>
}

export class Condition {
    public condition: object;
    public constructor(condition: object) {
        this.condition = condition;
    }
}
