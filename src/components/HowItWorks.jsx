import {
  CalendarCheck,
  ClipboardCheck,
  Video,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'

import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: CalendarCheck,
      title: 'Book Your Consultation',
      description:
        'Choose a convenient date and time for your online consultation.',
    },
    {
      number: '02',
      icon: Video,
      title: 'Video Consultation',
      description:
        'Meet with Dr. Shital Shah online and discuss your health concerns.',
    },
    {
      number: '03',
      icon: ClipboardCheck,
      title: 'Receive Your Plan',
      description:
        'Your consultation is followed by personalized guidance based on your needs.',
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: 'Ongoing Guidance',
      description:
        'Continue your care with follow-up consultations and ongoing guidance.',
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">

        <div className="how-it-works-header">
          <span className="section-label">
            Simple Process
          </span>

          <h2 className="section-title">
            How Online Consultation Works
          </h2>

          <p className="section-description">
            Getting started is simple. Connect with the clinic
            from wherever you are and take the next step in your
            healthcare journey.
          </p>
        </div>

        <div className="how-it-works-steps">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                className="how-step"
                key={step.number}
                style={{
                  '--step-delay': `${index * 0.12}s`,
                }}
              >
                <div className="how-step-top">

                  <span className="how-step-number">
                    {step.number}
                  </span>

                  <div className="how-step-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="how-step-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            )
          })}

        </div>

        <div className="how-it-works-note">
          <div className="how-note-icon">
            <Video size={20} />
          </div>

          <div>
            <strong>
              Consult from the comfort of your home
            </strong>

            <p>
              No travel required. Connect with the clinic through
              an online video consultation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks