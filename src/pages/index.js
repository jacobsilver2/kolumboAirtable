import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import News from "../components/News"
import Shows from "../components/ShowsComponent"
import Instagram from "../components/Instagram"

export default () => {
  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <h1>Kolumbo's New Website</h1>
        <h1>This will be the new homepage for Kolumbo</h1>
        <hr />
        <h1>News</h1>
        <News />
        <hr />
        <Shows />
        <Instagram />
      </Layout>
    </div>
  )
}
