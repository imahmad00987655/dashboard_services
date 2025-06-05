
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Github, BarChart3, TrendingUp, Zap, Database, PieChart, Activity } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: TrendingUp },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'Portfolio', href: '/portfolio', icon: BarChart3 },
    { name: 'Blog', href: '/blog', icon: Activity },
  ];

  const services = [
    { name: 'Power BI Dashboards', icon: BarChart3 },
    { name: 'Tableau Solutions', icon: PieChart },
    { name: 'Real-time Analytics', icon: Activity },
    { name: 'Data Integration', icon: Database },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'from-sky-400 to-sky-600' },
    { name: 'GitHub', icon: Github, href: '#', color: 'from-gray-700 to-gray-900' },
  ];

  const stats = [
    { number: '100+', label: 'Dashboards Created', icon: BarChart3 },
    { number: '50+', label: 'Happy Clients', icon: TrendingUp },
    { number: '15+', label: 'Countries Served', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Activity },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        
        {/* Data Visualization Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
          <path
            d="M 50 300 Q 200 200 350 250 T 650 200 Q 800 150 950 200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 50 400 Q 150 350 300 380 T 600 350 Q 750 300 950 320"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="py-12 border-b border-gray-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <IconComponent size={24} className="text-white group-hover:animate-pulse" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <span className="text-white font-bold">DV</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                    DataVision
                  </span>
                  <div className="text-xs text-gray-500">Visualize • Analyze • Transform</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transform your data into actionable insights with our cutting-edge dashboards. 
                We specialize in Power BI, Tableau, and real-time data visualization solutions 
                that drive business growth and decision-making.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Stay Updated
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className={`relative p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:${social.color} text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group`}
                    >
                      <IconComponent size={20} className="group-hover:animate-pulse" />
                      {hoveredSocial === social.name && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg animate-fade-in">
                          {social.name}
                        </div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                      >
                        <IconComponent size={16} className="group-hover:animate-bounce" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services & Contact */}
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Our Services
              </h3>
              <ul className="space-y-3 mb-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={service.name} className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300">
                      <IconComponent size={16} className="group-hover:animate-spin" />
                      <span className="text-sm">{service.name}</span>
                    </li>
                  );
                })}
              </ul>

              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-sm">info@datavision.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={16} className="text-teal-400" />
                  <span className="text-sm">+92-329-1099646</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={16} className="text-purple-400 mt-1" />
                  <span className="text-sm">Makki Complex<br />Lahore, Punjab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DataVision. All rights reserved. Transforming data into insights.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-2xl bg-blue-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-2xl bg-purple-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </button>
    </footer>
  );
};

export default Footer;
