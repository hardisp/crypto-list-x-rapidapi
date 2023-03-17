import { MasterLayout } from '@app/layouts'
import CryptoPage, { loader as cryptoPageLoader } from '@app/pages/CryptoPage'
import ErroPage from '@app/pages/ErrorPage'
import HomePage from '@app/pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello world!</div>,
    element: <MasterLayout />,
    errorElement: <ErroPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/crypto/:slug',
        element: <CryptoPage />,
        loader: cryptoPageLoader,
      },
    ],
  },
])

export default { router }
