import React from "react"
import { RiMentalHealthFill } from "react-icons/ri"
import PageLinks from "../constants/links"
import Link from "gatsby"
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo-mobile">
          <div className="toggle-btn">
            <a
              role="button"
              aria-label="menu"
              aria-expanded="false"
              onClick={toggleSidebar}
              className={`navbar-burger ${isOpen ? "is-active" : ""} `}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <h2>logo</h2>
        </div>
        <div className="nav-logo">
          <h2>logo</h2>
        </div>
        <div className="nav-links">
          <div className="main-links">
            <PageLinks styleClass="full-links" />
          </div>
          <div className="nav-action">
            <a href="#">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
        <div className="mobile-action">
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#" className="title-font">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
