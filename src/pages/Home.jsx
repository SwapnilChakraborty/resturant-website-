import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Menu from '../components/Menu';
import News from '../components/News';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Highlights />
      <About />
      <Menu />
      <News />
    </motion.div>
  );
};

export default Home;
