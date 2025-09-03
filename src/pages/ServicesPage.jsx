import { Link } from 'react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import GeneralSurgery from '../assets/Icons/general-surgery.png'
import PreventiveMedicine from '../assets/Icons/preventive-medicine.png'
import Pediatrics from '../assets/Icons/pediatrics.png'
import Neurology from '../assets/Icons/neurology.png'
import GeneralCheckUp from '../assets/Icons/general-checkup.png'
import EmergencyRoom from '../assets/Icons/emergency-room.png'
import Dermatology from '../assets/Icons/dermatology.png'
import ChronicIllness from '../assets/Icons/chronic-illness.png'
import Cardiology from '../assets/Icons/cardiology.png'
import './ServicesPage.css'

export function ServicesPage() {
  return (
    <>
      <title>Our Services</title>

      <Header />

      <main>
        <section className="services-hero">
          <div className="hero-content">
            <h2>Comprehensive Care for You</h2>
            <p>We offer a wide range of specialized medical services to meet all your healthcare needs.</p>
          </div>
        </section>

        <section className="services-list">
          <div className="service-category">
            <h3>Primary Care</h3>
            <div className="service-cards-container">
              <div className="service-card">
                <img src={GeneralCheckUp} alt="General Check-ups Icon" />
                  <h4>General Check-ups</h4>
                  <p>Routine physical exams and wellness screenings to help you maintain optimal health.</p>
              </div>
              <div className="service-card">
                <img src={PreventiveMedicine} alt="Preventative Medicine Icon" />
                  <h4>Preventative Medicine</h4>
                  <p>Guidance on diet, exercise, and lifestyle to prevent future health issues.</p>
              </div>
              <div className="service-card">
                <img src={ChronicIllness} alt="Chronic Disease Management Icon" />
                  <h4>Chronic Disease Management</h4>
                  <p>Long-term care and support for conditions like diabetes, hypertension, and asthma.</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <h3>Specialized Medical Services</h3>
            <div className="service-cards-container">
              <div className="service-card">
                <img src={Cardiology} alt="Cardiology Icon" />
                  <h4>Cardiology</h4>
                  <p>Advanced care for heart and vascular conditions, including diagnostics and treatment.</p>
              </div>
              <div className="service-card">
                <img src={Dermatology} alt="Dermatology Icon" />
                  <h4>Dermatology</h4>
                  <p>Expert care for skin, hair, and nail conditions, from acne to complex skin diseases.</p>
              </div>
              <div className="service-card">
                <img src={Pediatrics} alt="Pediatrics Icon" />
                  <h4>Pediatrics</h4>
                  <p>Specialized medical care for infants, children, and adolescents, focusing on their unique needs.</p>
              </div>
              <div className="service-card">
                <img src={Neurology} alt="Neurology Icon" />
                  <h4>Neurology</h4>
                  <p>Comprehensive diagnosis and treatment for disorders of the nervous system.</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <h3>Surgical & Emergency Services</h3>
            <div className="service-cards-container">
              <div className="service-card">
                <img src={GeneralSurgery} alt="General Surgery Icon" />
                  <h4>General Surgery</h4>
                  <p>A wide range of surgical procedures performed by highly skilled surgeons.</p>
              </div>
              <div className="service-card">
                <img src={EmergencyRoom} alt="Emergency Room Icon" />
                  <h4>Emergency Room</h4>
                  <p>24/7 emergency care for acute illnesses, injuries, and life-threatening conditions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Take the Next Step?</h2>
          <p>Book an appointment or contact us for more information on our services.</p>
          <div className="cta-buttons">
            <Link to="/sign-up" className="cta-button cta-button2">Book an Appointment</Link>
            <Link to="/contact" className="secondary-cta-button">Contact Us</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}