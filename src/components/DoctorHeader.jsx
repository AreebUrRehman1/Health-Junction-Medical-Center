import { Link } from 'react-router'
import Logo from '/logo.png'
import './Header.css'

export function DoctorHeader({setRememberMeCount}) {

  function logOut() {
    setRememberMeCount(0);
  }


  return (
    <>
      <header className="header">
        <div className="header-design">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo-img" />
              <h1>Doctor Portal</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/doctor-dashboard">Dashboard</Link></li>
              <li><Link to="/doctor-schedule">Schedule</Link></li>
              <li><Link to="/patient-list">Patients</Link></li>
              <li><Link to="/" className="cta-button" onClick={logOut}>Log Out</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}