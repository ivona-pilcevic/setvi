import { useCallback } from 'react'

export const useLocalStorage = (key: string) => {
  const get = useCallback(() => {
    if (typeof window === 'undefined') return null

    const item = window.localStorage.getItem(key)
    if (!item) return null

    try {
      return JSON.parse(item)
    } catch {
      return null
    }
  }, [])

  const set = useCallback((key: string, value: any): void => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [])

  const remove = useCallback((key: string): void => {
    if (typeof window === 'undefined') return

    const item = window.localStorage.getItem(key)
    if (item === null) return

    window.localStorage.removeItem(key)
    return
  }, [])

  return { get, set, remove }
}
