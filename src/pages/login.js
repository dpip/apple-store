import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import BannerNav from "../components/bannerNav"
import Button from "../components/button"

import SEO from "../components/seo"

import bannerImg from "../assets/images/macbookpro.png"
import cardOne from "../assets/images/card-one.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Login = () => (
  <Layout>
    <SEO title="Home" />
    <Banner background={bannerImg}>
      <h1 className={"blue m-0"}>MacBook Pro</h1>
      <span className={"red"}>Starts shipping MM-DD-YYYY</span>
      <h2 className={"white h-lg"}>More power.</h2>
      <h2 className={"white h-lg"}>More pro</h2>
      <div className={"specs"}>
        <div className={"specs--item"}>
          <h3 className={"gray m0"}>8-core</h3>
          <span className={"gray"}>Intel processor</span>
        </div>
        <div className={"specs--item"}>
          <h3 className={"gray m0"}>32GB</h3>
          <span className={"gray"}>Memory</span>
        </div>
      </div>
      <div className={"bgimg"}></div>
      <BannerNav />
    </Banner>
    <section className={"section--product-ctas"}>
      <div className={"container contianer--product-ctas"}>
        <div className={"product-cta-wrap"}>
          <AniLink to={"/login"} paintDrip hex={"#e6f1ff"}>
            Buy Now >
          </AniLink>
        </div>
        <div
          className={"product-cta-card"}
          style={{ backgroundImage: `url(${cardOne})` }}
        >
          Card 1
        </div>
        <div className={"product-cta-card product-cta-card-subscribe"}>
          <div className={"subscribe-submission-wrap"}>
            <h2 className={"black"}>Subscribe now</h2>
            <span className={"subscribe-inputs"}>
              <input placeholder={"Email address"} value={"Email address"} />
              <Button text={"Subscribe"} type={"btn--btn-subscribe"} />
            </span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Login
