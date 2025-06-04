
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full animate-pulse transform rotate-45" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg animate-pulse transform rotate-12" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg animate-pulse transform rotate-45" style={{animationDelay: '0.5s'}}></div>
      
      {/* Floating data visualization elements */}
      <div className="absolute top-60 left-1/4 transform -translate-x-1/2">
        <svg className="w-32 h-32 text-blue-300/30 animate-spin" style={{animationDuration: '20s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-60 right-1/4 transform translate-x-1/2">
        <svg className="w-28 h-28 text-teal-300/30 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default FloatingElements;
