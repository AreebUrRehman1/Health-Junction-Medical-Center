import { Link } from 'react-router'
import dayjs from 'dayjs'
import { DoctorHeader } from '../../components/DoctorHeader'
import { Footer } from '../../components/Footer'
import Note from '../../assets/Icons/note.png'
import Prescription from '../../assets/Icons/prescription.png'
import Patient from '../../assets/Icons/patient.png'
import './DashboardPage.css'

export function DashboardPage({ setRememberMeCount, totalAppointments, appointments, totalWeeklyAppointments }) {

  const today = dayjs().format('YYYY-MM-DD');
  const todaysAppointments = appointments[today] || [];

  return (
    <>
      <title>Doctor Portal - Dashboard</title>

      <DoctorHeader setRememberMeCount={setRememberMeCount} />

      <main className="dashboard-main">
        <section className="dashboard-header-section">
          <div className="dashboard-welcome">
            <h2>Welcome, Dr. Filr</h2>
            <p>Your portal for managing patients and daily schedules.</p>
          </div>
          <div className="dashboard-stats">
            <div className="stat-card">
              <p className="stat-number">{totalAppointments}</p>
              <p className="stat-label">Appointments Today</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">{totalWeeklyAppointments}</p>
              <p className="stat-label">Total Appointments This Week</p>
            </div>
          </div>
        </section>

        <section className="today-appointments-section">
          <h3>Today's Appointments</h3>
          <div className="appointments-list">
            {todaysAppointments.length > 0 ? (
              todaysAppointments.map((appointment, index) => (
                <div key={index} className="appointment-card">
                  <p className="appointment-time">{appointment.time}</p>
                  <p className="appointment-patient">{appointment.patient}</p>
                  <p className="appointment-reason">{appointment.reason}</p>
                </div>
              ))
            ) : (
              <p className="no-appointments">No appointments for today.</p>
            )}
          </div>
          <Link to="/doctor-schedule" className="view-all-link">View Full Schedule &rarr;</Link>
        </section>

        <section className="quick-links-section">
          <h3>Quick Links</h3>
          <div className="quick-links-container">
            <Link to="/patient-list" className="quick-link-card">
              <img src={Patient} alt="Patients Icon" />
              <h4>View Patients</h4>
              <p>Access and manage all patient records.</p>
            </Link>
            <Link to="/prescription" className="quick-link-card">
              <img src={Prescription} alt="Prescription Icon" />
              <h4>Write a Prescription</h4>
              <p>Create new prescriptions for patients.</p>
            </Link>
            <Link to="/patient-list" className="quick-link-card">
              <img src={Note} alt="Note Icon" />
              <h4>Add a Note</h4>
              <p>Add clinical notes to a patient's chart.</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}