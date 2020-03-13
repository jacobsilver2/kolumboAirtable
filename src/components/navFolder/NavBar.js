import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import NavLinks from "./NavLinks"

const NavBarComponent = ({ banner }) => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Img fluid={banner} />
        </Link>
        <NavLinks />
      </div>
    </header>
  )
}

export default NavBarComponent
