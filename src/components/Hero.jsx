import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-cream flex items-center justify-center px-4"
    >
      {/* 1. LAYER BASE: THE GRAIN & BACKGROUND (z-0) */}
      <div className="absolute inset-0 bg-cream bg-grain z-0 pointer-events-none" />

      {/* 2. LAYER BRANDING: THE TEXT (z-10) */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-16 md:gap-32 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-4 md:gap-8"
          >
            {/* MASALA - Letter by Letter */}
            <div className="flex flex-wrap justify-center">
              {"MASALA".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: 100, opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    animate: { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className="text-6xl md:text-[16rem] font-serif leading-[0.7] tracking-tighter text-maroon-refined inline-block px-1"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* BISTRO - Letter by Letter */}
            <div className="flex flex-wrap justify-center">
              {"BISTRO".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: 100, opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    animate: { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 1.2, delay: (index * 0.1) + 0.6, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className="text-6xl md:text-[16rem] font-serif leading-[0.7] tracking-tighter text-maroon-refined inline-block px-1"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtle pulsate for the whole heading */}
            <motion.div
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 pointer-events-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0], 
              filter: 'blur(0px)' 
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 2.2 },
              filter: { duration: 1.5, delay: 2.2 },
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <div className="oval px-12 py-10 md:px-20 md:py-14 text-maroon text-lg md:text-3xl font-serif max-w-[320px] md:max-w-[550px] leading-[1.1] backdrop-blur-sm border border-maroon/10 shadow-2xl">
              where great food and<br />great drinks meet
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. OVERLAYS (z-20) */}
      <div className="vignette z-20 pointer-events-none" />
      <div className="absolute inset-0 ambient-light pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-maroon/10 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;