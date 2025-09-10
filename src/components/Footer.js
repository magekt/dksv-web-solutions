import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GO</span>
            </div>
            <span className="text-xl font-bold">GetMe Online</span>
          </div>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Transforming Tier-2 businesses through digital excellence. 
            Professional web development and digital marketing services for SMEs in India's emerging cities.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-400" />
              <span className="text-sm">contact@getme-online.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-400" />
              <span className="text-sm">+91-98765-43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-blue-400" />
              <span className="text-sm">Pune, Maharashtra, India</span>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="text-sm text-gray-400">
              © 2025 GetMe Online (DKSV Web Solutions). All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
