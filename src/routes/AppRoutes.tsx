import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Loader from '../components/common/Loader'

import { routes } from './config'

const CatalogPage = lazy(() => import('../features/catalog/pages/CatalogPage'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.home} element={<div>Home</div>} />
        <Route path={routes.catalog} element={<CatalogPage />} />
      </Routes>
    </Suspense>
  )
}
