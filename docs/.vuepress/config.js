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
        repo: 'KeyAI/docs',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
         // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 假如文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '源文档',
        nav: [
          { text: '首页', link: '/' },
          { text: '笔记', link: '/notes/' },
          { text: '札册', link: '/books/' },
          { text: '轻文档', link: '/lightdocs/' },
          { text: '学习日记', link: '/diaries/' },
        ],
        sns: {
            github: { 
              account: 'KeyAI',
              link: 'https://github.com/KeyAI'
            }
        },
        lastUpdated: 'Last Updated',
        sidebar: {
            '/notes/': [
                ['','笔记'],
            ],
            '/books/': [
                ['','札册'],
            ],
            '/lightdocs/': [
                ['','轻文档'],
            ],
            '/diaries/': [
                ['','学习日记'],
                {
                    title: '20-06',
                    // path: '/foo/',      // 标题的跳转链接，应为绝对路径且必须存在
                    // collapsable: false, // 默认值是 true,设置 false 来让一个组永远都是展开状态。
                    // sidebarDepth: 1,    // 默认值是 1
                    children: [
                        ['/diaries/20-06/06-w2', 'week2'],
                    ]
                },
            ]
        },
    }

  }