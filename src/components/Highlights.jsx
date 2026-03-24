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
        <img
          src="/masala_highlights.png"
          alt="Bistro Highlights"
          className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
        />
      </motion.div>
    </section>
  );
};

export default Highlights;
