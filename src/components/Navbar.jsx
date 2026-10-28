import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useBooking } from '../context/useBooking'

import './Navbar.css'
import acutelogo from '../assets/acutelogo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { openBooking } = useBooking()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMenuOpen(false)
  }

  const handleBookingClick = () => {
    setMenuOpen(false)
    openBooking()
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img
            src={acutelogo}
            alt="Acute Homoeo Clinic"
          />
        </Link>

        <nav className="navbar-links">
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
        </nav>

        <button
          className="btn btn-primary navbar-cta"
          onClick={handleBookingClick}
        >
          Book Consultation
        </button>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? 'Close menu' : 'Open menu'
          }
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu-open' : ''
        }`}
      >
        <button
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('about')}
        >
          About
        </button>

        <button
          onClick={() => scrollToSection('conditions')}
        >
          Conditions
        </button>

        <button
          onClick={() => scrollToSection('how-it-works')}
        >
          How It Works
        </button>

        <button
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>

        <button
          className="btn btn-primary mobile-book-button"
          onClick={handleBookingClick}
        >
          Book Consultation
        </button>
      </div>
    </header>
  )
}

export default Navbar