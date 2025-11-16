import { Route, Routes } from 'react-router-dom'
import { routes } from './config'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<div>Home</div>} />
      <Route path={routes.catalog} element={<div>Catalog</div>} />
    </Routes>
  )
}
