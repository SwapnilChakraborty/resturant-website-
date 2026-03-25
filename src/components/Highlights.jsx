import React from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  return (
    <section className="w-full h-[400px] md:h-[600px] overflow-hidden bg-cream">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <motion.img
          src="/masala_highlights.png"
          alt="Bistro Highlights"
          initial={{ filter: 'grayscale(100%) brightness(50%)' }}
          whileInView={{ filter: 'grayscale(0%) brightness(100%)' }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover transition-all duration-1000"
        />
      </motion.div>
    </section>
  );
};

export default Highlights;
