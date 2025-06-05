import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/', icon: BarChart3 },
    { name: 'About', href: '/about', icon: TrendingUp },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'Portfolio', href: '/portfolio', icon: BarChart3 },
    { name: 'Blog', href: '/blog', icon: TrendingUp },
    { name: 'Contact', href: '/contact', icon: Zap },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-xl' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200/30 shadow-lg'
    }`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-teal-50/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 animate-pulse"></div>
        {/* Floating Data Points */}
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-40 h-32 block p-0 m-0"
            />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative group py-3 px-5 text-sm font-medium transition-all duration-500 rounded-xl ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 shadow-lg'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500'
                  } transform hover:scale-105 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent size={16} className={`transition-all duration-300 ${
                      isActive(item.href) ? 'animate-pulse' : 'group-hover:animate-bounce'
                    }`} />
                    <span>{item.name}</span>
                  </div>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transform transition-all duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </Link>
              );
            })}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleConsultationClick}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-700 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative flex items-center space-x-2">
                <span className="animate-pulse">✨</span>
                <span>Get Free Consultation</span>
                <BarChart3 size={18} className="group-hover:animate-spin transition-transform duration-500" />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-slide-right"></div>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-600 transition-all duration-500 transform hover:scale-110 group"
          >
            <div className="relative">
              {isMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} className="group-hover:animate-pulse" />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl animate-fade-in overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-teal-50/30"></div>
            
            <nav className="relative flex flex-col p-6 space-y-3">
              {navigation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center space-x-3 px-4 py-4 text-sm font-medium rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent size={20} className={`transition-transform duration-300 ${
                      isActive(item.href) ? 'animate-pulse' : 'group-hover:animate-bounce'
                    }`} />
                    <span>{item.name}</span>
                    <div className={`ml-auto w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive(item.href) ? 'bg-white animate-ping' : 'bg-transparent group-hover:bg-white/50'
                    }`}></div>
                  </Link>
                );
              })}
              
              <Button 
                onClick={handleConsultationClick}
                className="mt-6 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white px-6 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-500 group w-full"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="animate-pulse">✨</span>
                  <span>Get Free Consultation</span>
                  <TrendingUp size={18} className="group-hover:animate-spin" />
                </div>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
