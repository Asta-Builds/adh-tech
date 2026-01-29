import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Services from './components/Services'
import Stats from './components/Stats'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col font-display selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Services />
        <Stats />
        <About />
        <CaseStudies />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
