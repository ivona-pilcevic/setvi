export interface ISearchParams {
  q?: string | null
  category?: string | null
}

export interface IPaginateParams {
  limit?: number | null
  skip?: number | null
}

export interface IQueryParams extends ISearchParams, IPaginateParams {}
