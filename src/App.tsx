import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing_Page from './pages/Landing_Page/Landing_Page'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_Page />} />
      </Routes>
    </>
  )
}

export default App
