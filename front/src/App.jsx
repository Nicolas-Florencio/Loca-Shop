import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Páginas
import Principal from './components/Principal' // sua "home"
import Cadastro from './pages/Cadastro'       // nova página

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
