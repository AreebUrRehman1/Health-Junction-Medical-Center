import { Link } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './EditPatientDetailsPage.css'

export function EditPatientDetailsPage() {
  return (
    <>
      <title>Edit Patient Details</title>

      <DoctorHeader />

      <main className="edit-patient-main">
        <section className="edit-patient-header">
          <Link to="/patient-record" className="back-link">&larr; Back to Patient Record</Link>
          <h2>Edit Patient Details</h2>
        </section>

        <section className="edit-form-container">
          <form className="patient-edit-form">
            <div className="form-group">
              <label for="name">Patient Name *</label>
              <input type="text" id="name" value="John Doe" />
            </div>
            <div className="form-group">
              <label for="dob">Date of Birth *</label>
              <input type="date" id="dob" value="1990-01-15" />
            </div>
            <div className="form-group">
              <label for="gender">Gender *</label>
              <select id="gender">
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label for="contact">Email Address</label>
              <input type="email" id="contact" value="john.doe@email.com" />
            </div>
            <div className="form-group">
              <label for="phone">Phone Number *</label>
              <input type="tel" id="phone" value="(555) 123-4567" />
            </div>
            <div className="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" value="123 Main Street, Anytown, USA 12345" />
            </div>
            <div className="form-group">
              <label for="allergies">Known Allergies</label>
              <input type="text" id="allergies" value="Penicillin" />
            </div>
            <div className="form-group">
              <label for="conditions">Chronic Conditions</label>
              <input type="text" id="conditions" value="Hypertension, Type 2 Diabetes" />
            </div>
            <div className="form-group">
              <label for="surgeries">Past Surgeries</label>
              <textarea id="surgeries">Appendectomy (2010)</textarea>
            </div>
            <div className="form-buttons">
              <button type="submit" className="save-button">Save Changes</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}