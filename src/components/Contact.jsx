import {
  Mail,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowRight,
} from 'lucide-react'

import { useBooking } from '../context/useBooking'

import './Contact.css'

function Contact() {
  const { openBooking } = useBooking()

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="contact-header">
          <span className="section-label">
            Contact
          </span>

          <h2 className="section-title">
            We're Here to Help You Get Started
          </h2>

          <p className="section-description">
            Have a question about online consultations or want to
            discuss your next step? Get in touch with the clinic.
          </p>
        </div>

        <div className="contact-layout">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <div className="contact-info-header">
              <h3>
                Connect With Acute Homoeo Clinic
              </h3>

              <p>
                Whether you are in India or another part of the
                world, you can contact the clinic for consultation
                information and assistance.
              </p>
            </div>

            <div className="contact-items">

              <a
                href="mailto:info@acutehomoeoclinic.com"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    info@acutehomoeoclinic.com
                  </strong>
                </div>
              </a>

              <a
                href="https://wa.me/"
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item-icon">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>
                    Contact us on WhatsApp
                  </strong>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Clinic</span>
                  <strong>
                    India
                  </strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>Consultations</span>
                  <strong>
                    By appointment
                  </strong>
                </div>
              </div>

            </div>
          </div>

          {/* CTA CARD */}

          <div className="contact-cta-card">

            <div className="contact-cta-glow" />

            <div className="contact-cta-content">

              <span className="contact-cta-label">
                Online Consultation
              </span>

              <h3>
                Ready to Book Your Consultation?
              </h3>

              <p>
                Choose a convenient date and time and connect
                with Dr. Shital Shah through a video consultation.
              </p>

              <button
                className="btn btn-primary contact-book-button"
                onClick={openBooking}
              >
                Book a Video Consultation
                <ArrowRight size={18} />
              </button>

              <span className="contact-cta-note">
                Available for patients internationally
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact