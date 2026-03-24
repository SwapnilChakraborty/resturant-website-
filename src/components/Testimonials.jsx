import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander Vance",
    role: "Michelin Critic",
    content: "An unparalleled gastronomic journey. L'Élite redefined my expectations of fine dining with its impeccable service and bold flavor profiles.",
  },
  {
    name: "Elena Rossi",
    role: "Lifestyle Blogger",
    content: "The ambience alone is worth the visit, but the truffle tagliatelle is what will keep me coming back. A true gift to the culinary world.",
  },
  {
    name: "Jonathan Wright",
    role: "Tech Executive",
    content: "Perfect for business dinners or intimate celebrations. The privacy and exclusivity they offer are second to none in the city.",
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-rich-black relative">
       <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mb-12"
          >
            <Quote size={48} className="text-gold/20" />
          </motion.div>

          <div className="relative h-[300px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full"
              >
                <p className="text-2xl md:text-3xl font-playfair italic mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <h4 className="font-montserrat text-gold uppercase tracking-widest text-sm mb-1">
                  {testimonials[current].name}
                </h4>
                <p className="font-montserrat text-white/40 text-xs uppercase tracking-widest">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <button 
              onClick={prev}
              className="p-3 border border-gold/20 rounded-full hover:border-gold transition-colors text-gold"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="p-3 border border-gold/20 rounded-full hover:border-gold transition-colors text-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
       </div>
    </section>
  );
};

export default Testimonials;
