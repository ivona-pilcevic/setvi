import type { IProduct } from '../features/catalog/utils/types'

export interface ISearchParams {
  search?: string | null
}

export interface IPaginateParams {
  limit?: number | null
  skip?: number | null
}

export interface ITableParams extends ISearchParams, IPaginateParams {}

export interface IPaginatedProducts {
  products: IProduct[]
  meta: {
    total: number
    skip: number
    limit: number
  }
}
