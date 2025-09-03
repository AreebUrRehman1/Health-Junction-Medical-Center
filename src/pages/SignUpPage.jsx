import { Link } from 'react-router'
import SignUp from '../assets/photo/sign-up.png'
import GoogleLogo from '../assets/google-logo.png'
import AppleLogo from '../assets/apple-logo.png'
import './SignUpPage.css'

export function SignUpPage() {
  return (
    <>
      <title>Sign Up</title>
      <div className="body">
        <div className="sign-up-form">

          <div className="left-section">

            <div className="moto">Your Health, Our Mission</div>

            <div className="create-account">

              <div className="sign-up-text">
                <div className="text">Create an account</div>
                <div className="text2">Sign up to manage your appointments and health records</div>
              </div>

              <div className="sign-up-details">
                <div className="detail">Full name</div>
                <div><input type="text" className="input-text" placeholder="Enter your full name" /></div>
                <div className="detail">Email</div>
                <div><input type="email" className="input-text" placeholder="Enter your email" /></div>
                <div className="detail">Password</div>
                <div><input type="password" className="input-text" placeholder="Enter a password" /></div>
              </div>

              <div className="sign-up-btn">
                <div><button className="submit-btn">Submit</button></div>
                <div className="social-buttons">
                  <button className="apple-btn">
                    <div className="adjust"><img src={AppleLogo} alt="Apple logo" className="apple-logo" />Apple</div>
                  </button>
                  <button className="google-btn">
                    <div className="adjust"><img src={GoogleLogo} alt="Google logo" className="google-logo" />Google
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bottom-section">
              <div className="question"><span className="span1">Have an account?</span> <Link to="/sign-in">Sign in</Link></div>
              <div className="TC"><Link to="/privacy-policy">Terms & Conditions</Link></div>
            </div>

          </div>

          <div className="right-section">
            <div className="image-container"><img src={SignUp} alt="Health professionals looking at watch" className="sign-up-image" /></div>
          </div>
        </div>
      </div>
    </>
  )
}