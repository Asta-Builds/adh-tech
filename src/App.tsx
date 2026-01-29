import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col font-display selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
