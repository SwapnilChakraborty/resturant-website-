import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maroon text-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[800px]">
        {/* Left: Info */}
        <div className="w-full md:w-1/2 p-12 md:p-32 flex flex-col justify-center items-start text-left gap-16">
          <div className="space-y-8">
            <Link to="/">
              <h3 className="text-5xl md:text-[6rem] font-serif leading-[0.8] tracking-tighter uppercase font-black">
                MASALA<br />
                BISTRO<br />
                EST. 1994
              </h3>
            </Link>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-cream/20">
              <div className="space-y-4 font-sans text-lg md:text-xl opacity-80 font-light tracking-wide">
                <p>42 Bistro Lane, Heritage District</p>
                <p>Old Mumbai, 400001</p>
                <p>+91 22 4567 8900</p>
              </div>
              <div className="flex flex-col gap-4 text-lg">
                <Link to="/menu" className="hover:opacity-60">The Menu</Link>
                <Link to="/about" className="hover:opacity-60">The Story</Link>
                <Link to="/gallery" className="hover:opacity-60">Gallery</Link>
                <Link to="/news" className="hover:opacity-60">News</Link>
              </div>
            </div>
          </div>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#dec78e', color: '#6b0b23' }}
              whileTap={{ scale: 0.95 }}
              className="oval px-12 py-16 text-lg md:text-xl font-serif tracking-widest uppercase border-[0.5px] border-cream/50 transition-colors duration-500"
            >
              MAKE A<br />RESERVATION<br />TODAY
            </motion.button>
          </Link>
        </div>

        {/* Right: Grid */}
        <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-auto overflow-hidden">
          <motion.img
            src="/footer_grid.png"
            alt="Masala Bistro Dishes"
            initial={{ filter: 'grayscale(100%) brightness(40%)' }}
            whileInView={{ filter: 'grayscale(0%) brightness(100%)' }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
