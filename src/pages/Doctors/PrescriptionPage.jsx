import { Link } from 'react-router'
import { DoctorHeader } from '../../components/DoctorHeader'
import { Footer } from '../../components/Footer'
import './PrescriptionPage.css'


export function PrescriptionPage() {
  return (
    <>
      <title>New Prescription</title>

      <DoctorHeader />

      <main className="new-prescription-main">
        <section className="new-prescription-header">
          <Link to="/doctor-dashboard" className="back-link">&larr; Back to Dashboard</Link>
          <h2>Write a New Prescription</h2>
        </section>

        <section className="prescription-form-container">
          <form className="prescription-form">
            <div className="form-group">
              <label for="patient-name">Patient Name</label>
              <input type="text" id="patient-name" placeholder="Search or select a patient." />
            </div>
            <div className="form-group">
              <label for="medication-name">Medication Name</label>
              <input type="text" id="medication-name" placeholder="e.g., Amoxicillin" />
            </div>
            <div className="form-group">
              <label for="strength">Strength</label>
              <input type="text" id="strength" placeholder="e.g., 500 mg" />
            </div>
            <div className="form-group">
              <label for="dosage">Dosage</label>
              <input type="text" id="dosage" placeholder="e.g., 1 tablet" />
            </div>
            <div className="form-group">
              <label for="route">Route</label>
              <select id="route">
                <option value="">Select Route</option>
                <option value="oral">Oral</option>
                <option value="topical">Topical</option>
                <option value="injectable">Injectable</option>
              </select>
            </div>
            <div className="form-group">
              <label for="frequency">Frequency</label>
              <input type="text" id="frequency" placeholder="e.g., Twice a day" />
            </div>
            <div className="form-group">
              <label for="duration">Duration</label>
              <input type="text" id="duration" placeholder="e.g., 10 days" />
            </div>
            <div className="form-group">
              <label for="refills">Refills</label>
              <input type="number" id="refills" placeholder="e.g., 3" />
            </div>
            <div className="form-group full-width">
              <label for="instructions">Special Instructions</label>
              <textarea id="instructions" placeholder="e.g., Take with food."></textarea>
            </div>

            <div className="form-buttons">
              <button type="submit" className="save-prescription-button">Save Prescription</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}