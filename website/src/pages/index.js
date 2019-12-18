import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
<p><pre>{JSON.stringify(data, null, 2)}</pre></p>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     repository(name: "blog", owner: "whinc") {
//       issues(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
//         edges {
//           node {
//             id
//             title
//             lastEditedAt
//           }
//         }
//       }
//     }
//   }
// `
