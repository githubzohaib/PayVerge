import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-6 py-4" style={{ background: 'linear-gradient(135deg, #05050B 0%, #25114B 100%)' }}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section - PayVerge Logo */}
        <div className="flex-shrink-0">
          <h1 
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'Poor Richard, serif' }}
          >
            PayVerge
          </h1>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="#security" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Security
          </a>
          <a 
            href="#pricing" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Pricing
          </a>
        </div>

        {/* Right Section - CTA Button */}
        <div className="flex-shrink-0 hidden md:block">
          <button 
            className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#5819D8' }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-white hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 pb-4 border-t border-gray-700 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3 pt-4">
          <a 
            href="#home" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="#security" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Security
          </a>
          <a 
            href="#pricing" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Pricing
          </a>
          <button 
            className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-200 w-fit mt-2"
            style={{ backgroundColor: '#5819D8' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;