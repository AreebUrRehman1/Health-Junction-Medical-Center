import { Route, Routes } from 'react-router'
import { HomePage } from './pages/Homepage'
import { SignUpPage } from './pages/SignUpPage'
import { SignInPage } from './pages/SignInPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path = "sign-up" element={<SignUpPage />} />
      <Route path = "sign-in" element={<SignInPage />} />
      <Route path = "services" element={<ServicesPage />} />
      <Route path = "contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
