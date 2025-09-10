import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import MarketInsights from './components/sections/MarketInsights';
import SEOTool from './components/sections/SEOTool';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <MarketInsights />
        <SEOTool />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
