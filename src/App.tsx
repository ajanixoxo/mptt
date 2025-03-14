import Navbar from './components/Navbar'
import './App.css'
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
      
      <Router >
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <Navbar />
        <Routes>
          <Route path="/" element={


            <Landing_Page />

          } />
          <Route path="about" element={

            <About />

          } />
          <Route path="program" element={

            <Program />

          } />
        </Routes>
      </Router>

    </>
  )
}

export default App
