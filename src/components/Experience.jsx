import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const images = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1550966841-3ee2cc6b1088?auto=format&fit=crop&q=80&w=1200",
];

const Experience = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(leftColRef.current, 
      { y: 50 },
      { 
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );

    gsap.fromTo(rightColRef.current, 
      { y: -30 },
      { 
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="experience" className="py-32 px-6 relative overflow-hidden bg-rich-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center text-white">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 font-montserrat">The Ambience</h2>
              <h3 className="text-4xl md:text-5xl font-playfair mb-8 leading-tight">
                An Immersive <br />
                <span className="italic text-gold-gradient">Cinematic Journey</span>
              </h3>
              <p className="text-white/50 font-montserrat leading-relaxed text-lg font-light mb-10">
                Step into a world where architecture meets gastronomy. 
                Our space is meticulously designed to provide a sensory experience 
                that transcends the plate.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer inline-flex">
                <div className="w-12 h-[1px] bg-gold/50 group-hover:w-20 transition-all duration-500" />
                <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-montserrat">Explore Gallery</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
             <div className="grid grid-cols-2 gap-6 md:gap-10">
                <div ref={leftColRef} className="space-y-6 md:space-y-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="aspect-[3/4] overflow-hidden rounded-sm border border-gold/5"
                  >
                    <img src={images[0]} alt="Ambience 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </motion.div>
                </div>

                <div ref={rightColRef} className="space-y-6 md:space-y-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="aspect-square overflow-hidden rounded-sm border border-gold/5 mt-12 md:mt-24"
                  >
                    <img src={images[1]} alt="Ambience 2" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="aspect-square overflow-hidden rounded-sm border border-gold/5"
                  >
                    <img src={images[2]} alt="Ambience 3" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
