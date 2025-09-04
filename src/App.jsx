import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { CareersPage } from './pages/CareersPage';
import { DashboardPage } from './pages/Doctors/DashboardPage';
import { ClinicalNotePage } from './pages/Doctors/ClinicalNotePage';
import { EditPatientDetailsPage } from './pages/Doctors/EditPatientDetailsPage';
import { PatientListPage } from './pages/Doctors/PatientListPage';
import { PatientRecordPage } from './pages/Doctors/PatientRecordPage';
import { PrescriptionPage } from './pages/Doctors/PrescriptionPage';
import { SchedulePage } from './pages/Doctors/SchedulePage';
import './App.css';

function App() {
    const [rememberMeCount, setRememberMeCount] = useState(Number(localStorage.getItem('rememberMe')) || 0)

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="sign-up" element={<SignUpPage rememberMeCount={rememberMeCount} setRememberMeCount={setRememberMeCount} />} />
      <Route path="sign-in" element={<SignInPage rememberMeCount={rememberMeCount} setRememberMeCount={setRememberMeCount} />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="terms-of-service" element={<TermsOfServicePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="doctors" element={<DoctorsPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="doctor-dashboard" element={<DashboardPage />} />
      <Route path="clinical-note" element={<ClinicalNotePage />} />
      <Route path="edit-patient-details" element={<EditPatientDetailsPage />} />
      <Route path="patient-list" element={<PatientListPage />} />
      <Route path="patient-record" element={<PatientRecordPage />} />
      <Route path="prescription" element={<PrescriptionPage />} />
      <Route path="doctor-schedule" element={<SchedulePage />} />
    </Routes>
  );
}

export default App;