import { ArrowRight, Video } from 'lucide-react'

import { useBooking } from '../context/useBooking'

import './FinalCTA.css'

function FinalCTA() {
  const { openBooking } = useBooking()

  return (
    <section id="booking" className="final-cta-section">
      <div className="container">

        <div className="final-cta">

          <div className="final-cta-content">

            <div className="final-cta-icon">
              <Video size={24} strokeWidth={1.8} />
            </div>

            <span className="section-label">
              Start Your Consultation
            </span>

            <h2>
              Take the First Step Towards Personalized Care
            </h2>

            <p>
              Connect with Dr. Shital Shah through an online video
              consultation from wherever you are in the world.
            </p>

            <button
              className="btn btn-primary final-cta-button"
              onClick={openBooking}
            >
              Book a Video Consultation
              <ArrowRight size={18} />
            </button>

            <span className="final-cta-note">
              Online consultations available for international patients
            </span>

          </div>

          <div className="final-cta-decoration final-cta-decoration-one" />
          <div className="final-cta-decoration final-cta-decoration-two" />

        </div>

      </div>
    </section>
  )
}

export default FinalCTA