import {
  Globe2,
  Video,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react'

import './TrustSection.css'

function TrustSection() {
  const features = [
    {
      icon: Globe2,
      title: 'Care Across Borders',
      description:
        'Access your consultation from wherever you are in the world.',
    },
    {
      icon: Video,
      title: 'Online Video Consultation',
      description:
        'Connect with Dr. Shital Shah through a convenient online consultation.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Attention',
      description:
        'Every consultation is focused on understanding your individual needs.',
    },
  ]

  const countries = ['USA', 'UK', 'Canada', 'Australia', 'UAE']

  return (
    <section className="trust-section">
      <div className="container">

        <div className="trust-header">
          <span className="section-label">International Care</span>

          <h2 className="section-title">
            Trusted Care, Wherever You Are
          </h2>

          <p className="section-description">
            Online consultations make it easier for international patients
            to connect with Dr. Shital Shah from the comfort of their home.
          </p>
        </div>

        <div className="trust-features">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                className="trust-feature"
                key={feature.title}
                style={{
                  '--feature-delay': `${index * 0.12}s`,
                }}
              >
                <div className="trust-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div className="trust-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

                <CheckCircle2
                  className="trust-check"
                  size={18}
                  strokeWidth={2}
                />
              </div>
            )
          })}
        </div>

        <div className="trust-global">
          <div className="trust-global-icon">
            <Globe2 size={22} strokeWidth={1.8} />
          </div>

          <div className="trust-global-text">
            <span>Serving patients internationally</span>
            <p>
              Convenient online access from multiple countries
            </p>
          </div>

          <div className="trust-countries">
            {countries.map((country) => (
              <span key={country} className="trust-country">
                {country}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustSection