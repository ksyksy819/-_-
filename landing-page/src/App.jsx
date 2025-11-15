import React from 'react'
import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import SolutionOverview from './components/SolutionOverview'
import Features from './components/Features'
import Personas from './components/Personas'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Features />
      <Personas />
      <HowItWorks />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

