import {
  Award,
  Globe2,
  HeartHandshake,
  Stethoscope,
} from 'lucide-react'

import docImage from '../assets/docimage.png'
import './About.css'

function About() {
  const highlights = [
    {
      icon: Award,
      title: '33+ Years',
      text: 'Clinical experience',
    },
    {
      icon: Globe2,
      title: 'International',
      text: 'Online consultations',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized',
      text: 'Patient-focused care',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container about-container">

        {/* IMAGE */}

        <div className="about-visual">
          <div className="about-image-background" />

          <div className="about-image-wrapper">
            <img
              src={docImage}
              alt="Dr. Shital Shah"
              className="about-doctor-image"
            />
          </div>

          <div className="about-experience">
            <div className="about-experience-icon">
              <Award size={20} />
            </div>

            <div>
              <strong>33+ Years</strong>
              <span>Clinical Experience</span>
            </div>
          </div>

          <div className="about-decoration about-decoration-one" />
          <div className="about-decoration about-decoration-two" />
        </div>

        {/* CONTENT */}

        <div className="about-content">

          <span className="section-label">
            Meet Your Doctor
          </span>

          <h2 className="section-title">
            Dr. Shital Shah
          </h2>

          <p className="about-intro">
            Personalized homoeopathic care with a focus on
            understanding each patient's individual needs.
          </p>

          <p className="about-description">
            With more than three decades of clinical experience,
            Dr. Shital Shah provides personalized consultations
            designed around each patient's individual concerns,
            lifestyle, and health journey.
          </p>

          <p className="about-description">
            Through online consultations, patients living outside
            India can conveniently connect with the clinic and
            receive guidance without needing to travel.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  className="about-highlight"
                  key={item.title}
                >
                  <div className="about-highlight-icon">
                    <Icon size={19} />
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="about-approach">
            <div className="about-approach-icon">
              <Stethoscope size={20} />
            </div>

            <div>
              <strong>
                A thoughtful approach to every consultation
              </strong>

              <p>
                Your concerns, history, and individual circumstances
                are considered during your consultation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About