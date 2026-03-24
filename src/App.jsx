import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <main className="bg-cream selection:bg-maroon/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
