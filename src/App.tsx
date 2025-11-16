import { Card } from 'antd'
import Loader from './components/common/Loader'
import ErrorMessage from './components/common/ErrorMessage'
import { useFetchProducts } from './features/catalog/hooks/api/useFetchProducts'
import { useFetchProductCategories } from './features/catalog/hooks/api/useFetchProductCategories'
import { useFetchProductsByCategory } from './features/catalog/hooks/api/useFetchProducsByCategory'
import { useFetchProductDetails } from './features/catalog/hooks/api/useFetchProductDetails'
import { useFetchProductsBySearch } from './features/catalog/hooks/api/useFetchProductsBySearch'
import { useFetchQuotes } from './features/ai-summary/hooks/api/useFetchQuotes'

function App() {
  const { paginatedProducts, isLoadingProducts, errorFetchingProducts } = useFetchProducts()
  const { productCategories } = useFetchProductCategories()
  const { productsByCategory } = useFetchProductsByCategory(productCategories?.[0]?.slug)
  const { productDetails } = useFetchProductDetails(productsByCategory?.products?.[0]?.id)
  const { productsBySearch } = useFetchProductsBySearch({ q: 'phone' })
  const { quotes } = useFetchQuotes()

  if (isLoadingProducts) return <Loader />
  if (errorFetchingProducts) return <ErrorMessage description="Error fetching products" />

  console.log('!! ', paginatedProducts)
  console.log('Products: ', paginatedProducts?.products)
  console.log('!! Product Categories: ', productCategories)
  console.log('!! Products By Category: ', productsByCategory)
  console.log('!! Product Details: ', productDetails)
  console.log('!! Products By Search: ', productsBySearch)
  console.log('!! Quotes: ', quotes)
  return (
    <Card>
      <p>hello</p>
      <Loader />
      <ErrorMessage />
    </Card>
  )
}

export default App
