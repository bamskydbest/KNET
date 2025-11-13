import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import KeyProjects from './pages/KeyProjects'
import OurStory from './pages/OurStory'
import PressReleases from './pages/PressReleases'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'
import 'leaflet/dist/leaflet.css';
import ScrollToTop from './pages/ScrollToTop'

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App() {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  console.log("reCAPTCHA key:", recaptchaKey); // Temporary check for deployment

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey!}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/key-projects" element={<KeyProjects />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/press-releases" element={<PressReleases />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton/>
      </div>
    </GoogleReCaptchaProvider>
  )
}
