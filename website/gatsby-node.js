const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

async function createPagesFromMarkdown({ graphql, actions }) {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

async function createPagesFromGithubIssue({ graphql, actions }) {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-github-issue.js`)
  const result = await graphql(`
    {
      githubData {
        data {
          repository {
            issues {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.githubData.data.repository.issues.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.id,
      component: blogPost,
      context: {
        id: post.node.id,
        previous,
        next,
      },
    })
  })
}

exports.createPages = async params => {
  await createPagesFromMarkdown(params)
  await createPagesFromGithubIssue(params)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
