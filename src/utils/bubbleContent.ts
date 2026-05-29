import { getCollection, render } from 'astro:content'

import { getMinutesRead } from '~/utils/data'

import type { CollectionEntry } from 'astro:content'

export type BubbleCollection = 'blog' | 'shorts'
export type BubbleEntry = CollectionEntry<'blog'> | CollectionEntry<'shorts'>

export interface BubbleItem {
  collection: BubbleCollection
  route: 'posts' | 'notes'
  id: string
  slug: string
  data: BubbleEntry['data']
  minutesRead: number
}

const itemCache = new Map<string, Promise<BubbleItem[]>>()

export function routeForCollection(collection: BubbleCollection) {
  return collection === 'blog' ? 'posts' : 'notes'
}

export function slugForEntry(entry: BubbleEntry) {
  return entry.data.slug || entry.id
}

export async function getBubbleItems(
  collections: BubbleCollection[] = ['blog', 'shorts']
) {
  const cacheKey = collections.join(',')
  const cached = itemCache.get(cacheKey)
  if (cached) return cached

  const promise = collectBubbleItems(collections)
  itemCache.set(cacheKey, promise)

  return promise
}

async function collectBubbleItems(collections: BubbleCollection[]) {
  const items: BubbleItem[] = []

  for (const collection of collections) {
    const entries = (await getCollection(collection, ({ data }) => {
      return import.meta.env.PROD ? !data.draft : true
    })) as BubbleEntry[]

    for (const entry of entries) {
      const { remarkPluginFrontmatter } = await render(entry)
      items.push({
        collection,
        route: routeForCollection(collection),
        id: entry.id,
        slug: slugForEntry(entry),
        data: entry.data,
        minutesRead: getMinutesRead(
          entry.data.minutesRead,
          remarkPluginFrontmatter.minutesRead as number
        ),
      })
    }
  }

  return items.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

export function getTermCounts(items: BubbleItem[], field: 'tags' | 'categories') {
  const counts = new Map<string, number>()

  for (const item of items) {
    for (const value of item.data[field] ?? []) {
      counts.set(value, (counts.get(value) ?? 0) + 1)
    }
  }

  return Array.from(counts.entries()).sort((a, b) =>
    a[0].localeCompare(b[0], 'zh-CN', { sensitivity: 'base' })
  )
}
