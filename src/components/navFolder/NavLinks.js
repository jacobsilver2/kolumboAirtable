import React from "react"
import { Link } from "gatsby"

const NavLinks = props => {
  return (
    <>
      <Link to="shows">Shows</Link>
      <Link to="photos">Photos</Link>
      <Link to="about">About</Link>
    </>
  )
}

export default NavLinks
