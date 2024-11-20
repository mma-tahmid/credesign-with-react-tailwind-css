
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import ResumeSection from './Components/ResumeSection'
import PortfolioSection from './Components/PortfolioSection'

function App() {



  return (

    <>
      <BrowserRouter>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ResumeSection />
        <PortfolioSection />

      </BrowserRouter>




    </>
  )
}

export default App
