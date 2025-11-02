import { Container, Row, Col, Card } from 'react-bootstrap'
import './Contact.css'

interface ContactProps {
  personal: {
    name: string
    email: string
    phone: string
    linkedin: string
    location: string
  }
}

const Contact = ({ personal }: ContactProps) => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="lead">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>
        </div>
        <Row className="justify-content-center g-4">
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <h4>Email</h4>
                <a href={`mailto:${personal.email}`} className="contact-link">
                  {personal.email}
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h4>Phone</h4>
                <a
                  href="https://wa.me/918808814140?text=Hi%20Vivek.%20How%27s%20it%20going%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="WhatsApp"
                >

                  {personal.phone}
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <i className="bi bi-linkedin"></i>
                </div>
                <h4>LinkedIn</h4>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Connect with me
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <div className="location-info">
            <i className="bi bi-geo-alt-fill me-2"></i>
            <span>{personal.location}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
