import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tours from './pages/Tours';
import Heliflight from './pages/Heliflight';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/heliflight" element={<Heliflight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
