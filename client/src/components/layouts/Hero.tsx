import React, { useState, useEffect } from 'react';
import fintechImg from '../images/Fintech.png';
import './Hero.css'; // ✅ Import the CSS file

const Hero = () => {
  const words = ['The', 'Future', 'Of', 'Your', 'Finances'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cycleKey, setCycleKey] = useState(0); // 🌟 added

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Wait before moving to the next word
          setTimeout(() => {
            if (currentWordIndex < words.length - 1) {
              setCurrentWordIndex(currentWordIndex + 1);
              setCurrentText('');
            } else {
              // 🌟 Restart everything after 3s
              setTimeout(() => {
                setCurrentWordIndex(0);
                setCurrentText('');
                setCycleKey(prev => prev + 1); // 🔄 trigger full re-render
              }, 5000);
            }
          }, 800);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  const renderAnimatedTitle = () => {
    const completedWords = words.slice(0, currentWordIndex);
    const currentWord = currentWordIndex < words.length ? currentText : '';

    return (
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {completedWords.map((word, index) => (
          <span key={index} className="opacity-100">
            {word}
            {(index === 1 || index === 3) ? <br /> : ' '}
          </span>
        ))}
        <span className="opacity-100">
          {currentWord}
          {currentWordIndex < words.length && (
            <span className="animate-pulse text-purple-400">|</span>
          )}
        </span>
      </h1>
    );
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #05050B 0%, #25114B 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-start justify-between min-h-[80vh] lg:flex-row flex-col lg:text-left text-center lg:items-start items-center">

          {/* Left Content */}
          <div
            key={cycleKey} // 🌟 re-mounts every cycle
            className="flex flex-col justify-center max-w-xl pt-8 lg:text-left text-center lg:items-start items-center
                       min-h-[80vh] lg:min-h-0"
          >
            {renderAnimatedTitle()}

            <p
              className="text-base md:text-lg mb-8 leading-relaxed max-w-md opacity-0 animate-fadeInUp"
              style={{
                fontFamily: 'Arimo, sans-serif',
                color: '#B6B5B5',
                animationDelay: '4s',
                animationFillMode: 'forwards'
              }}
            >
              Manage your finances with powerful  <br />
              tools and secure solutions to keep  <br />
              your money safe and growing.
            </p>

            <div
              className="opacity-0 animate-fadeInUp"
              style={{
                animationDelay: '4.5s',
                animationFillMode: 'forwards'
              }}
            >
              <button
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: '#5819D8' }}
              >
                Get Started - It's Free
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:flex flex-1 justify-end items-start pl-12">
            <div
              key={cycleKey} // 🌟 re-mounts image every cycle
              className="relative w-full max-w-[42rem] opacity-0 animate-fadeInRight"
              style={{
                marginTop: '0.5rem',
                animationDelay: '2s',
                animationFillMode: 'forwards'
              }}
            >
              <img
                src={fintechImg}
                alt="Fintech illustration"
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(88, 25, 216, 0.1) 0%, transparent 50%)'
        }}
      />
    </section>
  );
};

export default Hero;
