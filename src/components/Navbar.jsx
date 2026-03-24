import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled || location.pathname !== '/' ? 'bg-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1720px] mx-auto px-8 md:px-24 flex justify-between items-center">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl font-serif font-light tracking-tighter text-maroon opacity-80"
          >
            MASALA BISTRO
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16">
          <div className="flex gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-xs uppercase tracking-[0.3em] font-sans font-bold text-maroon hover:opacity-50 transition-all ${location.pathname === link.href ? 'border-b border-maroon' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link to="/contact">
            <button className="oval px-8 py-5 text-[11px] font-bold tracking-[0.2em] text-maroon border-maroon/40 hover:bg-maroon hover:text-cream transition-all duration-700 border-[0.5px]">
              BOOK NOW
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-maroon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-cream z-[60] flex flex-col items-center justify-center gap-12"
          >
            <button className="absolute top-10 right-8 text-maroon" onClick={() => setIsOpen(false)}>
              <X size={40} />
            </button>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl uppercase tracking-widest font-serif font-black text-maroon"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="oval px-12 py-8 text-lg font-bold tracking-widest text-maroon border-maroon border-[0.5px]">
                BOOK NOW
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
