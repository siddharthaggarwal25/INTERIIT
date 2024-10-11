import { useState } from 'react'
import './App.css'
import Navbar from './managers/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Home/Home'
import Login from './managers/Login/Login'
import Signup from './managers/Signup/signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
