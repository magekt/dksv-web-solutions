import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Showcasing successful digital transformations for Tier-2 businesses across India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
