import { PatientHeader } from "../../components/PatientHeader"
import { Footer } from "../../components/Footer"
import './BookAppointmentPage.css'


export function BookAppointmentPage() {
  return (
    <>

      <title>Patient Portal - Appointments</title>

      <PatientHeader />

      <main className="appointment-main">
        <section className="appointments-list-section">
          <h2>Your Appointments</h2>
          <div className="appointment-card3-container">

            <div className="appointment-card3 upcoming">
              <div className="appointment-header">
                <h4>Upcoming Appointment</h4>
              </div>
              <div className="appointment-details">
                <p><strong>Date:</strong> Wednesday, October 16, 2024</p>
                <p><strong>Time:</strong> 10:00 AM</p>
                <p><strong>Doctor:</strong> Dr. Evelyn Reed</p>
                <p><strong>Reason:</strong> Annual check-up</p>
              </div>
              <div className="appointment-actions">
                <button className="action-button reschedule-button2">Reschedule</button>
                <button className="action-button cancel-button2">Cancel</button>
              </div>
            </div>


            <div className="appointment-card3 past">
              <div className="appointment-header">
                <h4>Past Appointment</h4>
              </div>
              <div className="appointment-details">
                <p><strong>Date:</strong> Friday, July 12, 2024</p>
                <p><strong>Time:</strong> 02:30 PM</p>
                <p><strong>Doctor:</strong> Dr. Samuel Carter</p>
                <p><strong>Reason:</strong> Follow-up on lab results</p>
              </div>
            </div>


            <div className="appointment-card3 past">
              <div className="appointment-header">
                <h4>Past Appointment</h4>
              </div>
              <div className="appointment-details">
                <p><strong>Date:</strong> Monday, April 22, 2024</p>
                <p><strong>Time:</strong> 09:00 AM</p>
                <p><strong>Doctor:</strong> Dr. Evelyn Reed</p>
                <p><strong>Reason:</strong> Flu symptoms</p>
              </div>
            </div>
          </div>
        </section>

        <section className="book-appointment-section">
          <h2>Book a New Appointment</h2>
          <div className="booking-form-container">
            <div className="doctor-search-bar">
              <input type="text" placeholder="Search for a doctor by name or specialty." />
              <button className="search-button">Search</button>
            </div>
            <div className="booking-form">
              <div className="form-group">
                <label htmlFor="doctor">Select Doctor</label>
                <select id="doctor" required>
                  <option value="">-- Choose a doctor --</option>
                  <option value="evelyn-reed">Dr. Evelyn Reed (Internal Medicine)</option>
                  <option value="samuel-carter">Dr. Samuel Carter (Pediatrics)</option>
                  <option value="isabella-cruz">Dr. Isabella Cruz (Dermatology)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input type="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Select Time</label>
                <input type="time" id="time" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="reason">Reason for Visit</label>
                <textarea id="reason" placeholder="Briefly describe your reason for the visit."></textarea>
              </div>
              <div className="form-buttons">
                <button type="submit" className="book-now-button">Book Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}