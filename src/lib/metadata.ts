import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Yunusov Abdulmajid', // TODO: Add a custom title
  description = "I am a 20 y.o Backend Developer with a passion for building scalable and efficient web applications.", // TODO: Add a custom description
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@avengerdev'
    },
    icons,
    metadataBase: new URL('https://www.goldendev.vercel.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
