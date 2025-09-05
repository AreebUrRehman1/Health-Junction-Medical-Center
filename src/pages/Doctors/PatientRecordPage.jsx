import { Link, useParams } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import { patientDetails } from '../../utils/patient-data'
import './PatientRecordPage.css'


export function PatientRecordPage() {

  // Use the useParams hook to get the patientId from the URL
  const { patientId } = useParams();

  // Use the .find() method to locate the patient object in the imported patientDetails array
  const patient = patientDetails.find(p => p.Id === patientId);

  if (!patient) {
    return (
      <main className="patient-record-main">
        <section className="patient-record-header">
          <Link to="/patient-list" className="back-link">&larr; Back to Patient List</Link>
          <h2>Patient Not Found</h2>
        </section>
      </main>
    );
  }

  return (
    <>
      <title>Doctor Portal - Patient Record</title>

      <DoctorHeader />

      <main className="patient-record-main">
        <section className="patient-record-header">
          <Link to="/patient-list" className="back-link">&larr; Back to Patient List</Link>
          <h2>Patient Record</h2>
          <div className="patient-info-summary">
            <h3>{patient.name}</h3>
            <p>Patient ID: {patient.Id}</p>
          </div>
        </section>

        <section className="patient-details-container">
          <div className="details-card">
            <h3>Personal Information</h3>
            <p><strong>Date of Birth:</strong> {patient.dateOfBirth}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Phone:</strong> {patient.phone}</p>
            <p><strong>Address:</strong> {patient.address}</p>
          </div>

          <div className="details-card">
            <h3>Medical History</h3>
            <p><strong>Known Allergies:</strong> {patient.allergies}</p>
            <p><strong>Chronic Conditions:</strong> {patient.conditions}</p>
            <p><strong>Past Surgeries:</strong> {patient.surgeries}</p>
          </div>

          <div className="details-card">
            <h3>Current Medications</h3>
            <ul>
              {patient.medications.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
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
                {patient.recentVisits.map((visit, index) => (
                  <tr key={index}>
                    <td data-label="Date"><div className="set">{visit.date}</div></td>
                    <td data-label="Reason for Visit"><div className="set">{visit.reason}</div></td>
                    <td data-label="Notes"><div className="set">{visit.notes}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="actions-section">
          <h3>Actions</h3>
          <button className="action-button edit-button">Edit Medical History</button>
          <button className="action-button edit-button">Edit Current Medication</button>
          <button className="action-button add-note-button">Add Diagonises </button>
        </section>
      </main>

      <Footer />
    </>
  )
}