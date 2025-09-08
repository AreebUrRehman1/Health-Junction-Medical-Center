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
import { DashboardPage as DoctorDashboardPage } from './pages/Doctors/DashboardPage';
import { PatientListPage } from './pages/Doctors/PatientListPage';
import { PatientRecordPage } from './pages/Doctors/PatientRecordPage';
import { PrescriptionPage } from './pages/Doctors/PrescriptionPage';
import { SchedulePage } from './pages/Doctors/SchedulePage';
import { DashboardPage as PatientDashboardPage } from './pages/Patient/DashboardPage';
import { patientDetails as defaultPatientDetails } from './utils/patient-data';
import { MedicalRecordsPage } from './pages/Patient/MedicalRecordsPage';
import { BookAppointmentPage } from './pages/Patient/BookAppointmentPage';
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

  // Initialize patientDetails state from localStorage or use default data
  const [patientDetails, setPatientDetails] = useState(() => {
    const savedPatients = localStorage.getItem('patientDetails');
    return savedPatients ? JSON.parse(savedPatients) : defaultPatientDetails;
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

  // Use useEffect to save patientDetails to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('patientDetails', JSON.stringify(patientDetails));
  }, [patientDetails]);

  // Function to update a patient's medical history
  const updatePatientMedicalHistory = (patientId, updatedData) => {
    setPatientDetails(prevDetails =>
      prevDetails.map(patient =>
        patient.Id === patientId ? { ...patient, ...updatedData } : patient
      )
    );
  };

  // Function to update a patient's medications
  const updatePatientMedications = (patientId, updatedMedications) => {
    setPatientDetails(prevDetails =>
      prevDetails.map(patient =>
        patient.Id === patientId ? { ...patient, medications: updatedMedications } : patient
      )
    );
  };

  // Function to add a new diagnosis to a patient's record
  const addPatientDiagnosis = (patientId, newDiagnosis) => {
    setPatientDetails(prevDetails =>
      prevDetails.map(patient => {
        if (patient.Id === patientId) {
          // Create a new array with the new diagnosis added
          const updatedRecentVisits = [...patient.recentVisits, newDiagnosis];
          return { ...patient, recentVisits: updatedRecentVisits };
        }
        return patient;
      })
    );
  };

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
      <Route path="doctor-dashboard" element={<DoctorDashboardPage setRememberMeCount={setRememberMeCount} totalAppointments={totalAppointments} appointments={appointments} totalWeeklyAppointments={totalWeeklyAppointments} />} />
      <Route path="patient-list" element={<PatientListPage />} />
      <Route path="patient-record/:patientId" element={<PatientRecordPage patientDetails={patientDetails} updatePatientMedicalHistory={updatePatientMedicalHistory} addPatientDiagnosis={addPatientDiagnosis} updatePatientMedications={updatePatientMedications} />} />
      <Route path="prescription" element={<PrescriptionPage />} />
      <Route path="doctor-schedule" element={<SchedulePage appointments={appointments} setAppointments={setAppointments} />} />
      <Route path="patient-dashboard" element={<PatientDashboardPage />} />
      <Route path="medical-records" element={<MedicalRecordsPage />} />
      <Route path="book-appointment" element={<BookAppointmentPage />} />
    </Routes>
  );
}

export default App;
