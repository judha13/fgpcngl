import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fgpcnagercoil.com'
  const routes = [
    '',
    '/home',
    '/aboutus',
    '/ministries',
    '/sermons',
    '/gallery',
    '/contactus',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/home' ? 1 : 0.8,
  }))
}
