import { Link } from 'react-router'
import { DoctorHeader } from '../../components/DoctorHeader'
import { Footer } from '../../components/Footer'
import Note from '../../assets/Icons/note.png'
import Prescription from '../../assets/Icons/prescription.png'
import Patient from '../../assets/Icons/patient.png'
import './DashboardPage.css'

export function DashboardPage() {
  return (
    <>
      <title>Doctor Portal - Dashboard</title>

      <DoctorHeader />

      <main className="dashboard-main">
        <section className="dashboard-header-section">
          <div className="dashboard-welcome">
            <h2>Welcome, Dr. Filr</h2>
            <p>Your portal for managing patients and daily schedules.</p>
          </div>
          <div className="dashboard-stats">
            <div className="stat-card">
              <p className="stat-number">12</p>
              <p className="stat-label">Appointments Today</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">7</p>
              <p className="stat-label">New Patients This Week</p>
            </div>
          </div>
        </section>

        <section className="today-appointments-section">
          <h3>Today's Appointments</h3>
          <div className="appointments-list">
            <div className="appointment-card">
              <p className="appointment-time">09:00 AM</p>
              <p className="appointment-patient">John Doe</p>
              <p className="appointment-reason">Follow-up check-up</p>
            </div>
            <div className="appointment-card">
              <p className="appointment-time">10:30 AM</p>
              <p className="appointment-patient">Jane Smith</p>
              <p className="appointment-reason">Annual physical</p>
            </div>
            <div className="appointment-card">
              <p className="appointment-time">11:00 AM</p>
              <p className="appointment-patient">David Lee</p>
              <p className="appointment-reason">Lab results review</p>
            </div>
            <div className="appointment-card">
              <p className="appointment-time">02:00 PM</p>
              <p className="appointment-patient">Emily Chen</p>
              <p className="appointment-reason">New patient consultation</p>
            </div>
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