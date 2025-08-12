import React from 'react';
import { Shield, Lock, Bell, BarChart3 } from 'lucide-react';

const TrustSecurity = () => {
  return (
    <section className="w-full px-6 py-16" style={{ background: 'linear-gradient(135deg, #05050B -30%, #25114B 100%, #25114B 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Trust and Security
          </h2>
        </div>

        {/* Features Grid - Centered with equal margins */}
        <div className="flex justify-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl w-full">
          
            {/* Bank Level Encryption */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <Lock className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#5819D8' }} />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Bank Level Encryption
                </h3>
                <p 
                  className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Arimo, sans-serif' }}
                >
                  Enterprise-grade encryption ensures your <br />
                  data stays safe.
                </p>
              </div>
            </div>

            {/* Fraud Protection */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <Shield className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#5819D8' }} />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Fraud Protection
                </h3>
                <p 
                  className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Arimo, sans-serif' }}
                >
                  Detect and prevent suspicious activity <br />
                  instantly.
                </p>
              </div>
            </div>

            {/* Instant Notifications */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <Bell className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#5819D8' }} />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Instant Notifications
                </h3>
                <p 
                  className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Arimo, sans-serif' }}
                >
                  Receive timely alerts for every <br />
                  transaction and account activity.
                </p>
              </div>
            </div>

            {/* Investment Insights */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <BarChart3 className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#5819D8' }} />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Investment Insights
                </h3>
                <p 
                  className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Arimo, sans-serif' }}
                >
                  Real-time driven insights to make smarter <br />
                  investment decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;