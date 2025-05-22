import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: 'https://www.crescenttechnology.com',
    sitemap: 'https://www.crescenttechnology.com/sitemap.xml'
  };
}
