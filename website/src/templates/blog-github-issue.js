import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import {formatDate} from "../utils/format"

class BlogGithubIssueTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const post = this.props.data.githubData.data.repository.issues.edges.find(
      item => item.node.id === this.props.pageContext.id
    )
    if (!post) return null
    const { title, createdAt, bodyHTML } = post.node
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        /> */}
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {formatDate(createdAt)}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: bodyHTML }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            {/* <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li> */}
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogGithubIssueTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    githubData {
      data {
        repository {
          issues {
            edges {
              node {
                id
                title
                createdAt
                bodyHTML
              }
            }
          }
        }
      }
    }
  }
`
