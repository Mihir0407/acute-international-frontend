import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustSection from '../components/TrustSection'
import About from '../components/About'
import Conditions from '../components/Conditions'
import HowItWorks from '../components/HowItWorks'
import Contact from '../components/Contact'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustSection />
        <About />
        <Conditions />
        <HowItWorks />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}

export default Home