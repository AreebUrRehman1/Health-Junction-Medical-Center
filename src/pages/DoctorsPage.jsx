import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Filr from '../assets/photo/Filr.jpg'
import David from '../assets/photo/David.jpg'
import Jane from '../assets/photo/Jane.jpg'
import Lisa from '../assets/photo/Lisa.jpg'
import Michael from '../assets/photo/Michael.jpg'
import Sarah from '../assets/photo/Sarah.jpg'
import './DoctorsPage.css'


export function DoctorsPage() {
  return (
    <>
      <title>Our Doctors</title>

      <Header />

      <main>
        <section className="doctors-hero">
          <h2>Meet Our Medical Professionals</h2>
          <p>Our dedicated team of doctors is committed to providing expert, compassionate care tailored to your needs. They
            bring a wealth of experience and expertise to every consultation.</p>
        </section>

        <section className="doctor-grid">
          <div className="doctor-card">
            <img src={Filr} alt="Dr. John Filr" />
            <h3>Dr. John Filr</h3>
            <p>Internal Medicine</p>
            <p>With over 15 years of experience, Dr. Filr specializes in adult health and preventative care.</p>
          </div>
          <div className="doctor-card">
            <img src={Jane} alt="Dr. Jane Smith" />
            <h3>Dr. Jane Smith</h3>
            <p>Pediatrics</p>
            <p>Dr. Smith is passionate about children's health, from infancy through adolescence.</p>
          </div>
          <div className="doctor-card">
            <img src={David} alt="Dr. David Chen" />
            <h3>Dr. David Chen</h3>
            <p>Cardiology</p>
            <p>A specialist in heart health, Dr. Chen provides advanced care for cardiac conditions.</p>
          </div>
          <div className="doctor-card">
            <img src={Lisa} alt="Dr. Lisa Ray" />
            <h3>Dr. Lisa Ray</h3>
            <p>Dermatology</p>
            <p>Dr. Ray focuses on skin conditions and cosmetic procedures to help you look and feel your best.</p>
          </div>
          <div className="doctor-card">
            <img src={Michael} alt="Dr. Michael Lee" />
            <h3>Dr. Michael Lee</h3>
            <p>General Surgery</p>
            <p>Dr. Lee is an experienced surgeon with a focus on minimally invasive procedures.</p>
          </div>
          <div className="doctor-card">
            <img src={Sarah} alt="Dr. Sarah Evans" />
            <h3>Dr. Sarah Evans</h3>
            <p>Oncology</p>
            <p>Dr. Evans provides compassionate care and treatment for cancer patients.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}