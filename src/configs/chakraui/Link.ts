import { ComponentStyleConfig } from '@chakra-ui/react'

export const linkVariantName = {
  primary: 'primary',
  block: 'block',
}

const Link: ComponentStyleConfig = {
  baseStyle: {
    height: 'auto',
    minH: 'unset',
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      textDecor: 'none',
      color: 'brand.500',
    },
    transition: 'color 320ms ease-in-out, background-color 320ms ease-in',
  },
  variants: {
    [linkVariantName.primary]: {
      _hover: {
        textDecor: 'none',
        color: 'brand.500',
      },
    },
    [linkVariantName.block]: {
      display: 'block',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Link
