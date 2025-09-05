import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { DoctorHeader } from '../../components/DoctorHeader';
import { Footer } from '../../components/Footer';
import './PrescriptionPage.css';

export function PrescriptionPage() {
  const [formData, setFormData] = useState({
    patientName: '',
    medicationName: '',
    strength: '',
    dosage: '',
    route: '',
    frequency: '',
    duration: '',
    refills: '',
    instructions: '',
  });

  const [isPrintMode, setIsPrintMode] = useState(false);

  // Use useEffect to automatically trigger the print dialog when in print mode
  useEffect(() => {
    if (isPrintMode) {
      window.print();
      // After printing (or canceling), return to normal view
      setTimeout(() => {
        setIsPrintMode(false);
      }, 500);

      setFormData({
          patientName: '',
          medicationName: '',
          strength: '',
          dosage: '',
          route: '',
          frequency: '',
          duration: '',
          refills: '',
          instructions: '',
      })
}
  }, [isPrintMode]);

const handleInputChange = (e) => {
  const { id, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [id]: value,
  }));
};

const handlePrint = (e) => {
  e.preventDefault();
  setIsPrintMode(true);
};

// If in print mode, render the simplified, print-friendly view
if (isPrintMode) {
  return (
    <div className="prescription-print-container">
      <div className="prescription-header">
        <h2>Prescription</h2>
      </div>
      <div className="prescription-info-section">
        <p><strong>Patient Name:</strong> {formData.patientName}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>
      <div className="medication-details-section">
        <h3>Medication Details</h3>
        <p><strong>Medication:</strong> {formData.medicationName}</p>
        <p><strong>Strength:</strong> {formData.strength}</p>
        <p><strong>Dosage:</strong> {formData.dosage}</p>
        <p><strong>Route:</strong> {formData.route}</p>
        <p><strong>Frequency:</strong> {formData.frequency}</p>
        <p><strong>Duration:</strong> {formData.duration}</p>
        <p><strong>Refills:</strong> {formData.refills}</p>
        <p><strong>Instructions:</strong> {formData.instructions}</p>
      </div>
      <div className="doctor-signature">
        <p>_________________________</p>
        <p>Dr Filr</p>
      </div>
    </div>
  );
}

// Otherwise, render the main form view
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
        <form className="prescription-form" onSubmit={handlePrint}>
          <div className="form-group">
            <label htmlFor="patient-name">Patient Name</label>
            <input type="text" id="patientName" placeholder="Search or select a patient." value={formData.patientName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="medication-name">Medication Name</label>
            <input type="text" id="medicationName" placeholder="e.g., Amoxicillin" value={formData.medicationName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="strength">Strength</label>
            <input type="text" id="strength" placeholder="e.g., 500 mg" value={formData.strength} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dosage">Dosage</label>
            <input type="text" id="dosage" placeholder="e.g., 1 tablet" value={formData.dosage} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="route">Route</label>
            <select id="route" value={formData.route} onChange={handleInputChange}>
              <option value="">Select Route</option>
              <option value="oral">Oral</option>
              <option value="topical">Topical</option>
              <option value="injectable">Injectable</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <input type="text" id="frequency" placeholder="e.g., Twice a day" value={formData.frequency} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" id="duration" placeholder="e.g., 10 days" value={formData.duration} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="refills">Refills</label>
            <input type="number" id="refills" placeholder="e.g., 3" value={formData.refills} onChange={handleInputChange} />
          </div>
          <div className="form-group full-width">
            <label htmlFor="instructions">Special Instructions</label>
            <textarea id="instructions" placeholder="e.g., Take with food." value={formData.instructions} onChange={handleInputChange}></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="save-prescription-button">Print Prescription</button>
          </div>
        </form>
      </section>
    </main>
    <Footer />
  </>
);
}
