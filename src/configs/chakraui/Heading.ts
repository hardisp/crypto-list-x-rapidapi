import { ComponentStyleConfig } from '@chakra-ui/react'

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '700',
  },

  variants: {
    pagetitle: {
      fontSize: '25px',
      fontWeight: '400',
      lineHeight: '31.43px',
    },
  },
  defaultProps: {
    fontWeight: '700',
  },
}

export default Heading
