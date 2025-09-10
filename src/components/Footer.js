import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GO</span>
            </div>
            <span className="text-xl font-bold">GetMe Online</span>
          </div>
          <p className="text-gray-300 mb-4">
            Transforming Tier-2 businesses through digital excellence.
          </p>
          <p className="text-sm text-gray-400">
            © 2025 GetMe Online (DKSV Web Solutions). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
