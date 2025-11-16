import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../utils/axios'
import type { IPaginatedProducts, ITableParams } from '../../../utils/types'
import { API_BASE_URL } from '../../../utils/urls'

export const FETCH_PRODUCTS_KEY = 'fetchProducts'
export const fetchProductsApi = async (params?: ITableParams): Promise<IPaginatedProducts> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products`, { params })
  return response.data
}

export const useFetchProducts = (params?: ITableParams) => {
  const {
    data: paginatedProducts,
    isLoading: isLoadingProducts,
    error: errorFetchingProducts
  } = useQuery<IPaginatedProducts>({
    queryKey: [FETCH_PRODUCTS_KEY, params],
    queryFn: () => fetchProductsApi(params),
    placeholderData: (prev) => prev
  })

  return { paginatedProducts, isLoadingProducts, errorFetchingProducts }
}
