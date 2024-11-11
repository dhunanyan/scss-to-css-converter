/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });

    // Prevent warnings related to canvas
    config.resolve.alias.canvas = false;

    // Add pdfjs-dist worker
    config.resolve.alias['pdfjs-dist'] = path.join(
      __dirname,
      'node_modules/pdfjs-dist'
    );

    return config;
  },
};
