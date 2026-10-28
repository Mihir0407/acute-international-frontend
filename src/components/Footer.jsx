import { ArrowUp, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useBooking } from '../context/useBooking'

import acutelogo from '../assets/acutelogo.png'
import './Footer.css'

function Footer() {
  const { openBooking } = useBooking()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img
                src={acutelogo}
                alt="Acute Homoeo Clinic"
              />
            </Link>

            <p>
              Personalized homoeopathic care with convenient
              online consultations for patients in India and
              around the world.
            </p>

            <div className="footer-contact-links">

              <a href="mailto:info@acutehomoeoclinic.com">
                <Mail size={16} />
                <span>info@acutehomoeoclinic.com</span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              <div>
                <MapPin size={16} />
                <span>India</span>
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <button onClick={() => scrollToSection('home')}>
              Home
            </button>

            <button onClick={() => scrollToSection('about')}>
              About
            </button>

            <button onClick={() => scrollToSection('conditions')}>
              Conditions
            </button>

            <button onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </button>

            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>

          {/* CONSULTATION */}

          <div className="footer-column">
            <h3>Consultation</h3>

            <button
              onClick={openBooking}
              className="footer-book-button"
            >
              Book a Consultation
            </button>

            <span>
              Online Video Consultation
            </span>

            <span>
              International Patients
            </span>

            <span>
              By Appointment
            </span>
          </div>

          {/* LEGAL */}

          <div className="footer-column">
            <h3>Legal</h3>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/medical-disclaimer">
              Medical Disclaimer
            </Link>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Acute Homoeo Clinic.
            All rights reserved.
          </p>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer