import { useEffect, useState } from 'react'
import { BookingContext } from './BookingContext'

function BookingProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBooking = () => {
    setIsBookingOpen(true)
  }

  const closeBooking = () => {
    setIsBookingOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isBookingOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isBookingOpen])

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export default BookingProvider