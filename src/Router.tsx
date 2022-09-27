import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* 
      Grupo de rotas, o acesso é em cadeia => localhost/admin/products
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route path="/products" element={<Products />} />
      </Route>
      */}
    </Routes>
  )
}
