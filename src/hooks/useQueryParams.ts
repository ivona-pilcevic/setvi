import { useSearchParams } from 'react-router-dom'
import type { IQueryParams } from '../utils/types'
import { useCallback, useMemo } from 'react'
import { DEBOUNCE_DELAY, DEFAULT_LIMIT, DEFAULT_SKIP } from '../utils/constants'
import { useDebounce } from './useDebounce'

export interface IUseQueryParamsResult {
  params: IQueryParams
  debouncedParams: IQueryParams
  setSearch: (next: string | null) => void
  setCategory: (next: string | null) => void
  setLimit: (next: number | null) => void
  setSkip: (next: number | null) => void
  setParams: (next: IQueryParams) => void
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  resetPagination: () => void
}

export const useQueryParams = (): IUseQueryParamsResult => {
  const [searchParams, setSearchParams] = useSearchParams()

  const q = searchParams.get('q') || null
  const category = searchParams.get('category') || null
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Number.parseInt(limitParam, 10) : DEFAULT_LIMIT
  const skipParam = searchParams.get('skip')
  const skip = skipParam ? Number.parseInt(skipParam, 10) : DEFAULT_SKIP

  const params: IQueryParams = useMemo(
    () => ({
      q,
      category,
      limit,
      skip
    }),
    [q, category, limit, skip]
  )

  const debouncedParams: IQueryParams = useDebounce(params, DEBOUNCE_DELAY)

  const setParams = useCallback(
    (next: IQueryParams) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev)

        if (next.q !== undefined) {
          if (next.q === null || next.q === '') {
            newParams.delete('q')
          } else {
            newParams.set('q', next.q)
          }
        }

        if (next.category !== undefined) {
          if (next.category === null || next.category === '') {
            newParams.delete('category')
          } else {
            newParams.set('category', next.category)
          }
        }

        if (next.limit !== undefined) {
          if (next.limit === null) {
            newParams.delete('limit')
          } else {
            newParams.set('limit', String(next.limit))
          }
        }

        if (next.skip !== undefined) {
          if (next.skip === null || next.skip === 0) {
            newParams.delete('skip')
          } else {
            newParams.set('skip', String(next.skip))
          }
        }

        return newParams
      })
    },
    [setSearchParams]
  )

  const setSearch = useCallback(
    (next: string | null) => {
      setParams({ q: next, skip: DEFAULT_SKIP })
    },
    [setParams]
  )

  const setCategory = useCallback(
    (next: string | null) => {
      setParams({ category: next, skip: DEFAULT_SKIP })
    },
    [setParams]
  )

  const setLimit = useCallback(
    (next: number | null) => {
      const limitValue = next ?? DEFAULT_LIMIT
      setParams({ limit: limitValue, skip: DEFAULT_SKIP })
    },
    [setParams]
  )

  const setSkip = useCallback(
    (next: number | null) => {
      const skipValue = next ?? DEFAULT_SKIP
      setParams({ skip: skipValue })
    },
    [setParams]
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextSearch = e.target.value || null
      setSearch(nextSearch)
    },
    [setSearch]
  )

  const resetPagination = useCallback(() => {
    setSkip(DEFAULT_SKIP)
  }, [setSkip])

  return {
    params,
    debouncedParams,
    setSearch,
    setCategory,
    setLimit,
    setSkip,
    setParams,
    handleSearchChange,
    resetPagination
  }
}
