export interface Pagination<T> {
    data: T[],
    pagination: PaginationBase
}

export interface PaginationBase {
    currentPage: number,
    pages: number,
    limit: number,
    total: number
}