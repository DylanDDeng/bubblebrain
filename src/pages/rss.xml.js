import rss from '@astrojs/rss'

import { SITE } from '~/config'
import { withBasePath } from '~/utils/path'
import { getBubbleItems } from '~/utils/bubbleContent'

export async function GET() {
  const items = await getBubbleItems()

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    customData: `
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <title>${SITE.title}</title>
        <url>${SITE.website}/android-chrome-512x512.png</url>
        <link>${SITE.website}</link>
      </image>`,

    items: items.map((item) => ({
      title: `${item.data.title}`,
      link: withBasePath(`/${item.route}/${item.slug}/`),
      pubDate: item.data.pubDate,
      description: item.data.description,
      author: SITE.author,
    })),

    stylesheet: withBasePath('/rss-styles.xsl'),
  })
}
