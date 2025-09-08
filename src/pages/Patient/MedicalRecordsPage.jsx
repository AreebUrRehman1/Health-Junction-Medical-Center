import { PatientHeader } from "../../components/PatientHeader"
import { Footer } from "../../components/Footer"
import './MedicalRecordsPage.css'


export function MedicalRecordsPage() {
  return (
    <>

    <title>Patient Portal - Medical Records</title>

    <PatientHeader />

      <main className="records-main">
        <section className="medical-records-section">
          <h2>Your Medical Records</h2>
          <p className="section-description">
            Here is a read-only history of your past appointments and prescriptions.
          </p>

          <div className="records-container">

            <div className="record-type-section">
              <h3>Past Appointments</h3>
              <div className="record-cards-container">

                <div className="record-card appointment-card2">
                  <h4>Annual Check-up</h4>
                  <p><strong>Date:</strong> Wednesday, October 16, 2024</p>
                  <p><strong>Doctor:</strong> Dr. Evelyn Reed</p>
                  <p><strong>Notes:</strong> Patient is in good health. Advised to continue current diet and exercise routine.</p>
                </div>

                <div className="record-card appointment-card2">
                  <h4>Follow-up on Lab Results</h4>
                  <p><strong>Date:</strong> Friday, July 12, 2024</p>
                  <p><strong>Doctor:</strong> Dr. Samuel Carter</p>
                  <p><strong>Notes:</strong> Discussed recent bloodwork. All levels are within normal range. No further action needed.</p>
                </div>
              </div>
            </div>


            <div className="record-type-section">
              <h3>Prescription History</h3>
              <div className="record-cards-container">

                <div className="record-card prescription-card">
                  <h4>Ibuprofen</h4>
                  <p><strong>Date Prescribed:</strong> July 12, 2024</p>
                  <p><strong>Dosage:</strong> 200mg, as needed for pain.</p>
                  <p><strong>Prescribed by:</strong> Dr. Samuel Carter</p>
                </div>

                <div className="record-card prescription-card">
                  <h4>Amoxicillin</h4>
                  <p><strong>Date Prescribed:</strong> April 22, 2024</p>
                  <p><strong>Dosage:</strong> 500mg, three times a day for 7 days.</p>
                  <p><strong>Prescribed by:</strong> Dr. Evelyn Reed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}