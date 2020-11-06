import React from "react"
import "../assets/styles/banner.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop, faMobile, faClock } from "@fortawesome/free-solid-svg-icons"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default props => (
  <div className={"banner--nav"}>
    <ul>
      <li>
        <AniLink direction={"down"} to={"/login"} cover bg={"#fff"} top="entry">
          <FontAwesomeIcon icon={faMobile} />
        </AniLink>
      </li>
      <li>
        <AniLink to={"/"} direction={"left"} cover bg={"#fff"} top="entry">
          <FontAwesomeIcon icon={faLaptop} />
        </AniLink>
      </li>
      <li>
        <AniLink to={"/login"} direction={"up"} cover bg={"#fff"} top="entry">
          <FontAwesomeIcon icon={faClock} />
        </AniLink>
      </li>
    </ul>
  </div>
)
