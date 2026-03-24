import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-24 min-h-screen bg-cream bg-grain"
    >
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-6xl md:text-9xl font-serif text-maroon mb-16 leading-[0.8]">Our Heritage</h1>
        
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="/masala_highlights.png" 
              className="w-full h-full object-cover" 
              alt="Culinary background"
            />
            <div className="absolute inset-0 bg-maroon/10" />
          </div>
          
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-maroon italic">
              "We believe that every spice tells a story, and every dish is a chapter of our heritage."
            </p>
            <div className="space-y-6 text-lg text-maroon/80 leading-loose">
              <p>
                Founded in 1994, Masala Bistro began as a small family kitchen dedicated to the authentic flavors of the Malabar coast. Over three decades, we have evolved into a sanctuary for fine Indian dining, where traditional techniques meet modern elegance.
              </p>
              <p>
                Our chefs spend months sourcing the finest spices from small-scale farmers, ensuring that every grain of saffron and every pod of cardamom carries the soul of its origin.
              </p>
            </div>
            
            <div className="pt-12 grid grid-cols-2 gap-12 border-t border-maroon/10">
              <div>
                <h4 className="text-4xl font-serif mb-2">30+</h4>
                <p className="text-sm uppercase tracking-widest opacity-60">Years of Craft</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif mb-2">12</h4>
                <p className="text-sm uppercase tracking-widest opacity-60">Master Chefs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
