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
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "kolumbo",
        // accessToken: "#######",
        path: "/preview",
        previews: true,
        // pages: [
        //   {
        //     type: "blogPost",
        //     match: "/blogPost/:uid",
        //     path: "/blogPost",
        //     component: require.resolve("./src/templates/blogPost.js"),
        //   },
        // ],
      },
    },
  ],
}
