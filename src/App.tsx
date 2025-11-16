import { App as AntApp } from 'antd'
import { Suspense } from 'react'
import AppRoutes from './routes'
import Loader from './components/common/Loader'

const App = () => {
  return (
    <AntApp>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </AntApp>
  )
}

export default App
