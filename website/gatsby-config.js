/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `whincwu's Blog`,
    author: `whincwu`,
    description: ``,
    siteUrl: `https://github.com/whinc/blog`,
    github: `https://github.com/whinc`
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.MY_GITHUB_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query {
            repository(name: "blog", owner: "whinc") {
              issues(
                states: OPEN
                orderBy: { field: CREATED_AT, direction: DESC }
                first: 100
              ) {
                edges {
                  node {
                    id
                    title
                    createdAt
                    lastEditedAt
                    bodyText,
                    bodyHTML
                  }
                }
              }
            }
          }
        `,

        // variables: defaults to variables needed for a search query
        // variables: {
        //   q: "author:ldd state:closed type:pr sort:comments",
        //   nFirst: 2,
        // },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
