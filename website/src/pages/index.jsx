import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {formatDate} from '../utils/format'

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.githubData.data.repository.issues.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const { id, title, createdAt, bodyText } = node
        return (
          <article key={id}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={id}>
                  {title}
                </Link>
              </h3>
              <small>{formatDate(createdAt)}</small>
            </header>
            <section>
              <p>{bodyText.slice(0, 150)}...</p>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

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
                bodyText
              }
            }
          }
        }
      }
    }
  }
`
