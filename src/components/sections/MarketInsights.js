import React from 'react';
import { motion } from 'framer-motion';

const MarketInsights = () => {
  return (
    <section id="insights" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Insights
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Understanding the digital transformation landscape in India's Tier-2 cities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights;
