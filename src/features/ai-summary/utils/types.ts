export interface IQuote {
  author: string
  id: number
  quote: string
}

export interface IPaginatedQuotes {
  quotes: IQuote[]
  total: number
  skip: number
  limit: number
}
