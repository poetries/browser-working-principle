const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base:'/browser-working-principle/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '浏览器工作原理与实践',
      description: '极客浏览器工作原理与实践'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style',  }]
  ],
  themeConfig: {
    repo: 'poetries/browser-working-principle',
    lastUpdated: 'Last Updated',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: require('./nav/zh'),
        sidebar: {
            '/guide/': renderSiderBar()
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-145821923-1'
    // }],
    // ['vuepress-plugin-baidu-google-analytics', {
    //   hm: '009a2f9b8cfc23cb5722f109462e450f',
    //   ignore_hash: false
    // }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js',
  ]
})

function renderSiderBar() {
  return ([
    {
      title: '宏观视角上的浏览器',
      collapsable: false,
      children: [
            'part1/lesson01',
            'part1/lesson02',
            'part1/lesson03',
            'part1/lesson04',
            'part1/lesson05',
            'part1/lesson06',
        ]
    },
    {
      title: '浏览器中的JavaScript执行机制',
      collapsable: false,
      children: [
            'part2/lesson07',
            'part2/lesson08',
            'part2/lesson09',
            'part2/lesson10',
            'part2/lesson11',
        ]
    },
    {
      title: 'V8工作原理',
      collapsable: false,
      children: [
            'part3/lesson12',
            'part3/lesson13',
            'part3/lesson14',
        ]
    },
    {
      title: '浏览器中的页面循环系统',
      collapsable: false,
      children: [
            'part4/lesson15',
            'part4/lesson16',
            'part4/lesson17',
            'part4/lesson18',
            'part4/lesson19',
            'part4/lesson20',
        ]
    },
    {
      title: '浏览器中的页面',
      collapsable: false,
      children: [
            'part5/lesson21',
            'part5/lesson22',
            'part5/lesson23',
            'part5/lesson24',
            'part5/lesson25',
            'part5/lesson26',
            'part5/lesson27',
            'part5/lesson28',
        ]
    },
    {
      title: '浏览器中的网络',
      collapsable: false,
      children: [
            'part6/lesson29',
            'part6/lesson30',
            'part6/lesson31',
            'part6/lesson32',
            'part6/lesson33',
            'part6/lesson34',
            'part6/lesson35',
            'part6/lesson36',
        ]
    },
])
}
