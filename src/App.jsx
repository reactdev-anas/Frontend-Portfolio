import './App.css'
import NavBar from './components/Navbar/NavBar'
import HeroSection from './components/views/HeroSection'
import Contact from './components/views/Contact'
import OurWork from './components/views/OurWork'
import Testimonials from './components/views/Testimonials'
import Home from './components/Animation/Home'
import Services from './components/views/Services'
import Skills from './components/views/Skills'
import Footer from './components/views/Footer'

function App() {
  
  return (
    <>
    
    <div className='w-screen h-secreen relative'>
   
    <Home/>
    <NavBar/>
      <HeroSection/>
    </div>
    <OurWork/>
    <Skills/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
