import {
  Activity,
  Droplets,
  HeartPulse,
  Leaf,
  Moon,
  Sparkles,
  Stethoscope,
} from 'lucide-react'

import { useBooking } from '../context/useBooking'

import './Conditions.css'

function Conditions() {
  const { openBooking } = useBooking()

  const conditions = [
    {
      icon: HeartPulse,
      title: 'PCOS & PCOD',
      description:
        'Personalized consultation and guidance for concerns related to PCOS and PCOD.',
    },
    {
      icon: Activity,
      title: 'Menstrual Health',
      description:
        'Support for irregular cycles, menstrual discomfort, and related concerns.',
    },
    {
      icon: Sparkles,
      title: 'Thyroid Health',
      description:
        'Individualized care for patients with thyroid-related health concerns.',
    },
    {
      icon: Leaf,
      title: 'Hormonal Health',
      description:
        'Consultation focused on understanding hormonal health and individual symptoms.',
    },
    {
      icon: Droplets,
      title: 'Fertility Support',
      description:
        'Personalized guidance for individuals seeking support around fertility concerns.',
    },
    {
      icon: Sparkles,
      title: 'Skin & Hair',
      description:
        'Consultation for common skin and hair concerns based on individual needs.',
    },
    {
      icon: Moon,
      title: 'Lifestyle & Wellness',
      description:
        'Guidance that considers lifestyle, daily habits, and overall wellbeing.',
    },
    {
      icon: Stethoscope,
      title: 'Other Concerns',
      description:
        'Have another concern? Discuss your situation during an online consultation.',
    },
  ]

  return (
    <section id="conditions" className="conditions-section">
      <div className="container">

        <div className="conditions-header">
          <span className="section-label">
            Areas of Consultation
          </span>

          <h2 className="section-title">
            Conditions We Consult For
          </h2>

          <p className="section-description">
            Every consultation is personalized to the individual.
            Explore some of the health concerns for which patients
            can seek an online consultation.
          </p>
        </div>

        <div className="conditions-grid">
          {conditions.map((condition, index) => {
            const Icon = condition.icon

            return (
              <article
                className="condition-card"
                key={condition.title}
                style={{
                  '--condition-delay': `${index * 0.08}s`,
                }}
              >
                <div className="condition-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3>{condition.title}</h3>

                <p>{condition.description}</p>

                <span className="condition-arrow">
                  →
                </span>
              </article>
            )
          })}
        </div>

        <div className="conditions-bottom">
          <div>
            <strong>
              Don't see your concern?
            </strong>

            <p>
              You can still book a consultation to discuss
              your individual situation.
            </p>
          </div>

          <button
            className="btn btn-primary"
            onClick={openBooking}
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  )
}

export default Conditions