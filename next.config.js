/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prepareData: `@import main.sass`
  },
}

module.exports = nextConfig
