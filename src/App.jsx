import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import dashboardLogo from '/icon.svg'
import Dashboard from './pages/Dashboard.jsx'
import './App.css'
import './index.css'
import WeatherAPI from './services/weatherAPI.jsx'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherAPI />} />
      </Routes>
    </Router>
  )
}

export default App
