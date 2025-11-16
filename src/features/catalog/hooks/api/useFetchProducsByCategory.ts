import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import type { IPaginateParams } from '../../../../utils/types'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IPaginatedProducts } from '../../utils/types'

export const FETCH_PRODUCTS_BY_CATEGORY_KEY = 'fetchProductsByCategory'
export const fetchProductsByCategoryApi = async (
  category: string | undefined,
  params?: IPaginateParams
): Promise<IPaginatedProducts> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products/category/${category}`, { params })
  return response.data
}

export const useFetchProductsByCategory = (
  category: string | undefined,
  params?: IPaginateParams
) => {
  const {
    data: productsByCategory,
    isLoading: isLoadingProductsByCategory,
    error: errorFetchingProductsByCategory
  } = useQuery<IPaginatedProducts>({
    queryKey: [FETCH_PRODUCTS_BY_CATEGORY_KEY, category, params],
    queryFn: () => fetchProductsByCategoryApi(category, params),
    placeholderData: (prev) => prev,
    enabled: Boolean(category)
  })
  return { productsByCategory, isLoadingProductsByCategory, errorFetchingProductsByCategory }
}
