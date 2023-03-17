import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={
      // eslint-disable-next-line quotes
      "@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap')"
    }
  />
)

export default Fonts
