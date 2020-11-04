import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import Code from './components/Code'
import Footer from './components/Footer'
function App() {
  const [isOpen , setisOpen] = useState(false)

  const toggle=()=>{
    setisOpen(!isOpen)
  }
  return (
    

    <>
     <Navbar toggle ={toggle}/>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Hero/>
    <Section/>
    <Services/>
    <Code/>
    <Footer/>
    </>
  );
}

export default App;
