import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './PatientRecordPage.css'


export function PatientRecordPage({ patientDetails, updatePatientMedicalHistory, updatePatientMedications, addPatientDiagnosis }) {
  // Use the useParams hook to get the patientId from the URL
  const { patientId } = useParams();

  // Use the .find() method to locate the patient object in the imported patientDetails array
  const patient = patientDetails.find(p => p.Id === patientId);

  // State variables for managing the editable fields and editing mode
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMedicationModalOpen, setIsMedicationModalOpen] = useState(false);
  const [isDiagnosesModalOpen, setIsDiagnosesModalOpen] = useState(false);

  const [editedAllergies, setEditedAllergies] = useState(patient?.allergies || '');
  const [editedConditions, setEditedConditions] = useState(patient?.conditions || '');
  const [editedSurgeries, setEditedSurgeries] = useState(patient?.surgeries || '');
  const [editedMedications, setEditedMedications] = useState(patient?.medications || []);
  const [newDiagnoses, setNewDiagnoses] = useState({
    date: '',
    reason: '',
    notes: ''
  });

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

  const handleSaveMedicalHistory = () => {
    // Call the function passed from App.jsx to update the data
    updatePatientMedicalHistory(patientId, {
      allergies: editedAllergies,
      conditions: editedConditions,
      surgeries: editedSurgeries
    });
    setIsModalOpen(false); // Exit editing mode
  };

  const handleSaveMedications = () => {
    // Call the function passed from App.jsx to update medications
    updatePatientMedications(patientId, editedMedications);
    setIsMedicationModalOpen(false); // Close the modal
  };

  const handleSaveDiagnoses = () => {
    // Call the function passed from App.jsx to add a new diagnosis
    addPatientDiagnosis(patientId, newDiagnoses);
    setIsDiagnosesModalOpen(false); // Close the modal
    // Reset the new diagnoses form fields
    setNewDiagnoses({ date: '', reason: '', notes: '' });
  };

  const handleMedicationChange = (index, value) => {
    const updatedMeds = [...editedMedications];
    updatedMeds[index] = value;
    setEditedMedications(updatedMeds);
  };

  const handleAddMedication = () => {
    setEditedMedications([...editedMedications, '']);
  };

  const handleRemoveMedication = (index) => {
    const updatedMeds = editedMedications.filter((_, i) => i !== index);
    setEditedMedications(updatedMeds);
  };

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
          <button
            className="action-button edit-button" onClick={() => setIsModalOpen(true)}>Edit Medical History
          </button>
          <button className="action-button edit-button" onClick={() => setIsMedicationModalOpen(true)}>Edit Current Medication</button>
          <button className="action-button add-note-button" onClick={() => setIsDiagnosesModalOpen(true)}>Add Diagonises </button>
        </section>
      </main>

      {/* The Modal Box for Editing */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Appointment</h3>
              <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-form">
              <label htmlFor="allergies">Known Allergies:</label>
              <input
                id="allergies"
                type="text"
                value={editedAllergies}
                onChange={(e) => setEditedAllergies(e.target.value)}
              />
              <label htmlFor="conditions">Chronic Conditions:</label>
              <input
                id="conditions"
                type="text"
                value={editedConditions}
                onChange={(e) => setEditedConditions(e.target.value)}
              />
              <label htmlFor="surgeries">Past Surgeries:</label>
              <input
                id="surgeries"
                type="text"
                value={editedSurgeries}
                onChange={(e) => setEditedSurgeries(e.target.value)}
              />
            </div>
            <div className="modal-form-actions">
              <button
                className="cancel"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="save"
                onClick={handleSaveMedicalHistory}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Modal Box for Editing Current Medications */}
      {isMedicationModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Current Medications</h3>
              <button onClick={() => setIsMedicationModalOpen(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-form">
              {editedMedications.map((med, index) => (
                <div key={index} className="medication-input-group">
                  <label htmlFor={`medication-${index}`}>Medication:</label>
                  <input
                    id={`medication-${index}`}
                    type="text"
                    value={med}
                    onChange={(e) => handleMedicationChange(index, e.target.value)}
                  />
                  <button className="remove-med-button" onClick={() => handleRemoveMedication(index)}>
                    - Remove
                  </button>
                </div>
              ))}
              <button className="add-med-button" onClick={handleAddMedication}>
                + Add Another
              </button>
            </div>
            <div className="modal-form-actions">
              <button
                className="cancel"
                onClick={() => setIsMedicationModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="save"
                onClick={handleSaveMedications}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Modal Box for Adding Diagnoses */}
      {isDiagnosesModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add Diagnoses</h3>
              <button onClick={() => setIsDiagnosesModalOpen(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-form">
              <label htmlFor="diagnoses-date">Date:</label>
              <input
                id="diagnoses-date"
                type="date"
                value={newDiagnoses.date}
                onChange={(e) => setNewDiagnoses({ ...newDiagnoses, date: e.target.value })}
              />
              <label htmlFor="diagnoses-reason">Reason for Visit:</label>
              <input
                id="diagnoses-reason"
                type="text"
                value={newDiagnoses.reason}
                onChange={(e) => setNewDiagnoses({ ...newDiagnoses, reason: e.target.value })}
              />
              <label htmlFor="diagnoses-notes">Notes:</label>
              <textarea
                id="diagnoses-notes"
                rows="4"
                value={newDiagnoses.notes}
                onChange={(e) => setNewDiagnoses({ ...newDiagnoses, notes: e.target.value })}
              />
            </div>
            <div className="modal-form-actions">
              <button
                className="cancel"
                onClick={() => setIsDiagnosesModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="save"
                onClick={handleSaveDiagnoses}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
