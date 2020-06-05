module.exports = {
    //基本配置
    title: '浮槎游记',
    description: '就只是安静的，写一些东西，做一些努力',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //添加 icon
    ], 
    base: '/docs/', //GitHub Pages 配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    //主题配置
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '笔记', link: '/notes/' },
          { text: '札册', link: '/books/' },
          { text: '学习日记', link: '/diaries/' },
          { text: 'GitHub', link: 'https://github.com/KeyAI' }
        ],
        sns: {
            github: { 
              account: 'KeyAI',
              link: 'https://github.com/KeyAI'
            }
        },
        lastUpdated: '上次更新时间',
        sidebar: {
            '/diaries/': [
                ['','学习日记首页'],
                {
                    title: '20-06',
                    children: [
                        ['/diaries/20-06/06-w1', 'week1'],
                    ]
                },
            ]
        },
    }

  }