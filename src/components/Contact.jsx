import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    { icon: MapPin, title: 'Address', detail: '123 Luxury Lane, Mayfair, London W1K 6AE' },
    { icon: Phone, title: 'Phone', detail: '+44 (0) 20 7946 0000' },
    { icon: Mail, title: 'Email', detail: 'reservations@lelite.com' },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-rich-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-sm mb-4 font-montserrat">Find Us</h2>
            <h3 className="text-4xl md:text-6xl font-playfair mb-12 text-white leading-tight">
              Location & <br />
              <span className="italic text-gold-gradient">Contact</span>
            </h3>
            
            <div className="space-y-10">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-gold/5 rounded-sm border border-gold/10 group-hover:bg-gold/10 transition-colors duration-500">
                    <item.icon className="text-gold" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">{item.title}</h4>
                    <p className="text-white/80 font-montserrat text-lg font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 flex gap-6"
            >
              {[Instagram, Facebook, Twitter].map((SocialIcon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="p-4 border border-gold/20 rounded-full hover:border-gold hover:bg-gold/5 transition-all duration-500 text-gold shadow-lg hover:shadow-gold/20"
                >
                  <SocialIcon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-4 border border-gold/10 rounded-sm pointer-events-none" />
             <motion.div 
               initial={{ filter: 'grayscale(100%)' }}
               whileInView={{ filter: 'grayscale(0%)' }}
               viewport={{ amount: 0.6 }}
               transition={{ duration: 1 }}
               className="h-[450px] md:h-[550px] rounded-sm overflow-hidden border border-gold/20 transition-all duration-1000 shadow-2xl relative z-10 group"
             >
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90822699222!2d-0.14663308422969968!3d51.51486377963618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605335967f13b%3A0xe9f00a5d4d39c9f4!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1625565000000!5m2!1sen!2suk"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen="" 
                   loading="lazy"
                   title="L'Élite Location"
                   className="relative z-10"
                />
                <div className="absolute inset-0 bg-gold/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
