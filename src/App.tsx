import { useEffect, useState } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export interface ContentData {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
    phone: string
    linkedin: string
    github: string
    location: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    period: string
    duration: string
    description: string
    highlights: string[]
    technologies: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    period: string
  }>
  certifications: Array<{
    name: string
    issuer: string
    date: string
    score?: string
    description: string
  }>
  skills: {
    [key: string]: string[]
  }
  internships: Array<{
    title: string
    company: string
    period: string
    duration: string
    description: string
  }>
}

function App() {
  const [content, setContent] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })

    // Fetch content
    fetch('/content.json')
      .then(response => response.json())
      .then(data => {
        setContent(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading content:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="alert alert-danger" role="alert">
          Error loading content. Please check content.json file.
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar personal={content.personal} />
      <Hero personal={content.personal} />
      <About summary={content.summary} />
      <Experience experience={content.experience} />
      <Education education={content.education} certifications={content.certifications} />
      <Skills skills={content.skills} />
      <Contact personal={content.personal} />
      <Footer personal={content.personal} />
    </>
  )
}

export default App
