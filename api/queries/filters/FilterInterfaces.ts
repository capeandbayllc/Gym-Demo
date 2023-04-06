import {Collection} from "miragejs";

export interface Filter {
    search: String
    trashed: String
    state: String
}

export interface CalendarEventInput {
    search: String
    start: String
    end: String
    viewUser: String
}

export interface Filterable {
    apply: (records: Collection<any>, filter: Filter, name: string, args: object) => Collection<any>
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
    data: Collection<any>
}

export interface PaginatorOrderSortOrder {
    ASC: string
    DESC: string
}

export interface PaginatorOrderByClause {
    column: string,
    order: PaginatorOrderSortOrder,
}
export interface PaginatorArgs {
    orderBy?: PaginatorOrderByClause
    first?: number,
    page?: number,
    filter?: Filter,
    param?: CalendarEventInput,
}
