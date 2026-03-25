import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      title: "THE FOOD HUB",
      text: "News write-ups offer a great way to let clients know about new products and services, events, awards and more."
    },
    {
      title: "ONLINE CUPBOARD",
      text: "News write-ups offer a great way to let clients know about new products and services, events, awards and more."
    },
    {
      title: "EAT THE WORLD",
      text: "News write-ups offer a great way to let clients know about new products and services, events, awards and more."
    }
  ];

  return (
    <section className="bg-cream">
      <div className="flex flex-col md:flex-row min-h-[700px] md:min-h-screen">
        {/* Left: Large Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-[500px] md:h-auto">
          <motion.img
            src="/news_food.png"
            alt="Delicious News"
            initial={{ filter: 'grayscale(100%) brightness(50%)' }}
            whileInView={{ filter: 'grayscale(0%) brightness(100%)' }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </div>

        {/* Right: News Content */}
        <div className="w-full md:w-1/2 bg-maroon text-cream p-12 md:p-32 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-serif mb-16 tracking-tighter uppercase leading-[0.8] font-black"
          >
            IN THE<br />NEWS
          </motion.h2>

          <div className="space-y-16">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-sm md:text-base font-sans tracking-widest opacity-60 uppercase font-light max-w-md">
                  {item.text}
                </p>
                <h3 className="text-2xl md:text-4xl font-serif tracking-widest font-black italic">
                  — {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
