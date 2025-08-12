import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-4" style={{ backgroundColor: '#26114C' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          
          {/* Left Side - Social Media Icons */}
          <div className="flex items-center space-x-5">
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
              <Facebook className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} />
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
              <Instagram className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} />
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
              <Linkedin className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} />
            </a>
          </div>

          {/* Right Side - Copyright Text */}
          <div>
            <p 
              className="text-white text-sm md:text-base"
              style={{ fontFamily: 'Arimo, sans-serif' }}
            >
              ©2025 All Copyrights are Reserved
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
