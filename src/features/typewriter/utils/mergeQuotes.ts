import type { IQuote } from './types'

export const mergeQuotes = (quotes: IQuote[]): string => {
  return quotes?.map((quote) => quote.quote).join(' ')
}
