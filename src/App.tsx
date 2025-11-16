import { Card } from 'antd'
import Loader from './components/common/Loader'
import ErrorMessage from './components/common/ErrorMessage'
import { useFetchProducts } from './features/catalog/hooks/useFetchProducts'

function App() {
  const { paginatedProducts, isLoadingProducts, errorFetchingProducts } = useFetchProducts()

  if (isLoadingProducts) return <Loader />
  if (errorFetchingProducts) return <ErrorMessage description="Error fetching products" />

  console.log('!! ', paginatedProducts)

  console.log('Products: ', paginatedProducts?.products)

  return (
    <Card>
      <p>hello</p>
      <Loader />
      <ErrorMessage />
    </Card>
  )
}

export default App
