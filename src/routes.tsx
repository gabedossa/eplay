import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <Cart />
  }
])

export default routes
