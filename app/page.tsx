import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Skills />
      <Clients />
      <Testimonials />
      <Projects />
      <ContactForm />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Home
