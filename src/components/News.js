import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

export default () => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      prismic {
        allBlog_posts {
          edges {
            node {
              blog_post_title
            }
          }
        }
      }
    }
  `)
  const post = data.prismic.allBlog_posts.edges.slice(0, 1).pop()
  if (!post) return null

  return (
    <>
      <h1>{RichText.render(post.node.blog_post_title)}</h1>
    </>
  )
}
