import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IProduct } from '../../utils/types'

export const FETCH_PRODUCT_DETAILS_KEY = 'fetchProductDetails'
export const fetchProductDetailsApi = async (id: number | undefined): Promise<IProduct> => {
  const response = await axiosInt.get(`${API_BASE_URL}/products/${id}`)
  return response.data
}

export const useFetchProductDetails = (id: number | undefined) => {
  const {
    data: productDetails,
    isLoading: isLoadingProductDetails,
    error: errorFetchingProductDetails
  } = useQuery<IProduct>({
    queryKey: [FETCH_PRODUCT_DETAILS_KEY, id],
    queryFn: () => fetchProductDetailsApi(id),
    placeholderData: (prev) => prev,
    enabled: Boolean(id)
  })
  return { productDetails, isLoadingProductDetails, errorFetchingProductDetails }
}
