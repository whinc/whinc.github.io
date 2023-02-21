// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const editUrl = "https://github.com/whinc/whinc.github.io/tree/master/website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "右耳朵猫(whinc)",
  tagline: "分享技术，收获快乐",
  url: "https://whinc.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "whinc", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  deploymentBranch: "gh-pages",

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
          hideable: true
        }
      },
      navbar: {
        title: "右耳朵猫(whinc)",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "前端",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            to: "/about",
            position: "right",
            label: "关于",
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
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/whinc" target="_blank">右耳朵猫(whinc)</a>
          <br/>站点使用 <a href='https://github.com/facebook/docusaurus' target="_blank">Docusaurus</a> 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "IY8Y8S272C",
        apiKey: "4c4ead1084900bfa68bf9daeefd545d8",
        indexName: "whinc.github.io",
      },
    }),
};

module.exports = config;
