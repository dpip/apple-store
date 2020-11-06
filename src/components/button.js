import React from "react"
import "../assets/styles/button.scss"
export default props => (
  <button className={`btn ${props.type}`}>{props.text}</button>
)
