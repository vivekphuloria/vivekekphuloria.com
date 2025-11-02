import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

interface AboutProps {
  summary: string
}

const About = ({ summary }: AboutProps) => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-content" data-aos="fade-up" data-aos-delay="200">
              <p className="lead text-center">
                {summary}
              </p>
              <div className="about-highlights mt-5">
                <Row className="g-4">
                  <Col md={4} data-aos="fade-up" data-aos-delay="300">
                    <div className="highlight-card text-center">
                      <div className="highlight-icon">
                        <i className="bi bi-cpu-fill"></i>
                      </div>
                      <h4>GenAI Architect</h4>
                      <p>Build production-grade Conversational AI platforms from inception to enterprise deployment</p>
                    </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="400">
                    <div className="highlight-card text-center">
                      <div className="highlight-icon">
                        <i className="bi bi-database-fill-gear"></i>
                      </div>
                      <h4>Data and ML Specialist</h4>
                      <p>Design data infrastructure and ML systems that drive measurable business outcomes</p>
                    </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="500">
                    <div className="highlight-card text-center">
                      <div className="highlight-icon">
                        <i className="bi bi-lightbulb-fill"></i>
                      </div>
                      <h4>Product Leader</h4>
                      <p>Drive AI-powered innovation that transforms user experience and delivers measurable ROI</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
