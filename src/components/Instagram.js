import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allInstaNode
  const images = edges.map(image => {
    const { fluid } = image.node.localFile.childImageSharp
    return <Img fluid={fluid} />
  })

  return (
    <div>
      <h2>Instagram</h2>
      {images}
    </div>
  )
}
