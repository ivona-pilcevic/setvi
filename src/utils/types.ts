export interface ISearchParams {
  q?: string | null
}

export interface IPaginateParams {
  limit?: number | null
  skip?: number | null
}

export interface ITableParams extends ISearchParams, IPaginateParams {}
