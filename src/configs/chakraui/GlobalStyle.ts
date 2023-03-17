const GlobalStyle = {
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    minHeight: '100vh',
    color: 'gray.700',
  },
  'html, body': {
    fontSize: {
      base: 'sm',
      lg: 'md',
    },
    lineHeight: 'base',
    m: 0,
    p: 0,
  },
  a: {
    color: 'gray.600',
  },
  '.clearfix:after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
  'h1,h2,h3': {
    fontWeight: '700',
  },
  '*': {
    m: '0',
    p: '0',
  },
  '*:not(style)~*:not(style)': {
    m: '0',
    p: '0',
  },
  '.items-center': {
    alignItems: 'center',
  },
  '.justify-center': {
    justifyContent: 'center',
  },
  '.rounded-full': {
    borderRadius: '999rem',
  },
  '.cursor-pointer': {
    cursor: 'pointer',
  },
  '.overflow-hidden': {
    overflow: 'hidden',
  },
  '.relative': {
    position: 'relative',
  },
  '.capitalize': {
    textTransform: 'capitalize',
  },
}

export default GlobalStyle
