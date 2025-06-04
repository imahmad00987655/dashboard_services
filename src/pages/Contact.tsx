
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, User, Phone, MapPin, Clock, CheckCircle, Star, Globe, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Power BI',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-teal-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in">
            Let's Create Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-glow">
              Extraordinary
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '200ms'}}>
            Transform your data into powerful insights with our custom dashboard solutions. Let's discuss how we can bring your vision to life with cutting-edge visualizations and real-time analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-6 py-3 rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-6 py-3 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="font-medium">24h Response Time</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600 bg-purple-50 px-6 py-3 rounded-full">
              <Star className="h-5 w-5" />
              <span className="font-medium">Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-teal-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Project</h2>
                  <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute left-4 top-4 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-500" />
                      </div>
                    </div>
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                          placeholder="Enter your email address"
                        />
                        <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                          placeholder="Enter your phone number"
                        />
                        <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-500" />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                      >
                        <option value="Power BI">Power BI Dashboard</option>
                        <option value="Tableau">Tableau Dashboard</option>
                        <option value="Custom">Custom Dashboard Solution</option>
                        <option value="Live Data">Live Data Integration</option>
                        <option value="Consultation">Free Consultation</option>
                        <option value="Migration">Dashboard Migration</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-gray-50 hover:bg-white group-hover:border-blue-300"
                      placeholder="Tell us about your project requirements, data sources, expected timeline, and any specific visualization needs..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message & Get Free Quote
                  </Button>
                </form>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold text-gray-900">What happens next?</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• We'll review your requirements within 24 hours</li>
                    <li>• Schedule a free 30-minute consultation call</li>
                    <li>• Provide a detailed project proposal & timeline</li>
                    <li>• Start building your custom dashboard solution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info & Additional Content */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '300ms'}}>
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-8 rounded-3xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 text-white rounded-xl flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-blue-100">info@datavision.com</p>
                      <p className="text-sm text-blue-200">Quick response guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 text-white rounded-xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-blue-100">+91-123-456-7890</p>
                      <p className="text-sm text-blue-200">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 text-white rounded-xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-blue-100">123 Data Street, Mumbai, India 400001</p>
                      <p className="text-sm text-blue-200">Modern office with demo room</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose DataVision?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-300">
                      <Clock size={24} />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">24h</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-300">
                      <Users size={24} />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-300">
                      <Star size={24} />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-300">
                      <Globe size={24} />
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">25+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-semibold text-blue-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-semibold text-teal-600">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-semibold text-gray-600">Closed</span>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong className="text-green-700">Emergency Support:</strong> 24/7 available for critical issues on existing projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Preview */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Power BI Dashboard Development</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Tableau Visualization & Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Custom Dashboard Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time Data Integration</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">Mobile-Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
