require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Kolumbo Website`,
    description: `Kolumbo's Website`,
    author: `Jacob Silver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appj9fMXWDjsQQHnZ`,
            tableName: `News`,
            mapping: { Image: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
          },
          {
            baseId: `appj9fMXWDjsQQHnZ`,
            tableName: `Shows`,
            mapping: { Poster: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
          },
          {
            baseId: `appj9fMXWDjsQQHnZ`,
            tableName: `Photos`,
            mapping: { Image: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
          },
          {
            baseId: `appj9fMXWDjsQQHnZ`,
            tableName: `About`,
            mapping: { Image: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `kolumbotunes`,
      },
    },
  ],
}
