import { useState } from 'react'
import './App.css'
import Navbar from './managers/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Landingpage/Landingpage'
import Login from './managers/Login/Login'
import Signup from './managers/Signup/signup'
import CompleteDetails from './managers/CompleteDetails/CompleteDetails'
import HostProject from './managers/HostProject/HostProject'
import ParticularProject from './managers/ParticularProject/ParticularProject'
import Projects from './managers/Projects/Projects'
import AddBid from './managers/AddBid/AddBid'
import HostProjectPage1 from './managers/HostProject2/HostProject2Pages/HostProjectPage1'
import HostProjectPage2 from './managers/HostProject2/HostProject2Pages/HostProjectPage2'
import HostProjectPage3 from './managers/HostProject2/HostProject2Pages/HostProjectPage3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete-details" element={<CompleteDetails />} />
        <Route path="/hostProject" element={<HostProjectPage1 />} />
        <Route path="/hostProject1" element={<HostProjectPage2 />} />
        <Route path="/hostProject2" element={<HostProjectPage3 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:ProjectID" element={<ParticularProject />} />
        <Route path="/projects/:ProjectID/AddBid" element={<AddBid />} />

      </Routes>
    </>
  )
}

export default App
