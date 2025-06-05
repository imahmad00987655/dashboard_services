import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle2, ArrowRight, PieChart, BarChart, LineChart, Clock, Users, FileCode2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingElements from '@/components/FloatingElements';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-Time Data",
      description: "Monitor KPIs live with seamless API integrations and instant data updates.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Responsive",
      description: "Access dashboards on any device, anytime with touch-friendly interfaces.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Power BI & Tableau",
      description: "Leverage industry-leading tools for stunning data visualizations.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Tailored dashboards to fit your unique business needs and requirements.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      ),
      title: "Data Sorting",
      description: "Effortlessly sort, filter, and analyze data with interactive controls.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
        </svg>
      ),
      title: "3D Visualizations",
      description: "Advanced 3D charts and interactive visualizations for complex data.",
    },
  ];

  const testimonials = [
    {
      quote: "DataVision transformed our complex financial data into intuitive dashboards. Our decision-making process is now 3x faster.",
      author: "Sarah Johnson",
      role: "CFO, TechCorp",
    },
    {
      quote: "The real-time healthcare dashboard they built helps us monitor patient data instantly. Exceptional work!",
      author: "Dr. Michael Chen",
      role: "Medical Director, HealthPlus",
    },
    {
      quote: "Their custom marketing dashboard with 3D visualizations gives us insights we never had before.",
      author: "Emma Rodriguez",
      role: "Marketing Director, GrowthCo",
    },
  ];

  const processSteps = [
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Requirements Analysis",
      description: "We start by understanding your business goals and data needs to create a tailored dashboard solution.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Dashboard Design",
      description: "Our UI/UX experts craft intuitive mockups that focus on clear data visualization and user experience.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Development & Integration",
      description: "We build your custom dashboard and integrate it with your existing data sources and APIs.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Testing & Deployment",
      description: "Rigorous testing ensures your dashboard functions flawlessly before going live.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Training & Support",
      description: "We provide comprehensive training and ongoing support to maximize your dashboard's value.",
    },
  ];

  const faqs = [
    {
      question: "What dashboard platforms do you work with?",
      answer: "We specialize in Power BI, Tableau, and custom-built dashboard solutions that can integrate with virtually any data source or platform.",
    },
    {
      question: "How long does it take to build a dashboard?",
      answer: "Simple dashboards can be deployed within 1-2 weeks, while more complex, enterprise-level solutions typically take 4-8 weeks depending on requirements and integrations.",
    },
    {
      question: "Can you integrate real-time data from multiple sources?",
      answer: "Absolutely! We excel at creating dashboards that consolidate data from various sources including CRMs, ERPs, marketing platforms, and IoT devices with real-time updates.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we provide flexible support packages that include regular updates, performance optimization, and technical assistance to keep your dashboards running smoothly.",
    },
    {
      question: "Are your dashboards mobile-friendly?",
      answer: "All our dashboards are fully responsive and optimized for mobile devices, ensuring you can access critical insights anytime, anywhere.",
    },
  ];

  const industryStats = [
    {
      stat: "67%",
      description: "of businesses using data visualization see improved decision-making speed"
    },
    {
      stat: "5x",
      description: "faster data analysis with interactive dashboards vs. static reports"
    },
    {
      stat: "42%",
      description: "average ROI increase when implementing business intelligence dashboards"
    },
    {
      stat: "89%",
      description: "of executives say dashboards are critical to their business strategy"
    }
  ];

  const scrollToConsultation = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-teal-50/80 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-6 transform hover:scale-110 transition-all duration-500 hover:rotate-12">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
              Transform Your Data into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-pulse">
                Actionable Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '200ms'}}>
              Power BI, Tableau, and Custom Solutions for Real-Time Data Visualization with Advanced 3D Charts and Interactive Dashboards
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <Button asChild className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white px-10 py-4 rounded-xl text-lg font-medium transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 animate-pulse">
                <Link to="/services" className="text-white hover:text-white">🚀 Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-3 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 hover:text-white px-10 py-4 rounded-xl text-lg font-medium transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-teal-500/25 bg-white/80 backdrop-blur-sm">
                <Link to="/portfolio">✨ See Our Portfolio</Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '600ms'}}>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-600 mb-2">5⭐</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">DataVision</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive dashboard solutions with cutting-edge technology and real-time capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mb-6 animate-pulse">
              <FileCode2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Data Visualization</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform raw data into meaningful insights that drive better business decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((item, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-500 animate-fade-in text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-transparent bg-clip-text">
                  {item.stat}
                </div>
                <p className="text-gray-700 text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-8 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Process</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to deliver high-quality, impactful dashboard solutions
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-teal-500 h-full rounded-full hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-24 relative">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} animate-fade-in`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'} text-center md:text-left ${index % 2 === 1 ? 'md:text-right' : ''} mb-8 md:mb-0`}>
                    <div 
                      className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-125 transition-all duration-500 shadow-lg">
                        <div className="text-blue-600">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center z-10 w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by businesses worldwide for data visualization excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in border border-white/20"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="text-5xl text-blue-600 mb-6 animate-bounce">"</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our dashboard services
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100 animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200 last:border-0">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 py-4 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Have more questions? We're here to help!
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                Contact Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dashboard solutions power businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <div className="w-32 h-12 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="font-bold text-blue-800">Company {index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-8 animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get started with our custom dashboards and drive your business forward with real-time insights
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-gradient-to-r from-white to-gray-100 text-blue-600 hover:from-gray-100 hover:to-white px-10 py-4 rounded-xl text-lg font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl">
              <Link to="/contact">Contact Us <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-white to-gray-100 text-blue-600 hover:from-gray-100 hover:to-white px-10 py-4 rounded-xl text-lg font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl">
              <Link to="/services" className="text-blue-600 hover:text-blue-600">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
