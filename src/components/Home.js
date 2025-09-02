import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/dashboard');
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/Home.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100vw'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6">
            <img 
              src="/resbilllogo.png" 
              alt="BeyondX Logo" 
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-2xl">
            BeyondX POS
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-lg">
            Professional Restaurant Management Solution
          </p>
        </div>

        {/* Enter Button */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <button
            onClick={handleEnter}
            className="group bg-white/90 hover:bg-white text-gray-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center space-x-3 sm:space-x-4">
              <span>Enter</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:w-8 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-white/80 text-sm sm:text-base lg:text-lg font-medium drop-shadow-lg max-w-2xl mx-auto">
            Easy Billing • Kitchen Display • Reports & Analytics • Professional POS System
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white/60 text-xs sm:text-sm text-center">
            © 2014 - 2025 BeyondX Informatics Analytics Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
