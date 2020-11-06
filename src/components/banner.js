import React from "react"
import "../assets/styles/banner.scss"
export default props => (
  <div
    className={"banner"}
    style={{ backgroundImage: `url(${props.background})` }}
  >
    {props.children}
  </div>
)
