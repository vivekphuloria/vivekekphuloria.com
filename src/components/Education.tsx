import { Container, Row, Col, Card } from 'react-bootstrap'
import './Education.css'

interface EducationItem {
  degree: string
  institution: string
  period: string
}

interface CertificationItem {
  name: string
  issuer: string
  date: string
  score?: string
  description: string
}

interface EducationProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

const Education = ({ education, certifications }: EducationProps) => {
  return (
    <section id="education" className="education-section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h3 className="subsection-title mb-4" data-aos="fade-up">
            <i className="bi bi-mortarboard-fill me-2"></i>
            Education
          </h3>
          <Row className="g-4">
            {education.map((edu, index) => (
              <Col md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="education-card">
                  <Card.Body>
                    <div className="education-icon mb-3">
                      <i className="bi bi-mortarboard"></i>
                    </div>
                    <h4 className="card-title">{edu.degree}</h4>
                    <h5 className="institution">{edu.institution}</h5>
                    <p className="period">
                      <i className="bi bi-calendar-range me-2"></i>
                      {edu.period}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="subsection-title mb-4" data-aos="fade-up">
            <i className="bi bi-patch-check-fill me-2"></i>
            Certifications
          </h3>
          <Row className="g-4">
            {certifications.map((cert, index) => (
              <Col md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="certification-card">
                  <Card.Body>
                    <div className="cert-icon mb-3">
                      <i className="bi bi-patch-check"></i>
                    </div>
                    <h4 className="card-title">{cert.name}</h4>
                    <h5 className="issuer">{cert.issuer}</h5>
                    <div className="cert-meta mb-2">
                      <span className="date">
                        <i className="bi bi-calendar-check me-2"></i>
                        {cert.date}
                      </span>
                      {cert.score && (
                        <span className="score ms-3">
                          <i className="bi bi-trophy me-2"></i>
                          Score: {cert.score}
                        </span>
                      )}
                    </div>
                    <p className="description">{cert.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Education
