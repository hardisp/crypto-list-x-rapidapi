/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line no-undef
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
    },
  },
}
