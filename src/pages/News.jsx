import React from 'react';
import { motion } from 'framer-motion';

const NewsPage = () => {
  const articles = [
    {
      date: "Oct 12, 2025",
      title: "The Autumn Spice Collection",
      desc: "Discover our new seasonal menu featuring hand-picked saffron from the valleys of Kashmir."
    },
    {
      date: "Sep 28, 2025",
      title: "Masala Bistro Wins Gold",
      desc: "We are honored to receive the Culinary Excellence Award for our innovative approach to traditional flavors."
    },
    {
      date: "Sep 05, 2025",
      title: "Vasant Utsav: Spring Festival",
      desc: "Join us for a week-long celebration of spring with live classical music and exclusive tasting menus."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-24 min-h-screen bg-cream bg-grain"
    >
      <h1 className="text-6xl md:text-8xl font-serif text-maroon mb-16">On the Pulse</h1>
      
      <div className="grid md:grid-cols-2 gap-24">
        {articles.map((art, idx) => (
          <div key={idx} className="border-b border-maroon/10 pb-16">
            <p className="text-sm uppercase tracking-widest mb-6 opacity-60">{art.date}</p>
            <h2 className="text-4xl font-serif mb-6 hover:italic cursor-pointer transition-all">{art.title}</h2>
            <p className="text-lg text-maroon/70 leading-relaxed max-w-xl mb-8">{art.desc}</p>
            <span className="text-maroon font-serif text-xl border-b border-maroon cursor-pointer pb-1">Read the story</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsPage;
