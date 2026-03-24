import React from 'react';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = [
    "/masala_highlights.png",
    "/masala_hero_final_v9.png",
    "/gourmet_plates.png",
    "/craft_brews.png",
    "/news_food.png",
    "/footer_grid.png"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-24 min-h-screen bg-cream bg-grain"
    >
      <h1 className="text-6xl md:text-8xl font-serif text-maroon mb-16">Visual Journey</h1>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid relative group overflow-hidden"
          >
            <img src={img} className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" alt={`Gallery ${idx}`} />
            <div className="absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryPage;
