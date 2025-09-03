import { Link } from 'react-router'
import Logo from '/logo.png'
import './Header.css'

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header-design">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo-img" />
            <h1>Health Junction Medical Center</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/sign-up" className="cta-button">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}