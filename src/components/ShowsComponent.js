import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query ShowsQuery {
      allAirtable(filter: { table: { eq: "Shows" } }) {
        nodes {
          data {
            Date_and_Time(locale: "USA/NY", formatString: "LLLL")
            Information
            Venue
            Venue_Address
            Venue_Website
            Poster {
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
  const theShows = nodes.map(show => {
    const { data } = show
    return (
      <div key={show.id}>
        {data.Date_and_Time && <h1>{data.Date_and_Time}</h1>}
        {data.Information && <h2>{data.Information}</h2>}
        {data.Poster && (
          <Img fluid={data.Poster.localFiles[0].childImageSharp.fluid} />
        )}
        {data.Venue && data.Venue_Website && (
          <h3>
            <a href={data.Venue_Website}>{data.Venue}</a>
          </h3>
        )}
        {data.Venue_Address && <h3>{data.Venue_Address}</h3>}
      </div>
    )
  })

  return <>{theShows}</>
}
