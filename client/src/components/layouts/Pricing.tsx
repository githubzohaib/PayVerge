import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="w-full px-6 py-16" style={{ background: 'linear-gradient(135deg, #05050B -80%, #25114B 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            
            {/* Free Plan */}
            <div 
              className="relative rounded-2xl p-8 text-center lg:text-left border border-gray-600 flex flex-col h-full hover:transform hover:scale-105 hover:border-purple-400 transition-all duration-300"
              style={{ backgroundColor: 'rgba(5, 5, 11, 0.3)' }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Free
              </h3>
              
              <div className="mb-6">
                <span 
                  className="text-5xl md:text-6xl font-bold text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  $0
                </span>
                <span className="text-xl text-gray-300">/mo</span>
              </div>

              <div className="mb-8 space-y-4 flex-grow">
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Expense Tracking</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Basic Reports</span>
                </div>
              </div>

              <div className="text-center">
                <button 
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold text-lg hover:opacity-90 hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: '#5819D8', fontFamily: 'Poppins, sans-serif' }}
                >
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div 
              className="relative rounded-2xl p-8 text-center lg:text-left border border-purple-500 flex flex-col h-full transform lg:scale-105 hover:scale-110 hover:border-purple-300 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #05050B -0%, #5819D8 150%)' }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Pro
              </h3>
              
              <div className="mb-6">
                <span 
                  className="text-5xl md:text-6xl font-bold text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  $29
                </span>
                <span className="text-xl text-gray-300">/mo</span>
              </div>

              <div className="mb-8 space-y-4 flex-grow">
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Real Time Tracking</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Budgeting Tools</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Advanced Reports</span>
                </div>
              </div>

              <div className="text-center">
                <button 
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold text-lg hover:opacity-90 hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: '#5819D8', fontFamily: 'Poppins, sans-serif' }}
                >
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div 
              className="relative rounded-2xl p-8 text-center lg:text-left border border-gray-600 flex flex-col h-full hover:transform hover:scale-105 hover:border-purple-400 transition-all duration-300"
              style={{ backgroundColor: 'rgba(5, 5, 11, 0.3)' }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Enterprise
              </h3>
              
              <div className="mb-6">
                <span 
                  className="text-5xl md:text-6xl font-bold text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  $99
                </span>
                <span className="text-xl text-gray-300">/mo</span>
              </div>

              <div className="mb-8 space-y-4 flex-grow">
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Custom Integrations</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Dedicated Support</span>
                </div>
              </div>

              <div className="text-center">
                <button 
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold text-lg hover:opacity-90 hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: '#5819D8', fontFamily: 'Poppins, sans-serif' }}
                >
                  GET STARTED
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <h3 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Secure Your Future?
            </h3>
            <button 
              className="py-3 px-8 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#5819D8', fontFamily: 'Poppins, sans-serif' }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;