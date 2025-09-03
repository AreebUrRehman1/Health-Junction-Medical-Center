import { Link } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Filr from '../assets/photo/Filr.jpg'
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <title>Home</title>

      <Header />

      <main>

        <section className="hero-section">
          <div className="hero-content">
            <h2>Your Health, Our Mission</h2>
            <p>Providing compassionate and cutting-edge healthcare for a healthier community.</p>
            <Link to="/sign-up" className="cta-button cta-button2">Book an Appointment</Link>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>About Us</h2>
            <p>Health Junction Medical Center is a state-of-the-art facility dedicated to excellence in patient care. Our
              mission is to combine the latest medical technology with compassionate, personalized service. We believe in
              building lasting relationships with our patients and empowering them to take charge of their health. Located
              in the heart of the community, we are your one-stop solution for all your healthcare needs.</p>
          </div>
        </section>

        <section className="services-section">
          <div className="service-card">
            <h3>Cardiology</h3>
            <p>Our expert cardiologists provide advanced care for heart conditions, including diagnostic tests and
              personalized treatment plans.</p>
          </div>
          <div className="service-card">
            <h3>Neurology</h3>
            <p>We specialize in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous
              system, from migraines to complex diseases.</p>
          </div>
          <div className="service-card">
            <h3>Pediatrics</h3>
            <p>Dedicated to the health of your children, our pediatricians offer comprehensive medical care for infants,
              children, and adolescents.</p>
          </div>
        </section>

        <section className="practitioner-section">
          <div className="practitioner-content">
            <h2>Meet Our Lead Practitioner</h2>
            <div className="practitioner-info">
              <div><img src={Filr} alt="Dr. John Filr" className="practitioner-photo" /></div>
              <div className="practitioner-details">
                <h3>Dr. John Filr</h3>
                <p><strong>Specialty:</strong> Internal Medicine</p>
                <p>Dr. Filr is a board-certified internal medicine physician with over 15 years of experience. His
                  patient-centered approach and commitment to providing holistic care have made his a trusted name in the
                  community. He is passionate about preventative health and managing chronic conditions.</p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </>
  )
}