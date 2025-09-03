import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import './CareersPage.css'


export function CareersPage() {
  return (
    <>
    <title>Careers</title>

    <Header />

      <main>
        <section className="careers-section">
          <div className="careers-content">
            <h2>Join Our Team</h2>
            <p>At Health Junction Medical Center, we believe our staff is our greatest asset. We are a team of dedicated
              professionals committed to providing exceptional healthcare and making a positive impact on our community. If
              you are passionate, skilled, and eager to grow, we invite you to explore career opportunities with us.</p>

            <div className="job-openings-container">
              <h3>Current Openings</h3>
              <div className="job-opening">
                <h4>Registered Nurse (RN)</h4>
                <p>We are seeking compassionate and skilled Registered Nurses for our inpatient care units. The ideal
                  candidate will have excellent clinical skills and a strong commitment to patient well-being.</p>
                <ul>
                  <li><strong>Department:</strong> Inpatient Services</li>
                  <li><strong>Type:</strong> Full-time</li>
                  <li><strong>Requirements:</strong> Active RN license, 2+ years of experience.</li>
                </ul>
                <a href="#" className="apply-button">Apply Now</a>
              </div>

              <div className="job-opening">
                <h4>Medical Assistant</h4>
                <p>Our busy clinic is looking for a professional and organized Medical Assistant to support our team of
                  physicians. This role involves administrative tasks and clinical support.</p>
                <ul>
                  <li><strong>Department:</strong> Outpatient Clinic</li>
                  <li><strong>Type:</strong> Full-time</li>
                  <li><strong>Requirements:</strong> Certified Medical Assistant, strong communication skills.</li>
                </ul>
                <a href="#" className="apply-button">Apply Now</a>
              </div>

              <div className="job-opening">
                <h4>Physical Therapist</h4>
                <p>A great opportunity for a Physical Therapist to join our rehabilitation department. You will work with
                  patients to regain mobility and improve their quality of life.</p>
                <ul>
                  <li><strong>Department:</strong> Rehabilitation</li>
                  <li><strong>Type:</strong> Full-time / Part-time</li>
                  <li><strong>Requirements:</strong> DPT or equivalent, state license.</li>
                </ul>
                <a href="#" className="apply-button">Apply Now</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}