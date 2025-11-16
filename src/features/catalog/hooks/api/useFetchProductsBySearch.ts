import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import type { ITableParams } from '../../../../utils/types'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IPaginatedProducts } from './useFetchProducts'

export const FETCH_PRODUCTS_BY_SEARCH_KEY = 'fetchProductsBySearch'
export const fetchProductsBySearchApi = async (
  params?: ITableParams
): Promise<IPaginatedProducts> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products/search`, { params })
  return response.data
}

export const useFetchProductsBySearch = (params?: ITableParams) => {
  const {
    data: productsBySearch,
    isLoading: isLoadingProductsBySearch,
    error: errorFetchingProductsBySearch
  } = useQuery<IPaginatedProducts>({
    queryKey: [FETCH_PRODUCTS_BY_SEARCH_KEY, params],
    queryFn: () => fetchProductsBySearchApi(params),
    placeholderData: (prev) => prev
  })
  return { productsBySearch, isLoadingProductsBySearch, errorFetchingProductsBySearch }
}
