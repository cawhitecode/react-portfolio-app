import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from 'react-tooltip'


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a data-tooltip-id="my-tooltip" data-tooltip-content="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chriswhitecode/"><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#a5a1a1",}} /><Tooltip id="my-tooltip" /></a>
                <a data-tooltip-id="my-tooltip2" data-tooltip-content="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/cawhitecode"><FontAwesomeIcon icon={faGithubAlt} size="xl" style={{color: "#a5a1a1",}} /><Tooltip id="my-tooltip2" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
