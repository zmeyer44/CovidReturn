import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Books from "../assets/books.png"
import Help from "../assets/help.png"
import Heart from "../assets/heart.png"

export default () => {
  return (
    <>
      <Layout>
        <div className="page-container">
          <div className="header">
            <div className="header-text">
              <h2 className="title-font">
                We're working to keep your kids safe!
              </h2>
              <h1 className="main-text">FPBSD School Reentry Plan</h1>
              <h3>Adjusting to our new normal</h3>
            </div>
            <div className="header-img"></div>
          </div>
          <div className="featured-items">
            <h2 className="title-font">Our Priorities</h2>
            <div className="three">
              <div className="three-content">
                <div className="img-container">
                  <a href="#">
                    <img src={Heart} alt="heart" />
                  </a>
                </div>
                <div className="text-container">
                  <h3>Option Example</h3>
                  <p>Lorem ipsum dolor sit amet. Quasi, velit.</p>
                </div>
              </div>
            </div>
            <div className="three">
              <div className="three-content">
                <div className="img-container">
                  <a href="#">
                    <img src={Help} alt="help" />
                  </a>
                </div>
                <div className="text-container">
                  <h3>Option Example</h3>
                  <p>Lorem ipsum dolor sit amet. Quasi, velit.</p>
                </div>
              </div>
            </div>
            <div className="three">
              <div className="three-content">
                <div className="img-container">
                  <a href="#">
                    <img src={Books} alt="education" />
                  </a>
                </div>
                <div className="text-container">
                  <h3>Option Example</h3>
                  <p>Lorem ipsum dolor sit amet. Quasi, velit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-img"></div>
            <div className="section-text">
              <h2 className="title-font">NYS and Dept. of Health Guidelines</h2>
              <p>
                We take pride in preparing all of our bagels fresh every day to
                ensure a quality product.
              </p>
            </div>
          </div>

          <div className="covid-alert">
            <h3 className="title-font">We are here to help</h3>
            <p>
              Due to Covid-19 we are adapting to provide the best possible
              learning enviornment for our students while ensureing thesaftey
              for all students and faculty. We have adapted our classrooms to
              accomidate for six feet of separation between students and
              implement plexiglass sheilds to sepaate students. We are commited
              to help our students and families succedd during these troubling
              times.
            </p>
            <Link to="/" className="order">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
// ...GatsbyImageSharpFluid
