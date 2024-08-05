// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/interior/Navbar';
import HomePage from './component/interior/HomePage';
import AboutPage from './component/interior/AboutPage';
import ServicesPage from './component/interior/ServicesPage';
import ProjectsGalleryPage from './component/interior/ProjectsGalleryPage';
import ContactPage from './component/interior/ContactPage';
import Footer from './component/interior/Footer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsGalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App;
