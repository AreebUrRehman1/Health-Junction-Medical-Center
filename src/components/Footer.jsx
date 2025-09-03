import { Link } from 'react-router'
import './Footer.css'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>123 Medical Way, Healthville, HJ 12345</p>
            <p>Email: info@healthjunction.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="quick-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2024 Health Junction Medical Center. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}