import { useState } from 'react'
import './App.css'
import Navbar from './managers/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
