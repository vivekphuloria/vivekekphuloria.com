import { Container, Row, Col, Card } from 'react-bootstrap'
import './Skills.css'

interface SkillsProps {
  skills: {
    [key: string]: string[]
  }
}

const skillIcons: { [key: string]: string } = {
  'Product Strategy': 'bi-lightbulb',
  'Technical Skills': 'bi-code-slash',
  'Generative AI': 'bi-cpu',
  'Data Science': 'bi-graph-up'
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Skills & Expertise</h2>
        </div>
        <Row className="g-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="skill-header mb-4">
                    <div className="skill-icon">
                      <i className={`bi ${skillIcons[category] || 'bi-star-fill'}`}></i>
                    </div>
                    <h3 className="skill-category">{category}</h3>
                  </div>
                  <div className="skill-list">
                    {skillList.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
