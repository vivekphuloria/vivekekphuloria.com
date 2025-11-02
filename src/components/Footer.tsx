import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

interface FooterProps {
  personal: {
    name: string
    linkedin: string
    github: string
    email: string
  }
}

const Footer = ({ personal }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} {personal.name}.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="footer-social">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                className="footer-icon"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
