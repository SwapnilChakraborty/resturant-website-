import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="py-32 px-6 relative bg-rich-black overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-20 rounded-sm relative border border-white/5"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient" />
          
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-sm mb-4 font-montserrat"
            >
              Reservations
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-playfair mb-8 text-white"
            >
              Secure Your <span className="italic text-gold-gradient">Table</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/40 font-montserrat max-w-lg mx-auto leading-relaxed text-sm font-light"
            >
              Join us for an unforgettable evening. Please note that we recommend 
              booking at least 72 hours in advance for weekends.
            </motion.p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Guests', type: 'select', options: ['2 People', '4 People', '6+ People'] },
              { label: 'Date', type: 'date' },
              { label: 'Time', type: 'select', options: ['7:00 PM', '8:30 PM', '10:00 PM'] }
            ].map((field, index) => (
              <motion.div 
                key={field.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3 group"
              >
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold/40 font-montserrat group-focus-within:text-gold transition-colors">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select className="w-full bg-transparent border-b border-gold/10 py-4 focus:border-gold outline-none transition-all duration-500 font-montserrat text-white cursor-pointer hover:border-gold/30">
                    {field.options.map(opt => <option key={opt} className="bg-rich-black text-white">{opt}</option>)}
                  </select>
                ) : (
                  <input 
                    type={field.type} 
                    className="w-full bg-transparent border-b border-gold/10 py-4 focus:border-gold outline-none transition-all duration-500 font-montserrat text-white placeholder-white/10 hover:border-gold/30"
                    placeholder={field.placeholder}
                  />
                )}
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 mt-12"
            >
               <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gold-gradient text-rich-black font-montserrat font-bold text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(209,176,107,0.3)] transition-all duration-500 rounded-sm"
               >
                 Confirm Reservation
               </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
