import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import type { IQueryParams } from '../../../../utils/types'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IPaginatedProducts } from '../../utils/types'

export const FETCH_PRODUCTS_BY_SEARCH_KEY = 'fetchProductsBySearch'
export const fetchProductsBySearchApi = async (
  params?: IQueryParams
): Promise<IPaginatedProducts> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products/search`, { params })
  return response.data
}

export const useFetchProductsBySearch = (params?: IQueryParams) => {
  const {
    data: paginatedProducts,
    isLoading: isLoadingProducts,
    error: errorFetchingProducts
  } = useQuery<IPaginatedProducts>({
    queryKey: [FETCH_PRODUCTS_BY_SEARCH_KEY, params],
    queryFn: () => fetchProductsBySearchApi(params),
    placeholderData: (prev) => prev
  })
  return { paginatedProducts, isLoadingProducts, errorFetchingProducts }
}
