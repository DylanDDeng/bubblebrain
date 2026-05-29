import { withBasePath } from '~/utils/path'

export async function GET() {
  // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest
  const manifest = {
    id: withBasePath('/'),
    name: 'BubbleBrain',
    short_name: 'BubbleBrain',
    description: 'A personal blog focused on AI, programming, and technology.',
    icons: [
      {
        src: withBasePath('android-chrome-192x192.png'),
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: withBasePath('android-chrome-512x512.png'),
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    scope: withBasePath('/'),
    start_url: withBasePath('/'),
    display: 'standalone',
    theme_color: '#fff',
    background_color: '#fff',
  }

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  })
}
