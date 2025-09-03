import { Link } from 'react-router'
import SignUp from '../assets/photo/sign-up.png'
import GoogleLogo from '../assets/google-logo.png'
import AppleLogo from '../assets/apple-logo.png'
import './SignInPage.css'
import './SignUpPage.css'

export function SignInPage() {
  return (
    <>
      <title>Sign In</title>
      <div className="body">
        <div className="sign-up-form">

          <div className="left-section">

            <div className="moto">Your Health, Our Mission</div>

            <div className="create-account">

              <div className="sign-in-text">
                <div className="text">Log In to Your Account</div>
                <div className="text2">Access your portal with your credentials.</div>
              </div>

              <div className="sign-up-details">
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
              <div className="question"><span className="span1">New Account?</span> <Link to="/sign-up">Sign up</Link></div>
              <div className="TC"><Link to="/privacy-policy">Terms & Conditions</Link></div>
            </div>

          </div>

          <div className="right-section">
            <div className="image-container"><img src={SignUp} alt="Health professionals looking at watch"
              className="sign-up-image" /></div>
          </div>
        </div>
      </div>
    </>
  )
}