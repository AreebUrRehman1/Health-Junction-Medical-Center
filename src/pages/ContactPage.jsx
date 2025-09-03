import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import './ContactPage.css'

export function ContactPage() {
  return (
    <>
      <title>Contact Us</title>
      <Header />

      <main>
        <section className="contact-hero">
          <h2>Get in Touch</h2>
          <p>We are here to help you. Find the right contact information or send us a message.</p>
        </section>
        <section className="contact-sections-container">
          <div className="section-card">
            <h3>General Inquiries</h3>
            <p>For all non-urgent questions and general information.</p>
            <div className="contact-details">
              <p>Email: <a href="mailto:info@healthjunction.com">info@healthjunction.com</a></p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="section-card">
            <h3>Appointment & Booking</h3>
            <p>To schedule, reschedule, or cancel an appointment.</p>
            <div className="contact-details">
              <p>Email: <a href="mailto:appointments@healthjunction.com">appointments@healthjunction.com</a></p>
              <p>Phone: (123) 456-7891</p>
            </div>
          </div>
          <div className="section-card">
            <h3>Billing & Insurance</h3>
            <p>For questions regarding your medical bills or insurance claims.</p>
            <div className="contact-details">
              <p>Email: <a href="mailto:billing@healthjunction.com">billing@healthjunction.com</a></p>
              <p>Phone: (123) 456-7892</p>
            </div>
          </div>
        </section>
        <section className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-question">What are your hours of operation?</div>
            <div className="faq-answer">We are open from Monday to Friday, 8:00 AM to 5:00 PM.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Do you accept my insurance?</div>
            <div className="faq-answer">We accept most major insurance plans. Please contact our billing department for a
              specific list.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">How can I book an appointment?</div>
            <div className="faq-answer">You can book an appointment by calling our appointments line or through our online
              patient portal.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">How do I access my medical records?</div>
            <div className="faq-answer">You can access your medical records through our secure online patient portal. If you
              need assistance, please contact the medical records department.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What payment methods do you accept?</div>
            <div className="faq-answer">We accept all major credit cards, checks, and cash. Online payments can be made through
              our patient portal.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Do I need to make an appointment for a flu shot?</div>
            <div className="faq-answer">No appointment is necessary for flu shots during our regular business hours. Please
              check our website for specific walk-in clinic times.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What should I bring to my first appointment?</div>
            <div className="faq-answer">Please bring your insurance card, a photo ID, and a list of any current medications you
              are taking.</div>
          </div>
        </section>
        <section className="map-container">
          <h2>Find Our Location</h2>
          <p>Health Junction Medical Center is conveniently located at:</p>
          <p className="address">123 Medical Way, Healthville, HJ 12345</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2110254924194!2d-122.08424968468164!3d37.42206597982531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6b4f7a2d80d%3A0x6b7a5a8f5f0d3466!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619897184420!5m2!1sen!2sus"
            allowfullscreen="" loading="lazy"></iframe>
        </section>
      </main>

      <Footer />
    </>
  )
}