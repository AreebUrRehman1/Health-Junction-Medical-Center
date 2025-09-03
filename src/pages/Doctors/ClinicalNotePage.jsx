import { Link } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './ClinicalNotePage.css'

export function ClinicalNotePage() {
  return (
    <>
    <title>Add Clinical Note</title>

    <DoctorHeader />

      <main className="clinical-note-main">
        <section className="clinical-note-header">
          <Link to="/patient-record" className="back-link">&larr; Back to Patient Record</Link>
          <h2>Add New Clinical Note</h2>
          <div className="note-info-summary">
            <h3>Patient: John Doe</h3>
            <p>Patient ID: PT8847</p>
          </div>
        </section>

        <section className="clinical-note-form-container">
          <form className="clinical-note-form">
            <div className="form-group">
              <label for="subjective">Subjective (S)</label>
              <textarea id="subjective"
                placeholder="Document the patient's chief complaint, symptoms, and relevant history."></textarea>
            </div>

            <div className="form-group">
              <label for="objective">Objective (O)</label>
              <textarea id="objective"
                placeholder="Record objective information, such as vital signs, physical exam findings, and lab results."></textarea>
            </div>

            <div className="form-group">
              <label for="assessment">Assessment (A)</label>
              <textarea id="assessment"
                placeholder="Provide a diagnosis or clinical impression based on the subjective and objective data."></textarea>
            </div>

            <div className="form-group">
              <label for="plan">Plan (P)</label>
              <textarea id="plan"
                placeholder="Outline the treatment plan, including prescriptions, follow-up appointments, and patient education."></textarea>
            </div>

            <div className="form-buttons">
              <button type="submit" className="save-note-button">Save Clinical Note</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}