import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const stats = { users: 5000, growth: '30%' };

  return (
    <section id="home" className="hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1>Empowering Tier-2 Businesses</h1>
          <p>Professional solutions for SMEs in emerging cities.</p>
          <div>Users: {stats.users}</div>
          <div>Growth: {stats.growth}</div>
          <motion.a
            href="#services"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
