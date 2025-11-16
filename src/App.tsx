import { App as AntApp } from 'antd'
import { Suspense } from 'react'
import Loader from './components/common/Loader'
import { AppRoutes } from './routes/AppRoutes'

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
