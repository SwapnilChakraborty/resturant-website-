import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-24 min-h-screen bg-cream bg-grain"
    >
      <div className="grid md:grid-cols-2 gap-32">
        <div>
          <h1 className="text-6xl md:text-8xl font-serif text-maroon mb-12">Connect</h1>
          <div className="space-y-12">
            <div>
              <h4 className="text-sm uppercase tracking-widest opacity-60 mb-4">Location</h4>
              <p className="text-3xl font-serif">42 Bistro Lane, Heritage District<br />Old Mumbai, 400001</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest opacity-60 mb-4">Hours</h4>
              <p className="text-2xl font-serif">Lunch: 12:00 PM - 3:30 PM</p>
              <p className="text-2xl font-serif">Dinner: 7:00 PM - 11:30 PM</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest opacity-60 mb-4">Reservations</h4>
              <p className="text-3xl font-serif">+91 22 4567 8900</p>
              <p className="text-xl italic opacity-60 mt-2">booking@masalabistro.com</p>
            </div>
          </div>
        </div>

        <div className="bg-maroon p-16 text-cream rounded-sm flex flex-col justify-center">
          <h2 className="text-4xl font-serif mb-12 italic">Reserve your table</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <input type="text" placeholder="Your Name" className="bg-transparent border-b border-cream/30 py-4 focus:border-cream outline-none font-serif text-xl" />
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-cream/30 py-4 focus:border-cream outline-none font-serif text-xl" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <input type="date" className="bg-transparent border-b border-cream/30 py-4 focus:border-cream outline-none font-serif text-xl" />
              <select className="bg-transparent border-b border-cream/30 py-4 focus:border-cream outline-none font-serif text-xl">
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6+ Guests</option>
              </select>
            </div>
            <button className="oval w-full mt-12 border-cream/40 text-cream hover:bg-cream hover:text-maroon">
              Request Booking
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
