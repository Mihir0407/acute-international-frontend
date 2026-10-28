import { useState } from 'react'
import { X, CalendarDays, Clock3, ShieldCheck } from 'lucide-react'

import { useBooking } from '../context/useBooking'

import './BookingModal.css'

function BookingModal() {
  const { isBookingOpen, closeBooking } = useBooking()

  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    whatsapp: '',
    email: '',
    concern: '',
    date: '',
    time: '',
    timezone: '',
    consent: false,
  })

  if (!isBookingOpen) {
    return null
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Booking request:', formData)

    alert(
      'Booking form submitted. Backend connection will be added next.'
    )

    closeBooking()
  }

  return (
    <div
      className="booking-overlay"
      onMouseDown={closeBooking}
    >
      <div
        className="booking-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="booking-close"
          onClick={closeBooking}
          aria-label="Close booking form"
        >
          <X size={22} />
        </button>

        <div className="booking-header">
          <span className="section-label">
            Online Consultation
          </span>

          <h2>Book a Video Consultation</h2>

          <p>
            Fill in your details and choose a convenient date and
            time for your consultation.
          </p>
        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
          <div className="booking-field">
            <label htmlFor="fullName">
              Full Name <span>*</span>
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-row">
            <div className="booking-field">
              <label htmlFor="country">
                Country <span>*</span>
              </label>

              <input
                id="country"
                name="country"
                type="text"
                placeholder="e.g. United Kingdom"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="booking-field">
              <label htmlFor="whatsapp">
                WhatsApp Number <span>*</span>
              </label>

              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+44 1234 567890"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="concern">
              Primary Concern <span>*</span>
            </label>

            <textarea
              id="concern"
              name="concern"
              rows="3"
              placeholder="Briefly tell us what you would like to discuss"
              value={formData.concern}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-row">
            <div className="booking-field">
              <label htmlFor="date">
                Consultation Date <span>*</span>
              </label>

              <div className="booking-input-icon">
                <CalendarDays size={17} />

                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label htmlFor="time">
                Preferred Time <span>*</span>
              </label>

              <div className="booking-input-icon">
                <Clock3 size={17} />

                <input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="timezone">
              Your Timezone
            </label>

            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
            >
              <option value="">
                Select your timezone
              </option>

              <option value="America/New_York">
                Eastern Time — USA / Canada
              </option>

              <option value="America/Chicago">
                Central Time — USA / Canada
              </option>

              <option value="America/Denver">
                Mountain Time — USA / Canada
              </option>

              <option value="America/Los_Angeles">
                Pacific Time — USA / Canada
              </option>

              <option value="Europe/London">
                United Kingdom
              </option>

              <option value="Europe/Paris">
                Central European Time
              </option>

              <option value="Australia/Sydney">
                Australia — Sydney
              </option>

              <option value="Asia/Dubai">
                UAE
              </option>

              <option value="Asia/Kolkata">
                India
              </option>

              <option value="Pacific/Auckland">
                New Zealand
              </option>
            </select>
          </div>

          <label className="booking-consent">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />

            <span>
              I agree to the clinic's{' '}
              <a href="/privacy-policy">
                Privacy Policy
              </a>{' '}
              and understand that this form is only for
              requesting a consultation.
            </span>
          </label>

          <div className="booking-security-note">
            <ShieldCheck size={17} />

            <span>
              Please do not include detailed medical history or
              sensitive health information in this form.
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary booking-submit"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal