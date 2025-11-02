import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import './Experience.css'

interface ExperienceItem {
  title: string
  company: string
  period: string
  duration: string
  description: string
  highlights: string[]
  technologies: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Work Experience</h2>
        </div>
        <Row className="g-4">
          {experience.map((exp, index) => (
            <Col lg={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="experience-card">
                <Card.Body>
                  <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="card-title mb-1">{exp.title}</h3>
                      <h5 className="company-name">
                        <i className="bi bi-building me-2"></i>
                        {exp.company}
                      </h5>
                    </div>
                    <div className="text-end">
                      <div className="period">
                        <i className="bi bi-calendar-event me-2"></i>
                        {exp.period}
                      </div>
                      <div className="duration text-muted">
                        <i className="bi bi-clock me-2"></i>
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                  {exp.highlights.length > 0 && (
                    <div className="highlights mb-3">
                      <h6 className="mb-2">
                        <i className="bi bi-star-fill me-2"></i>
                        Key Achievements:
                      </h6>
                      <ul>
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.technologies.length > 0 && (
                    <div className="technologies">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          bg="primary"
                          className="me-2 mb-2 tech-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Experience
