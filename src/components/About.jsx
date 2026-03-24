import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-40 px-8 md:px-24 relative overflow-hidden bg-maroon text-cream">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-[1fr_1.5fr] gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[9rem] font-serif mb-6 leading-[0.85] tracking-tighter uppercase font-black">
            OUR<br />STORY
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:mt-12"
        >
          <p className="text-xl md:text-3xl font-sans leading-snug font-light opacity-90 max-w-2xl">
            Seven dishes. Six drinks. That's what we started with. Our initial menu was lean but perfectly curated. Our offerings have grown a lot since then, but our commitment to perfection remains.
          </p>
          <div className="w-32 h-[1px] bg-cream/20 mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
