import { useState } from 'react'
import './App.css'
import Navbar from './managers/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Landingpage/Landingpage'
import Login from './managers/Login/Login'
import Signup from './managers/Signup/signup'
import CompleteDetails from './managers/CompleteDetails/CompleteDetails'


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
      </Routes>
    </>
  )
}

export default App
