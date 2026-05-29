import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://bubblebrain.me/',
  base: '/',
  title: 'BubbleBrain',
  description:
    'A personal blog focused on AI, programming, and reflections on technology.',
  author: 'BubbleBrain',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  imageDomains: [
    'raw.githubusercontent.com',
    'fastly.jsdelivr.net',
    'image-1325800846.cos.ap-nanjing.myqcloud.com',
  ],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/categories',
      title: 'Categories',
      displayMode: 'alwaysText',
      text: 'Categories',
    },
    {
      path: '/archives',
      title: 'Archives',
      displayMode: 'alwaysText',
      text: 'Archives',
    },
    {
      path: '/about',
      title: 'About',
      displayMode: 'alwaysText',
      text: 'About',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/',
      title: 'GitHub',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://x.com/BubbleBrain',
      title: 'X',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-twitter-x-fill',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  postView: {
    postMetaStyle: 'minimal',
    useCoverAltAsCaption: true,
  },
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
}

/**
 * Globally controls whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@BubbleBrain'],
      bluesky: false,
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'DylanDDeng/BubbleBrain',
      'data-repo-id': 'R_kgDOPC9mIQ',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOPC9mIc4CsHPR',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
  search: [
    true,
    {
      includes: ['blog', 'shorts'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
  tag: [
    true,
    {
      displayPosition: 'right',
      displayMode: 'content',
      filterMode: 'AND',
    },
  ],
}
