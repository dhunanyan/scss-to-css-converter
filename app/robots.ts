import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://scss2css.dhunanyan.com/sitemap.xml',
    host: 'https://scss2css.dhunanyan.com',
  };
}
