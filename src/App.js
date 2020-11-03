import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
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
    </>
  );
}

export default App;
