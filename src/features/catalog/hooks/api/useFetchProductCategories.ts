import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IProductCategory } from '../../utils/types'

export const FETCH_PRODUCT_CATEGORIES_KEY = 'fetchProductCategories'
export const fetchProductCategoriesApi = async (): Promise<IProductCategory[]> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products/categories`)
  return response.data
}

export const useFetchProductCategories = () => {
  const {
    data: productCategories,
    isLoading: isLoadingProductCategories,
    error: errorFetchingProductCategories
  } = useQuery<IProductCategory[]>({
    queryKey: [FETCH_PRODUCT_CATEGORIES_KEY],
    queryFn: fetchProductCategoriesApi,
    placeholderData: (prev) => prev
  })
  return { productCategories, isLoadingProductCategories, errorFetchingProductCategories }
}
