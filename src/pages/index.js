import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import BannerNav from "../components/bannerNav"
import Button from "../components/button"

import SEO from "../components/seo"

import bannerImg from "../assets/images/macbookpro.jpg"
import cardOne from "../assets/images/card-one.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = props => {
  const handleChange = () => {
    console.log("changed")
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Banner background={bannerImg}>
        <h1 className={"gray m-0 typography-eyebrow"}>MacBook Pro</h1>
        {/* <span className={"red typography-eyebrow"}>
        Starts shipping MM-DD-YYYY
      </span> */}
        <h2 className={"white typography-headline-lg"}>More power.</h2>
        <h2 className={"white typography-headline-lg"}>More pro</h2>
        <div className={"specs"}>
          <div className={"specs--item"}>
            <h3 className={"badge m0 typography-headline"}>8-core</h3>
            <span className={"gray"}>Intel processor</span>
          </div>
          <div className={"specs--item"}>
            <h3 className={"badge m0 typography-headline"}>32GB</h3>
            <span className={"badge gray"}>Memory</span>
          </div>
        </div>
        <div className={"bgimg"}></div>
        <BannerNav />
      </Banner>
      <section className={"section--product-ctas"}>
        <div className={"container contianer--product-ctas"}>
          <div className={"product-cta-wrap"}>
            <p>
              MacBook Pro elevates the notebook to a whole new level of
              performance and portability.
            </p>
            <AniLink to={"/login"} paintDrip hex={"#e6f1ff"}>
              Buy Now >
            </AniLink>
          </div>
          <div className={"card-wrap"}>
            <div
              className={"product-cta-card product-cta-card-supporting"}
              style={{ backgroundImage: `url(${cardOne})` }}
            />
            <div className={"product-cta-card product-cta-card-subscribe"}>
              <div className={"subscribe-submission-wrap"}>
                <h2 className={"black"}>Subscribe now</h2>
                <span className={"subscribe-inputs"}>
                  <input
                    onChange={() => handleChange()}
                    type={"text"}
                    placeholder={"Email address"}
                    value={""}
                  />
                  <Button text={"Subscribe"} type={"btn--btn-subscribe"} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
