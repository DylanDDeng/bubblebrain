import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import unocss from 'unocss/astro'
import astroExpressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'

import { remarkPlugins, rehypePlugins } from './plugins'
import { SITE } from './src/config'

const codeFontFamily =
  '"Maple Mono", "LXGW WenKai Screen", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE.website,
  base: SITE.base,
  publicDir: './static',
  build: {
    inlineStylesheets: 'never',
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    unocss({ injectReset: true }),
    astroExpressiveCode({
      styleOverrides: {
        codeFontFamily,
        uiFontFamily: codeFontFamily,
      },
    }),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins,
    rehypePlugins,
  },
  image: {
    domains: SITE.imageDomains,
    // https://docs.astro.build/en/guides/images/#responsive-image-behavior
    // Used for all local (except `/public`) and authorized remote images using `![]()` syntax; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with `layout` prop
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    server: {
      headers: {
        // Enable CORS for dev: allow Giscus iframe to load local styles
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: { chunkSizeWarningLimit: 1200 },
  },
  // https://docs.astro.build/en/reference/experimental-flags/
  experimental: {
    contentIntellisense: true,
    preserveScriptOrder: true,
    headingIdCompat: true,
    chromeDevtoolsWorkspace: true,
    failOnPrerenderConflict: true,
  },
})
