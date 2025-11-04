import { Container, Row, Col } from 'react-bootstrap'
import './Hero.css'

interface HeroProps {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
    linkedin: string
    github: string
  }
}

const Hero = ({ personal }: HeroProps) => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={12} className="text-center">
            <div data-aos="fade-up">
              <h1 className="hero-name display-2 fw-bold mb-3">
                {personal.name}
              </h1>
              <h2 className="hero-title display-5 mb-4">
                {personal.title}
              </h2>
              <p className="hero-tagline lead mb-5">
                {personal.tagline}
              </p>
              <div className="hero-social mt-5">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                )}
                <a
                  href={`mailto:${personal.email}`}
                  className="social-icon"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a
                  href="https://wa.me/918808814140?text=Hi%20Vivek.%20How%27s%20it%20going%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="500">
              <a href="#about" aria-label="Scroll to About section">
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
