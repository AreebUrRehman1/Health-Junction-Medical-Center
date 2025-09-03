import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import './PrivacyPolicyPage.css'

export function PrivacyPolicyPage() {
  return (
    <>
    <title>Privacy Policy</title>
      <Header />

      <main>
        <section className="privacy-policy-section">
          <div className="privacy-policy-content">
            <h2>Privacy Policy</h2>
            <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or
              use our Hospital Management System.</p>

            <h3>1. Information We Collect</h3>
            <p>We collect various types of information to provide and improve our services to you. This may include:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, address, date of birth, and contact details
                (email, phone number).</li>
              <li><strong>Health Information:</strong> Medical history, diagnosis, treatment plans, and other health-related
                data.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected through cookies and
                other tracking technologies.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>The information we collect is used for the following purposes:</p>
            <ul>
              <li>To provide and manage healthcare services.</li>
              <li>To process appointments and billing.</li>
              <li>To communicate with you regarding your healthcare and our services.</li>
              <li>To improve our services and system functionality.</li>
              <li>For internal administrative purposes and to comply with legal obligations.</li>
            </ul>

            <h3>3. Data Security</h3>
            <p>We are committed to protecting your personal information. We use a variety of security measures, including
              encryption and access controls, to maintain the safety of your data. However, no method of transmission over
              the internet or electronic storage is 100% secure.</p>

            <h3>4. Sharing Your Information</h3>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
              without your consent, except as required by law or to trusted third parties who assist us in operating our
              system, conducting our business, or serving our users, so long as those parties agree to keep this information
              confidential.</p>

            <h3>5. Your Rights</h3>
            <p>You have the right to access, update, and request the deletion of your personal information. If you wish to
              exercise these rights, please contact us at the email address provided below.</p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.</p>

            <h3>7. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a
              href="mailto:info@healthjunction.com">info@healthjunction.com</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}