import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { elementType } from "prop-types"

export default ({ data }) => {
  console.log(data)
  const { edges } = data.prismic.allShowss
  const shows = edges.map((edge, i) => {
    const title = edge.node.title[0].text
    const dateAndTime = edge.node.date_and_time
    const images = edge.node.body.filter(el => el.type === "image")
    const text = edge.node.body.filter(el => el.type === "text")[0].primary
      .description[0].text
    const website = edge.node.body.filter(el => el.type === "venue_details")[0]
      .primary.venue_website.url

    return (
      <div key={i}>
        <h2>{website ? <a href={website}>{title}</a> : title}</h2>
        <h2>Date and Time: {dateAndTime}</h2>
        <p>{text}</p>
        <img src={images[0].primary.image.url} />
      </div>
    )
  })

  return (
    <>
      <h1>Shows</h1>
      <div>{shows}</div>
    </>
  )
}

export const query = graphql`
  {
    prismic {
      allShowss {
        edges {
          node {
            title
            date_and_time
            body {
              ... on PRISMIC_ShowsBodyImage {
                type
                primary {
                  imageSharp {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  image
                }
              }
              ... on PRISMIC_ShowsBodyVenue_details {
                type
                label
                primary {
                  venue_website {
                    _linkType
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_ShowsBodyText {
                type
                primary {
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`
