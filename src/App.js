import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PortfolioPage from './Pages/Portfolio';
import AdminPage from './Pages/Admin';
import ContactPage from './Pages/Contact';
import SkillsPage from './Pages/Skills';
import AboutPage from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;