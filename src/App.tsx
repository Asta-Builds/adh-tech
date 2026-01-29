import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col font-display selection:bg-primary selection:text-white">
      {/* Global Background Blobs from HTML body section can be placed in Hero, but let's put it here if generic.
          Actually Hero has its own blobs. The HTML had fixed background blobs.
          Let's verify if Hero's blobs are sufficient or if we need global ones.
          The HTML had: <div class="fixed top-0 left-0... -z-10">...</div> inside the body.
          I put them in Hero but "fixed" means they stick.
          If I put them in Hero with "fixed", they work for the whole page.
      */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
