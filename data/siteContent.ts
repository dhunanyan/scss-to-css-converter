export const siteContent = {
  brand: {
    name: 'Dhunanyan',
    logoAlt: 'Dhunanyan logo',
  },
  header: {
    ariaLabel: 'External links',
    links: [
      { href: 'https://dhunanyan.com', label: 'Portfolio' },
      { href: 'https://github.com/dhunanyan', label: 'GitHub' },
      { href: 'https://linkedin.com/in/dhunanyan', label: 'LinkedIn' },
    ],
  },
  page: {
    title: {
      left: 'SCSS',
      middle: 'to',
      right: 'CSS',
      suffix: 'Converter',
    },
  },
  blocks: {
    convertButtonLabel: 'Convert',
    scssTitle: 'SCSS',
    cssTitle: 'CSS',
    inputPath: 'input.scss',
    copyErrorPrefix: 'Failed to copy: ',
    copyButtonLabel: 'Copy CSS',
    downloadButtonLabel: 'Download CSS',
    downloadFileName: 'converted.css',
  },
} as const;
