import { Link } from 'react-router'
import { Footer } from '../../components/Footer'
import { DoctorHeader } from '../../components/DoctorHeader'
import './PatientListPage.css'


export function PatientListPage() {
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
              <tr>
                <td data-label="Patient Name">
                  John Doe
                </td>
                <td data-label="Patient ID">PT8847</td>
                <td data-label="Date of Birth">01/15/1990</td>
                <td data-label="Contact">john.doe@email.com</td>
                <td data-label="Actions">
                  <Link to="/patient-record"><button className="action-button view-button">View Details</button></Link>
                </td>
              </tr>
              <tr>
                <td data-label="Patient Name">
                  Jane Smith
                </td>
                <td data-label="Patient ID">PT9235</td>
                <td data-label="Date of Birth">05/20/1985</td>
                <td data-label="Contact">jane.smith@email.com</td>
                <td data-label="Actions">
                  <Link to="/patient-record"><button className="action-button view-button">View Details</button></Link>
                </td>
              </tr>
              <tr>
                <td data-label="Patient Name">
                  David Lee
                </td>
                <td data-label="Patient ID">PT7654</td>
                <td data-label="Date of Birth">11/03/1972</td>
                <td data-label="Contact">david.lee@email.com</td>
                <td data-label="Actions">
                  <Link to="/patient-record"><button className="action-button view-button">View Details</button></Link>
                </td>
              </tr>
              <tr>
                <td data-label="Patient Name">
                  Emily Chen
                </td>
                <td data-label="Patient ID">PT1450</td>
                <td data-label="Date of Birth">08/22/2001</td>
                <td data-label="Contact">emily.chen@email.com</td>
                <td data-label="Actions">
                  <Link to="/patient-record"><button className="action-button view-button">View Details</button></Link>
                </td>
              </tr>
              <tr>
                <td data-label="Patient Name">
                  Michael Brown
                </td>
                <td data-label="Patient ID">PT3289</td>
                <td data-label="Date of Birth">04/10/1960</td>
                <td data-label="Contact">michael.brown@email.com</td>
                <td data-label="Actions">
                  <Link to="/patient-record"><button className="action-button view-button">View Details</button></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </>
  )
}