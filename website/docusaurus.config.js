// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const editUrl = "https://github.com/whinc/whinc.github.io/tree/master/website";

const name = "whincwu(右耳朵猫)";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: name,
  tagline: "分享技术，帮助别人，提高自己",
  url: "https://whinc.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "whinc", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  deploymentBranch: "gh-pages",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl,
        },
        blog: {
          blogSidebarTitle: "全部文章",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          postsPerPage: "ALL",
          editUrl,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} whincwu(右耳朵猫)`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [{ name: "keywords", contentt: "whinc, whincwu, 右耳朵猫" }],
      navbar: {
        title: name,
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "博客", position: "left" },
          // {
          //   type: "docSidebar",
          //   sidebarId: "frontend",
          //   position: "left",
          //   label: "笔记",
          // },
          {
            type: "docSidebar",
            sidebarId: "showcase",
            position: "left",
            label: "个人项目",
          },
          {
            to: "/tools",
            position: "left",
            label: "工具",
          },
          // {
          //   to: '/manual',
          //   position: "left",
          //   label: "手册",
          // },
          {
            to: "/about",
            position: "right",
            label: "关于我",
          },
          {
            href: "https://github.com/whinc/blog",
            // label: "GitHub",
            className: "header-github-link",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/whinc" target="_blank">${name}</a>
          <br/>站点使用 <a href='https://docusaurus.io/' target="_blank">Docusaurus</a> 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "96Z44D671Y",
        apiKey: "2c35b6fe7d3b825841cc2b93bab1041c",
        indexName: "whinc",
      },
    }),
};

module.exports = config;
