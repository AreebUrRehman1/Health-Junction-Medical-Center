import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import './TermsOfServicePage.css'


export function TermsOfServicePage() {
  return (
    <>
      <title>Terms of Services</title>
      <Header />

      <main>
        <section className="terms-of-service-section">
          <div className="terms-of-service-content">
            <h2>Terms of Service</h2>
            <p>Welcome to Health Junction Medical Center. These Terms of Service govern your use of our Hospital Management
              System. By accessing or using our services, you agree to be bound by these terms.</p>

            <h3>1. Acceptance of Terms</h3>
            <p>By using the website, you agree to comply with and be bound by these Terms. If you do not agree, you may not
              use our services.</p>

            <h3>2. Disclaimer of Medical Advice</h3>
            <p>The content provided on this system is for informational purposes only and is not a substitute for
              professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have regarding a medical condition.</p>

            <h3>3. User Responsibilities</h3>
            <p>You are responsible for maintaining the confidentiality of your account and password and for restricting
              access to your computer. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h3>4. Prohibited Uses</h3>
            <p>You may not use our system for any unlawful purpose. This includes, but is not limited to, unauthorized
              access,
              data collection, or interference with the system's operation.</p>

            <h3>5. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Health
              Junction
              Medical Center and is protected by copyright laws.</p>

            <h3>6. Limitation of Liability</h3>
            <p>Health Junction Medical Center will not be liable for any damages arising from the use or inability to use
              this system.</p>

            <h3>7. Governing Law</h3>
            <p>These Terms of Service are governed by the laws of the state of Berlin. Any disputes will be resolved in
              the courts of Berlin,Germany.</p>

            <h3>8. Contact Us</h3>
            <p>If you have any questions about these Terms of Service, please contact us at: <a
              href="mailto:info@healthjunction.com">info@healthjunction.com</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}