
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Create Real-Time Dashboards with Power BI',
      excerpt: 'Learn the step-by-step process to build dynamic dashboards that update in real-time with live data sources.',
      category: 'Power BI',
      readTime: '8 min read',
      date: 'March 15, 2024',
      image: '/placeholder.svg',
      featured: true,
    },
    {
      id: 2,
      title: 'Why Tableau is the Best Choice for Marketing Analytics',
      excerpt: 'Explore the powerful features that make Tableau perfect for marketing data visualization and campaign analysis.',
      category: 'Tableau',
      readTime: '6 min read',
      date: 'March 10, 2024',
      image: '/placeholder.svg',
      featured: false,
    },
    {
      id: 3,
      title: 'Building Custom Dashboards with 3D Visualizations',
      excerpt: 'Discover how to create stunning 3D data visualizations that bring your data to life with interactive elements.',
      category: 'Custom Dashboards',
      readTime: '10 min read',
      date: 'March 5, 2024',
      image: '/placeholder.svg',
      featured: false,
    },
    {
      id: 4,
      title: 'Tips for Effective Data Sorting in Dashboards',
      excerpt: 'Master the art of data organization with advanced sorting and filtering techniques for better user experience.',
      category: 'Data Sorting',
      readTime: '5 min read',
      date: 'February 28, 2024',
      image: '/placeholder.svg',
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile-First Dashboard Design Principles',
      excerpt: 'Essential guidelines for creating dashboards that work beautifully on mobile devices and tablets.',
      category: 'Mobile Design',
      readTime: '7 min read',
      date: 'February 20, 2024',
      image: '/placeholder.svg',
      featured: false,
    },
    {
      id: 6,
      title: 'Integrating Live Data APIs for Real-Time Insights',
      excerpt: 'Technical guide to connecting various data sources and APIs for continuous data flow in your dashboards.',
      category: 'Live Data',
      readTime: '12 min read',
      date: 'February 15, 2024',
      image: '/placeholder.svg',
      featured: false,
    },
  ];

  const categories = ['All', 'Power BI', 'Tableau', 'Custom Dashboards', 'Data Sorting', 'Live Data', 'Mobile Design'];
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Stay Ahead with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Data Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            Learn the latest trends and best practices in data-driven dashboards, visualization techniques, and business intelligence.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Join Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get weekly data insights and dashboard tips delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <li key={category}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <Link
                          to={`/blog/${post.id}`}
                          className="block hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                        >
                          <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
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

export default Blog;
