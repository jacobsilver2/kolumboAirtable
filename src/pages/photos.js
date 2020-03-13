import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Photos" } }
      sort: { fields: data___Order }
    ) {
      nodes {
        data {
          PhotoName
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

  const theImages = nodes.map(image => {
    const { data } = image
    return (
      <div key={image.id}>
        {data.Image && (
          <Img fluid={data.Image.localFiles[0].childImageSharp.fluid} />
        )}
      </div>
    )
  })
  return <Layout>{theImages}</Layout>
}
