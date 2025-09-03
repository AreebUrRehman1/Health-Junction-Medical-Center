import { Link } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './PatientRecordPage.css'


export function PatientRecordPage() {
  return (
    <>
      <title>Patient Record - John Doe</title>

      <DoctorHeader />

      <main className="patient-record-main">
        <section className="patient-record-header">
          <Link to="/patient-list" className="back-link">&larr; Back to Patient List</Link>
          <h2>Patient Record</h2>
          <div className="patient-info-summary">
            <h3>John Doe</h3>
            <p>Patient ID: PT8847</p>
          </div>
        </section>

        <section className="patient-details-container">
          <div className="details-card">
            <h3>Personal Information</h3>
            <p><strong>Date of Birth:</strong> 01/15/1990</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Contact:</strong> john.doe@email.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Main Street, Anytown, USA 12345</p>
          </div>

          <div className="details-card">
            <h3>Medical History</h3>
            <p><strong>Known Allergies:</strong> Penicillin</p>
            <p><strong>Chronic Conditions:</strong> Hypertension, Type 2 Diabetes</p>
            <p><strong>Past Surgeries:</strong> Appendectomy (2010)</p>
          </div>

          <div className="details-card">
            <h3>Current Medications</h3>
            <ul>
              <li>Metformin (for diabetes)</li>
              <li>Lisinopril (for hypertension)</li>
              <li>Aspirin (daily)</li>
            </ul>
          </div>
        </section>

        <section className="recent-visits-section">
          <h3>Recent Appointments</h3>
          <div className="visits-table-container">
            <table className="visits-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reason for Visit</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Date"><div className="set">08/29/2024</div></td>
                  <td data-label="Reason for Visit"><div className="set">Annual physical check-up</div></td>
                  <td data-label="Notes"><div className="set">Patient reported feeling well. Blood work ordered. Discussed diet and exercise.</div></td>
                </tr>
                <tr>
                  <td data-label="Date"><div className="set">05/10/2024</div></td>
                  <td data-label="Reason for Visit"><div className="set">Hypertension follow-up</div></td>
                  <td data-label="Notes"><div className="set">Adjusted Lisinopril dosage. Blood pressure readings were stable.</div></td>
                </tr>
                <tr>
                  <td data-label="Date"><div className="set">02/02/2024</div></td>
                  <td data-label="Reason for Visit"><div className="set">Sore throat and fever</div></td>
                  <td data-label="Notes"><div className="set">Diagnosed with viral pharyngitis. Advised rest and hydration.</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="actions-section">
          <h3>Actions</h3>
          <Link to="/edit-patient-details"><button className="action-button edit-button">Edit Patient Details</button></Link>
          <Link to="/clinical-note"><button className="action-button add-note-button">Add New Clinical Note</button></Link>
        </section>
      </main>

      <Footer />
    </>
  )
}