import { useState, useEffect } from 'react'
import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap'
import './Navbar.css'

interface NavbarProps {
  personal: {
    name: string
  }
}

const Navbar = ({ personal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold">
          {personal.name}
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar
