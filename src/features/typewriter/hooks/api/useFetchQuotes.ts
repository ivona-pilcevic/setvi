import { useQuery } from '@tanstack/react-query'
import { axiosInt } from '../../../../utils/axios'
import { API_BASE_URL } from '../../../../utils/urls'
import type { IPaginatedQuotes } from '../../utils/types'

export const FETCH_QUOTES_KEY = 'fetchQuotes'
export const fetchQuotesApi = async (): Promise<IPaginatedQuotes> => {
  const response = await axiosInt.get(`${API_BASE_URL}/quotes`)
  return response.data
}

export const useFetchQuotes = () => {
  const {
    data: quotes,
    isLoading: isLoadingQuotes,
    error: errorFetchingQuotes
  } = useQuery<IPaginatedQuotes>({
    queryKey: [FETCH_QUOTES_KEY],
    queryFn: () => fetchQuotesApi(),
    placeholderData: (prev) => prev
  })
  return { quotes, isLoadingQuotes, errorFetchingQuotes }
}
