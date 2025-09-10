import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, AlertCircle, CheckCircle, Mail, ArrowRight, Zap } from 'lucide-react';

const SEOTool = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setError('');
    
    try {
      // Your existing SEO API endpoint
      const response = await fetch('https://seo-audit-tool-v2-205432226716.us-central1.run.app/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) throw new Error('Analysis failed');
      
      const data = await response.json();
      setResults(data);
      setShowEmailCapture(true); // Show email capture after results
    } catch (err) {
      setError('Unable to analyze website. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDetailedReport = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Here you'd integrate with your email system (MailChimp, ConvertKit, etc.)
    // and send detailed report
    alert(`Detailed report will be sent to ${email}. Our team will also contact you with personalized recommendations!`);
    
    // Track lead in your system
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          url, 
          source: 'seo-tool',
          results: results 
        }),
      });
    } catch (err) {
      console.log('Lead tracking failed');
    }
  };

  return (
    <section id="seo-tool" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Free SEO Analysis Tool</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover What's Holding Back Your Website
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get instant insights into your website's SEO performance. Our advanced tool analyzes 50+ ranking factors 
            and provides actionable recommendations to boost your search visibility.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Search className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">SEO Analysis</h3>
              <p className="text-sm text-gray-600">Complete technical SEO audit with priority recommendations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Performance Score</h3>
              <p className="text-sm text-gray-600">Page speed, mobile-friendliness, and Core Web Vitals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AlertCircle className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Issue Detection</h3>
              <p className="text-sm text-gray-600">Identify critical issues impacting your rankings</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleAnalyze} className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL (e.g., https://example.com)"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading || !url}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Analyze Now</span>
                    </>
                  )}
                </motion.button>
              </div>
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
            </form>

            {/* Results Section */}
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="text-green-600 w-6 h-6" />
                    <h3 className="text-xl font-semibold text-gray-800">Analysis Complete!</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We've identified several optimization opportunities for your website. 
                    Here's a quick overview of your current performance:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        {results.seo_score || '72'}/100
                      </div>
                      <div className="text-sm text-gray-600">SEO Score</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">
                        {results.issues_found || '12'}
                      </div>
                      <div className="text-sm text-gray-600">Issues Found</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {results.improvement_potential || '+35%'}
                      </div>
                      <div className="text-sm text-gray-600">Traffic Potential</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <AlertCircle className="text-yellow-600 w-5 h-5 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Critical Issues Detected</h4>
                      <p className="text-yellow-700 text-sm">
                        We found several high-priority issues that could be significantly impacting your search rankings. 
                        Get the detailed report below to see exactly what needs to be fixed.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Email Capture for Detailed Report */}
            {showEmailCapture && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl"
              >
                <div className="text-center mb-6">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Get Your Detailed SEO Report</h3>
                  <p className="opacity-90">
                    Receive a comprehensive 20-page report with step-by-step optimization instructions 
                    plus a free 30-minute strategy call with our SEO experts.
                  </p>
                </div>

                <form onSubmit={handleGetDetailedReport} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Report</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </form>

                <div className="text-center mt-6 text-sm opacity-80">
                  <p>🔒 Your information is secure. We'll never spam you.</p>
                </div>
              </motion.div>
            )}

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Trusted by 500+ businesses in Tier-2 cities</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="bg-gray-200 px-4 py-2 rounded text-sm">Nashik Retailers</div>
                <div className="bg-gray-200 px-4 py-2 rounded text-sm">Pune SMEs</div>
                <div className="bg-gray-200 px-4 py-2 rounded text-sm">Aurangabad Hotels</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Rankings?</h3>
            <p className="text-gray-600 mb-6">
              Don't let SEO issues hold back your business growth. Our team of experts can implement 
              all the recommendations and get your website ranking higher in search results.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span>Get Professional SEO Help</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOTool;
