import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const serviceSlugs = [
  'sitios-web',
  'software-a-la-medida',
  'ecommerce',
  'mvp',
  'webmaster',
  'seo',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dinogrowth.com'

  let posts: MetadataRoute.Sitemap = []
  try {
    posts = getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    posts = []
  }

  const services: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...services,
    ...posts,
  ]
}
