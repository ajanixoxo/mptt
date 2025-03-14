import Navbar from './components/Navbar'
import './App.css'
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import { Routes, Route } from 'react-router-dom'
import Landing_Page from './pages/Landing_Page/Landing_Page'
import About from './pages/About/About'
import Program from './pages/Program/Program'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>


      <Routes>
        <Route path="/" element={
          <> 
          <Navbar />
          <Landing_Page />
          </>
        } />
        <Route path="/about" element={
          <>
          <Navbar />
          <About />
        </>
      } />
        <Route path="/program" element={
          <>
          <Navbar />
          <Program />
        </>
      } />
      </Routes>
    </>
  )
}

export default App
