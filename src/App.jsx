import { Route, Routes } from 'react-router'
import { HomePage } from './pages/Homepage.jsx'
import { SignUpPage } from './pages/SignUpPage.jsx'
import { SignInPage } from './pages/SignInPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { TermsOfServicePage } from './pages/TermsOfServicePage.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx'
import { DoctorsPage } from './pages/DoctorsPage.jsx'
import { CareersPage } from './pages/CareersPage.jsx'
import { DashboardPage } from './pages/Doctors/DashboardPage.jsx'
import { ClinicalNotePage } from './pages/Doctors/ClinicalNotePage.jsx'
import { EditPatientDetailsPage } from './pages/Doctors/EditPatientDetailsPage.jsx'
import { PatientListPage } from './pages/Doctors/PatientListPage.jsx'
import { PatientRecordPage } from './pages/Doctors/PatientRecordPage.jsx'
import { PrescriptionPage } from './pages/Doctors/PrescriptionPage.jsx'
import { SchedulePage } from './pages/Doctors/SchedulePage.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path = "sign-up" element={<SignUpPage />} />
      <Route path = "sign-in" element={<SignInPage />} />
      <Route path = "services" element={<ServicesPage />} />
      <Route path = "contact" element={<ContactPage />} />
      <Route path = "terms-of-service" element={<TermsOfServicePage />} />
      <Route path = "privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path = "doctors" element={<DoctorsPage />} />
      <Route path = "careers" element={<CareersPage />} />
      <Route path = "doctor-dashboard" element={<DashboardPage />} />
      <Route path = "clinical-note" element={<ClinicalNotePage />} />
      <Route path = "edit-patient-details" element={<EditPatientDetailsPage />} />
      <Route path = "patient-list" element={<PatientListPage />} />
      <Route path = "patient-record" element={<PatientRecordPage />} />
      <Route path = "prescription" element={<PrescriptionPage />} />
      <Route path = "doctor-schedule" element={<SchedulePage />} />
    </Routes>
  )
}

export default App
