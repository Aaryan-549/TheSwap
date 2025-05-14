import React from "react";

//INTERNAL IMPORT
import { SwapComponent } from "./index";

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white pt-16 pb-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 rounded-full bg-teal-600/20 -bottom-20 -right-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-emerald-600/10 top-20 left-40 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-64 h-64 rounded-full bg-emerald-400/5 top-1/3 right-1/4 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
          <div className="flex flex-col max-w-xl">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-teal-900 text-teal-300">
                Your Gateway to Crypto Trading
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
                Welcome to 
              </span>
              TheSwap
            </h1>
            
            <p className="text-gray-400 text-lg mb-10">
              Experience seamless trading with our user-friendly interface and advanced features. Join us today and unlock the full potential of your crypto assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('featured-tokens')}
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-base rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                <span>Get Started</span>
              </button>
              <button
                onClick={() => scrollToSection('featured-tokens')}
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-base rounded-xl border-2 border-gray-700 hover:border-teal-500 text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                <span>Explore Markets</span>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">Quick</p>
                <p className="text-gray-500 text-sm">& Easy</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">Seamless</p>
                <p className="text-gray-500 text-sm">User Experience</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">10+</p>
                <p className="text-gray-500 text-sm">Tokens</p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md hover:scale-[1.02] transition-transform duration-500">
            <SwapComponent />
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={() => scrollToSection('featured-tokens')}
          className="flex flex-col items-center text-gray-400 hover:text-teal-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-8 h-8 flex items-center justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;