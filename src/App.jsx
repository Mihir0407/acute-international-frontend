import { Routes, Route } from 'react-router-dom'

import BookingProvider from './context/BookingProvider'
import BookingModal from './components/BookingModal'

import Home from './pages/Home'
import Privacy from './pages/Privacy'
import TermsConditions from './pages/TermsConditions'
import MedicalDisclaimer from './pages/MedicalDisclaimer'

function App() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route
          path="/medical-disclaimer"
          element={<MedicalDisclaimer />}
        />
      </Routes>

      <BookingModal />
    </BookingProvider>
  )
}

export default App