
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const timeline = [
    { year: '2020', event: 'DataVision Founded', description: 'Started with a vision to democratize data visualization' },
    { year: '2021', event: '50+ Projects', description: 'Delivered dashboards for startups to Fortune 500 companies' },
    { year: '2022', event: 'Global Expansion', description: 'Expanded services to clients across 15 countries' },
    { year: '2023', event: '100+ Dashboards', description: 'Milestone achievement in custom dashboard delivery' },
    { year: '2024', event: 'AI Integration', description: 'Pioneering AI-powered insights in data visualization' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We use the latest technologies to create cutting-edge dashboards with 3D visualizations and real-time capabilities.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Reliability',
      description: 'Our solutions are built for performance and scalability, ensuring your dashboards work flawlessly 24/7.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Customer-Centricity',
      description: 'We tailor every dashboard to your unique needs, ensuring maximum value and user satisfaction.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Empowering Businesses with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Data-Driven Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            We are a team of data visualization experts dedicated to transforming complex data into actionable insights through innovative dashboard solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, DataVision has delivered over 100 custom dashboards to clients worldwide, 
                  leveraging cutting-edge tools like Power BI and Tableau to create stunning visualizations.
                </p>
                <p>
                  Our journey began with a simple mission: to make complex data accessible and actionable for 
                  businesses of all sizes. We recognized that traditional reporting methods were falling short 
                  in an increasingly data-driven world.
                </p>
                <p>
                  Today, we specialize in real-time data solutions, mobile-responsive designs, and advanced 
                  3D visualizations that help our clients make informed decisions faster than ever before.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-gray-600">Dashboards Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">15+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our data visualization evolution</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-500"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <div className="text-xl font-semibold text-gray-900 mb-2">{item.event}</div>
                      <div className="text-gray-600">{item.description}</div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
