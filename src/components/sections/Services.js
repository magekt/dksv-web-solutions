import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={48} />,
      title: 'Web Development',
      description: 'Professional, responsive websites tailored for Tier-2 businesses',
      price: 'Starting from ₹18,000'
    },
    {
      icon: <Search size={48} />,
      title: 'Digital Marketing',
      description: 'SEO, social media management, and local business optimization',
      price: 'Starting from ₹6,000/month'
    },
    {
      icon: <BarChart size={48} />,
      title: 'Business Analytics',
      description: 'Data-driven insights to grow your digital presence',
      price: 'Starting from ₹12,000/month'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Comprehensive digital solutions designed specifically for Tier-2 city businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-600 font-semibold">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
