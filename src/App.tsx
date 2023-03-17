import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { appTheme } from './configs/chakraui'
import Routes from './utils/routes'

export const App = () => (
  <ChakraProvider theme={appTheme}>
    <RouterProvider router={Routes.router} />
  </ChakraProvider>
)
