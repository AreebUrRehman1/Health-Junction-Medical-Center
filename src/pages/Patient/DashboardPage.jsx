import { Link } from 'react-router'
import { PatientHeader } from '../../components/PatientHeader'
import { Footer } from '../../components/Footer'
import Appointment from '../../assets/Icons/appointment.png'
import MedicalRecrd from '../../assets/Icons/medical-record.png'
import './DashboardPage.css'


export function DashboardPage() {
  return (
    <>
    <title>Patient Portal - Dashboard</title>

    <PatientHeader />

      <main className="dashboard-main">
        <section className="dashboard-header-section">
          <div className="dashboard-welcome">
            <h2>Welcome, Sarah!</h2>
            <p>Your health information at a glance.</p>
          </div>
          <div className="dashboard-stats">
            <div className="stat-card">
              <p className="stat-label">Upcoming Appointments</p>
              <h4 className="stat-number">1</h4>
            </div>
            <div className="stat-card">
              <p className="stat-label">Messages</p>
              <h4 className="stat-number">0</h4>
            </div>
          </div>
        </section>

        <section className="upcoming-appointment-section">
          <h3>Upcoming Appointment</h3>
          <div className="appointment-card">
            <div className="appointment-details">
              <p className="appointment-date">Wednesday, October 16, 2024</p>
              <p className="appointment-time">10:00 AM</p>
              <p className="appointment-patient">Dr. Evelyn Reed</p>
              <p className="appointment-reason">Annual check-up</p>
            </div>
            <div className="appointment-actions">
              <button className="reschedule-button">Reschedule</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
          <Link to="/book-appointment" className="view-all-link">View All Appointments &rarr;</Link>
        </section>

        <section className="quick-links-section">
          <h3>Quick Links</h3>
          <div className="quick-links-container">
            <Link to="/book-appointment" className="quick-link-card">
              <img src={Appointment} alt="Book Appointment Icon" />
                <h4>Book an Appointment</h4>
                <p>Find and schedule with a doctor.</p>
            </Link>
            <Link to="/medical-records" className="quick-link-card">
              <img src={MedicalRecrd} alt="Medical Records Icon" />
                <h4>Medical Records</h4>
                <p>View your medical history and prescriptions.</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}