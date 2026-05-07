/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.ctfassets.net' }],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });

    config.resolve.alias.canvas = false;
    config.resolve.alias['pdfjs-dist'] = path.join(__dirname, 'node_modules/pdfjs-dist');

    return config;
  },
};
