import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const pageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "About" } }) {
      nodes {
        data {
          Bio
          Band_Members
          Image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export default ({ data }) => {
  const { nodes } = data.allAirtable

  const bio = nodes.map(b => {
    const { data } = b
    return (
      <div key={b.id}>
        <h1>About Kolumbo</h1>
        {data.Image && (
          <Img fluid={data.Image.localFiles[0].childImageSharp.fluid} />
        )}
        <h2>Biography</h2>
        {data.Bio && <p>{data.Bio}</p>}
        <hr />
        {data.Band_Members && <p>{data.Band_Members}</p>}
      </div>
    )
  })

  return <Layout>{bio}</Layout>
}
