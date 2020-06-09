import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="bg-dark d-flex flex-column">
    <div className="bg-dark py-3"></div>
    <Container>
      <Navbar expand="md" className="bg-dark" variant="dark">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link
                to="/specialist"
                className="nav-link"
                activeClassName="active"
              >
                Specialist
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link
                to="/fertility"
                className="nav-link"
                activeClassName="active"
              >
                Fertility
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/clinic" className="nav-link" activeClassName="active">
                Clinic
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link
                to="/pharmacy"
                className="nav-link"
                activeClassName="active"
              >
                Pharmacy
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link
                to="/bloodbank"
                className="nav-link"
                activeClassName="active"
              >
                Blood Bank
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/about" className="nav-link" activeClassName="active">
                About
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/blog" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <a
                href="https://ivesmedicare.com/"
                target="_blank"
                className="nav-link"
              >
                Ives Medicare
              </a>
            </Nav.Item>

            <Nav.Item as="li">
              <a
                href="https://wfm917.com/"
                target="_blank"
                className="nav-link"
              >
                WFM
              </a>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/contact" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
