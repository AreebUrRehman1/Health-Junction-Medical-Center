import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday';
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

dayjs.extend(weekday);

// Hardcoded appointments data to use as a fallback if localStorage is empty
const defaultAppointments = {
  [dayjs().weekday(1).format('YYYY-MM-DD')]: [
    { time: '09:00 AM', patient: 'John Doe', reason: 'Follow-up check-up' },
    { time: '10:30 AM', patient: 'Jane Smith', reason: 'Annual physical' },
    { time: '09:00 AM', patient: 'John Doe', reason: 'Follow-up check-up' },
    { time: '11:00 AM', patient: 'David Lee', reason: 'Lab results review' },
  ],
  [dayjs().weekday(2).format('YYYY-MM-DD')]: [
    { time: '09:30 AM', patient: 'Emily Chen', reason: 'New patient consultation' },
    { time: '11:00 AM', patient: 'Michael Brown', reason: 'Chronic pain management' },
  ],
  [dayjs().weekday(4).format('YYYY-MM-DD')]: [
    { time: '09:00 AM', patient: 'Susan Jones', reason: 'Fever and symptoms' },
    { time: '10:00 AM', patient: 'Robert Wilson', reason: 'Allergy consultation' },
  ],
  [dayjs().weekday(5).format('YYYY-MM-DD')]: [
    { time: '02:00 PM', patient: 'Lisa Taylor', reason: 'Post-op follow-up' },
  ],
};


function App() {
  const [rememberMeCount, setRememberMeCount] = useState(Number(localStorage.getItem('rememberMe')) || 0)

  // Initialize appointments state from localStorage or use default data
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : defaultAppointments;
  });

  // Calculate the total number of appointments
  const totalAppointments = appointments[dayjs().format('YYYY-MM-DD')]?.length || 0;

    // Calculate the total number of appointments for the current week
  const totalWeeklyAppointments = Object.values(appointments).reduce((total, dailyAppointments) => {
    return total + dailyAppointments.length;
  }, 0);

  // Use useEffect to save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="sign-up" element={<SignUpPage rememberMeCount={rememberMeCount} />} />
      <Route path="sign-in" element={<SignInPage rememberMeCount={rememberMeCount} setRememberMeCount={setRememberMeCount} />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="terms-of-service" element={<TermsOfServicePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="doctors" element={<DoctorsPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="doctor-dashboard" element={<DashboardPage setRememberMeCount={setRememberMeCount} totalAppointments={totalAppointments} appointments={appointments} totalWeeklyAppointments={totalWeeklyAppointments}/>} />
      <Route path="clinical-note" element={<ClinicalNotePage />} />
      <Route path="edit-patient-details" element={<EditPatientDetailsPage />} />
      <Route path="patient-list" element={<PatientListPage />} />
      <Route path="patient-record" element={<PatientRecordPage />} />
      <Route path="prescription" element={<PrescriptionPage />} />
      <Route path="doctor-schedule" element={<SchedulePage appointments={appointments} setAppointments={setAppointments} />} />
    </Routes>
  );
}

export default App;
