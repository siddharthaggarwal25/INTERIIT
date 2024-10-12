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
        <Route path="/hostProject" element={<HostProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:ProjectID" element={<ParticularProject />} />
        <Route path="/projects/:ProjectID/AddBid" element={<AddBid />} />

      </Routes>
    </>
  )
}

export default App
