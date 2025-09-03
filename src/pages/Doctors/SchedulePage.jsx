import { DoctorHeader } from '../../components/DoctorHeader'
import { Footer } from '../../components/Footer'
import './SchedulePage.css'


export function SchedulePage() {
  return (
    <>
      <title>Doctor Portal - Schedule</title>

      <DoctorHeader />

      <main className="schedule-main">
        <section className="schedule-header">
          <h2>Your Weekly Schedule</h2>
          <div className="schedule-controls">
            <button className="control-button">&larr; Previous Week</button>
            <div className="current-week">
              <h3>September 2 - September 8, 2024</h3>
            </div>
            <button className="control-button">Next Week &rarr;</button>
            <button className="add-button">Add Appointment</button>
          </div>
        </section>

        <section className="weekly-schedule-container">
          <div className="day-column">
            <h4>Monday, Sep 2</h4>
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
          </div>

          <div className="day-column">
            <h4>Tuesday, Sep 3</h4>
            <div className="appointment-card">
              <p className="appointment-time">09:30 AM</p>
              <p className="appointment-patient">Emily Chen</p>
              <p className="appointment-reason">New patient consultation</p>
            </div>
            <div className="appointment-card">
              <p className="appointment-time">11:00 AM</p>
              <p className="appointment-patient">Michael Brown</p>
              <p className="appointment-reason">Chronic pain management</p>
            </div>
          </div>

          <div className="day-column">
            <h4>Wednesday, Sep 4</h4>
            <p className="day-off">No appointments scheduled</p>
          </div>

          <div className="day-column">
            <h4>Thursday, Sep 5</h4>
            <div className="appointment-card">
              <p className="appointment-time">09:00 AM</p>
              <p className="appointment-patient">Susan Jones</p>
              <p className="appointment-reason">Fever and symptoms</p>
            </div>
            <div className="appointment-card">
              <p className="appointment-time">10:00 AM</p>
              <p className="appointment-patient">Robert Wilson</p>
              <p className="appointment-reason">Allergy consultation</p>
            </div>
          </div>

          <div className="day-column">
            <h4>Friday, Sep 6</h4>
            <div className="appointment-card">
              <p className="appointment-time">02:00 PM</p>
              <p className="appointment-patient">Lisa Taylor</p>
              <p className="appointment-reason">Post-op follow-up</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}