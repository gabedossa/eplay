import { RouterProvider } from 'react-router-dom'

import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
