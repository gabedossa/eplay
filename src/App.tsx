import { RouterProvider } from 'react-router-dom'

import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import routes from './routes'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={routes} />
    </CartProvider>
  )
}

export default App
