import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Sparkles,
} from 'lucide-react'

import { useBooking } from '../context/useBooking'

import docImage from '../assets/docimage.png'
import './Hero.css'

function Hero() {
  const { openBooking } = useBooking()

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Expert Homeopathic Consultation from India,
            <span> Accessible Worldwide.</span>
          </h1>

          <p className="hero-description">
            Personalized homoeopathic consultations with Dr. Shital Shah,
            available online for patients across the world.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary hero-book-button"
              onClick={openBooking}
            >
              Book a Video Consultation
              <ArrowRight size={18} />
            </button>

            <a href="#about" className="hero-about-link">
              Meet Dr. Shital Shah
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-benefits">
            <div className="hero-benefit">
              <CheckCircle2 size={17} />
              <span>Online consultations</span>
            </div>

            <div className="hero-benefit">
              <CheckCircle2 size={17} />
              <span>International patients</span>
            </div>

            <div className="hero-benefit">
              <CheckCircle2 size={17} />
              <span>Personalized care</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="hero-image-glow" />

          <div className="hero-image-wrapper">
            <img
              src={docImage}
              alt="Dr. Shital Shah"
              className="hero-doctor-image"
            />
          </div>

          <div className="hero-experience-card">
            <div className="experience-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <strong>33+ Years</strong>
              <span>Clinical Experience</span>
            </div>
          </div>

          <div className="hero-global-card">
            <div className="global-card-icon">
              <Globe2 size={18} />
            </div>

            <div>
              <strong>Global Care</strong>
              <span>Patients Worldwide</span>
            </div>
          </div>

          <div className="hero-country country-usa">
            <span>🇺🇸</span>
            USA
          </div>

          <div className="hero-country country-uk">
            <span>🇬🇧</span>
            UK
          </div>

          <div className="hero-country country-canada">
            <span>🇨🇦</span>
            Canada
          </div>

          <div className="hero-country country-uae">
            <span>🇦🇪</span>
            UAE
          </div>

          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span />
        Scroll to explore
      </div>
    </section>
  )
}

export default Hero