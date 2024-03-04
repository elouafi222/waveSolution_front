import React from 'react'
import About from './About'
import FreqQuestions from './FreqQuestions'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <section id="hero" className="d-flex align-items-center">
    <div className="container text-center">
      <h1>Welcome to WaveSolution</h1>
      <h2>We are team of talented developpers making websites with AI</h2>
      <Link to="/login" className="btn-get-started scrollto">Get Started</Link>
    </div>
  </section>
  <About />
  <FreqQuestions />
  </>
  
  )
}

export default Home