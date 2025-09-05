import { Link } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './PatientListPage.css'


export function PatientListPage() {

  const patientDetails = [
    {
      name: 'John Doe',
      Id: 'PT8847',
      dateOfBirth: '01/15/1990',
      contact: 'john.doe@email.com',
    }, {
      name: 'Jane Smith',
      Id: 'PT9235',
      dateOfBirth: '05/20/1985',
      contact: 'jane.smith@email.com',
    }, {
      name: 'David Lee',
      Id: 'PT7654',
      dateOfBirth: '11/03/1972',
      contact: 'david.lee@email.com',
    }, {
      name: 'Emily Chen',
      Id: 'PT1450',
      dateOfBirth: '08/22/2001',
      contact: 'emily.chen@email.com',
    }, {
      name: 'Michael Brown',
      Id: 'PT3289',
      dateOfBirth: '04/10/1960',
      contact: 'michael.brown@email.com',
    }
  ]

  return (
    <>
      <title>Doctor Portal - Patient List</title>

      <DoctorHeader />

      <main className="patient-list-main">
        <section className="patient-list-header">
          <h2>Your Patients</h2>
          <div className="search-container">
            <input type="text" id="patient-search" placeholder="Search by name or ID." />
          </div>
        </section>

        <section className="patient-list-container">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientDetails.map((patient) => {
                  return(
                  <tr key={patient.Id}>
                    <td data-label="Patient Name">
                      {patient.name}
                    </td>
                    <td data-label="Patient ID">{patient.Id}</td>
                    <td data-label="Date of Birth">{patient.dateOfBirth}</td>
                    <td data-label="Contact">{patient.contact}</td>
                    <td data-label="Actions">
                      <Link to={`/patient-record/${patient.Id}`}><button className="action-button view-button">View Details</button></Link>
                    </td>
                  </tr>
                  )
              })}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </>
  )
}