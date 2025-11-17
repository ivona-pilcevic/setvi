import { useInfiniteQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import type { IQueryParams } from '../../../../utils/types'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IPaginatedProducts } from '../../utils/types'
import { DEFAULT_LIMIT } from '../../../../utils/constants'

export const FETCH_PRODUCTS_INFINITE_KEY = 'fetchProductsInfinite'
const fetchProductsInfiniteApi = async (params: IQueryParams): Promise<IPaginatedProducts> => {
  const { q, category, limit, skip } = params
  let url = `${API_BASE_URL}/products`

  if (q) {
    url = `${API_BASE_URL}/products/search`
  } else if (category) {
    url = `${API_BASE_URL}/products/category/${category}`
  }

  const response = await axiosInt.get(url, {
    params: { q, limit, skip }
  })
  return response.data
}

export const useFetchProductsInfinite = (params: IQueryParams) => {
  const { q, category, limit } = params

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteQuery<IPaginatedProducts>({
      queryKey: [FETCH_PRODUCTS_INFINITE_KEY, { q, category }],
      queryFn: ({ pageParam = 0 }) =>
        fetchProductsInfiniteApi({
          ...params,
          skip: pageParam as number
        }),
      getNextPageParam: (_lastPage, allPages) => {
        const limitValue = limit ?? DEFAULT_LIMIT
        const nextSkip = allPages.length * limitValue
        const totalFetched = allPages.reduce((sum, page) => sum + page.products.length, 0)
        const total = allPages[0]?.total ?? 0

        return totalFetched < total ? nextSkip : undefined
      },
      initialPageParam: 0,
      placeholderData: (prev) => prev
    })

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  }
}
