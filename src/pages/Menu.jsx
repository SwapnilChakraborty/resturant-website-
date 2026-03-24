import React from 'react';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const categories = [
    { name: "Gourmet Plates", image: "/gourmet_plates.png" },
    { name: "Craft Brews", image: "/craft_brews.png" },
    { name: "Wine Pairings", image: "/wine_pairings.png" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-24 min-h-screen bg-cream bg-grain"
    >
      <h1 className="text-6xl md:text-8xl font-serif text-maroon mb-16">The Full Menu</h1>
      
      <div className="grid md:grid-cols-3 gap-12">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
              <img 
                src={cat.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-maroon/10 group-hover:bg-transparent transition-colors" />
            </div>
            <h3 className="text-3xl font-serif text-maroon underline underline-offset-8">{cat.name}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 border-t border-maroon/10 pt-16 grid md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-serif mb-8">Chef's Specials</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-maroon/10 pb-4">
              <div>
                <h4 className="text-2xl font-serif">Aged Wagyu Biryani</h4>
                <p className="text-maroon/60">Truffle-infused basmati, saffron, aged beef</p>
              </div>
              <span className="text-2xl font-serif">$48</span>
            </div>
            <div className="flex justify-between items-end border-b border-maroon/10 pb-4">
              <div>
                <h4 className="text-2xl font-serif">Wild Sea Bass</h4>
                <p className="text-maroon/60">Copper-roasted with Kerala spices</p>
              </div>
              <span className="text-2xl font-serif">$36</span>
            </div>
          </div>
        </div>
        
        <div className="bg-maroon p-12 text-cream flex flex-col justify-center items-center text-center rounded-sm">
          <h2 className="text-4xl font-serif mb-6 leading-tight italic">Experience the art of Indian fine dining</h2>
          <div className="oval px-12 py-12 text-cream border-cream/40 scale-75">
            Book a private tasting
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuPage;
