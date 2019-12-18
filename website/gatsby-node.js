/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions: { createPage } }) => {
  for (let i = 0; i < 10; ++i) {
    createPage({
      path: `/blog-${i}/`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        id: i
      }
    })
  }
}