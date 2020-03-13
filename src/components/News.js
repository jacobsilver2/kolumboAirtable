import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(filter: { table: { eq: "News" } }) {
        nodes {
          data {
            Title
            Notes
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
  `)
  const { nodes } = data.allAirtable

  const theNews = nodes.map(node => {
    const { data } = node
    return (
      <div key={node.id}>
        {data.Title && <h1>{data.Title}</h1>}
        {data.Notes && <h2>{data.Notes}</h2>}
        {data.Image && (
          <Img fluid={data.Image.localFiles[0].childImageSharp.fluid} />
        )}
      </div>
    )
  })

  return <>{theNews}</>
}
