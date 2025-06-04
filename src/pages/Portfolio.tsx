
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Real-Time Finance Dashboard',
      category: 'Finance',
      description: 'Power BI dashboard for stock market data with live updates and advanced analytics.',
      image: '/placeholder.svg',
      technologies: ['Power BI', 'API Integration', 'Real-time Data'],
      results: ['50% faster analysis', '99.9% uptime', 'Real-time alerts'],
    },
    {
      id: 2,
      title: 'Healthcare Analytics Platform',
      category: 'Healthcare',
      description: 'Tableau dashboard for patient data visualization with mobile responsiveness.',
      image: '/placeholder.svg',
      technologies: ['Tableau', 'Mobile Design', 'Data Security'],
      results: ['30% better insights', 'HIPAA compliant', 'Mobile optimized'],
    },
    {
      id: 3,
      title: 'Custom Marketing Dashboard',
      category: 'Marketing',
      description: 'Custom solution with 3D visualizations for social media and campaign analytics.',
      image: '/placeholder.svg',
      technologies: ['Custom Solution', '3D Visualizations', 'Social APIs'],
      results: ['3D data exploration', 'Multi-platform data', 'Real-time ROI'],
    },
    {
      id: 4,
      title: 'E-commerce Analytics Suite',
      category: 'E-commerce',
      description: 'Comprehensive dashboard suite for online retail with inventory and sales tracking.',
      image: '/placeholder.svg',
      technologies: ['Power BI', 'Tableau', 'Custom Charts'],
      results: ['Unified data view', 'Inventory optimization', 'Sales forecasting'],
    },
    {
      id: 5,
      title: 'Manufacturing KPI Dashboard',
      category: 'Manufacturing',
      description: 'Industrial IoT dashboard with real-time machine monitoring and predictive analytics.',
      image: '/placeholder.svg',
      technologies: ['Custom Solution', 'IoT Integration', 'Predictive Analytics'],
      results: ['25% efficiency gain', 'Predictive maintenance', 'Cost reduction'],
    },
    {
      id: 6,
      title: 'Educational Insights Platform',
      category: 'Education',
      description: 'Student performance and institutional analytics with interactive reporting.',
      image: '/placeholder.svg',
      technologies: ['Tableau', 'Data Visualization', 'Report Automation'],
      results: ['Student insights', 'Performance tracking', 'Automated reports'],
    },
  ];

  const categories = ['All', 'Finance', 'Healthcare', 'Marketing', 'E-commerce', 'Manufacturing', 'Education'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Speaks for Itself
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            Explore our portfolio of data-driven dashboards built for success across various industries and business needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
            <p className="text-xl text-gray-600">Deep dive into one of our most successful implementations</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="text-blue-600 font-semibold mb-2">Finance Dashboard</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Real-Time Stock Market Analytics
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      A financial services company needed real-time stock market data visualization 
                      with advanced analytics and mobile accessibility for their trading team.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      We developed a Power BI dashboard with live API integration, custom visualizations, 
                      and mobile-responsive design for on-the-go trading decisions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">50%</div>
                        <div className="text-sm text-gray-600">Faster Analysis</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Interactive Dashboard Preview</p>
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

export default Portfolio;
