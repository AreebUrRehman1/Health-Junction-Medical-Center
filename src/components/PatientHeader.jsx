import { Link } from 'react-router'
import Logo from '/logo.png'

export function PatientHeader() {
  return (
    <>
      <header className="header">
        <div className="header-design">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo-img" />
              <h1>Patient Portal</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/patient-dashboard">Dashboard</Link></li>
              <li><Link to="/book-appointment">Appointments</Link></li>
              <li><Link to="/medical-records">Records</Link></li>
              <li><Link to="/index.html" className="cta-button">Log Out</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}