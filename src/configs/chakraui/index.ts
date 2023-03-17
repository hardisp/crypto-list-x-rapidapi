import { extendTheme, theme as base } from '@chakra-ui/react'
import GlobalStyle from './GlobalStyle'
import Heading from './Heading'

export const appTheme = extendTheme({
  styles: {
    global: {
      ...GlobalStyle,
    },
  },
  fonts: {
    heading: `Source Sans Pro, ${base.fonts?.heading}`,
    body: `Source Sans Pro, ${base.fonts?.heading}`,
  },
  components: {
    Heading,
    Table: {
      parts: ['th', 'td'],
      baseStyle: {
        th: {
          borderColor: 'gray.300',
        },
        td: {
          borderColor: 'gray.300',
        },
      },
    },
  },
})
