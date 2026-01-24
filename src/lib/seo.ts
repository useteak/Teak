import { config } from '@/config'

type SeoOptions = {
  title?: string
  description?: string
  image?: string
}

export function createSeoMeta(options: SeoOptions = {}) {
  const title = options.title
    ? `${options.title} | ${config.productName}`
    : `${config.productName} - ${config.productTagline}`
  const description = options.description ?? config.productDescription
  const image =
    options.image ??
    `https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1769268243/opengraph_ekdobi.png`

  return [
    { title },
    { name: 'description', content: description },
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: config.productName },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
}
