import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import PartialSection from './components/PartialSection'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div>
      <ContactForm />
      {/* <Hero /> */}
      <About />
      <PartialSection />
      <Hero />
    </div>
  )
}

export default App
