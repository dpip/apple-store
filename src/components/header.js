import PropTypes from "prop-types"
import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Button from "./button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple } from "@fortawesome/free-brands-svg-icons"

import "../assets/styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"header--nav"}>
      <div className={"header--logo"}>
        <FontAwesomeIcon icon={faApple} />
      </div>
      <ul className={"header--nav-items"}>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>
          <Button type={"btn--btn-nav"} text={"Notify me"} />
        </li>
      </ul>
    </div>
    {/* {siteTitle} */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
