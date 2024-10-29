
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/services/Services'
import Mywork from './components/MyWork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Mywork/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App