import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "gourmet plates",
    image: "/gourmet_plates.png"
  },
  {
    name: "craft brews",
    image: "/craft_brews.png"
  },
  {
    name: "wine & dish pairings",
    image: "/wine_pairings.png"
  }
];

const Menu = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="menu" className="bg-maroon text-cream relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center py-24 md:py-32">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[10rem] font-serif leading-none tracking-tighter uppercase font-black"
          >
            ON THE MENU
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 1.2 }}
              viewport={{ once: true }}
              className="group relative h-[600px] md:h-[800px] overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="oval px-10 py-16 text-cream text-2xl md:text-3xl font-serif tracking-widest backdrop-blur-sm bg-black/5 border-[0.5px] border-cream/30 transition-all duration-700 group-hover:bg-maroon group-hover:border-maroon group-hover:scale-110">
                  {category.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
