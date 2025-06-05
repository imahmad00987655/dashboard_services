import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ChevronRight, RefreshCw, Clock, Shield, Bell, Smartphone, BarChart, PieChart, Code } from 'lucide-react';

const authors = [
  { name: 'Priya Sharma', avatar: '/author1.png', bio: 'Power BI & Data Analytics Expert' },
  { name: 'Rahul Mehta', avatar: '/author2.png', bio: 'Tableau & BI Consultant' },
  { name: 'Emily Chen', avatar: '/author3.png', bio: 'Custom Dashboards & UX' },
];

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
    author: authors[0],
    tags: ['Power BI', 'Real-Time', 'Dashboards'],
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
    author: authors[1],
    tags: ['Tableau', 'Marketing', 'Analytics'],
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
    author: authors[2],
    tags: ['Custom', '3D', 'Visualizations'],
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
    author: authors[0],
    tags: ['Sorting', 'Dashboards', 'UX'],
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
    author: authors[2],
    tags: ['Mobile', 'Design', 'Dashboards'],
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
    author: authors[1],
    tags: ['Live Data', 'APIs', 'Integration'],
  },
];

const categories = ['All', 'Power BI', 'Tableau', 'Custom Dashboards', 'Data Sorting', 'Live Data', 'Mobile Design'];
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
const recentPosts = blogPosts.slice(0, 5);

const services = [
  {
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: "Power BI Dashboards",
    description: "Microsoft Power BI offers strong business intelligence. We build dashboards that sync with your Excel, SQL Server, or APIs — updating daily and providing drag-and-drop filters to track KPIs, sales, or HR data at a glance."
  },
  {
    icon: <PieChart className="w-12 h-12 text-purple-600" />,
    title: "Tableau Dashboards",
    description: "Our Tableau solutions give you advanced visualization and story-telling dashboards. Custom color palettes, parameter-driven filters, and real-time analytics for departments like finance, operations, and marketing."
  },
  {
    icon: <Code className="w-12 h-12 text-teal-600" />,
    title: "Custom-Coded Dashboards",
    description: "Need something unique? We create full-stack dashboards using React, Node.js, and APIs — offering complete control over UI/UX, data sorting, role-based access, and live streaming charts."
  }
];

const features = [
  { icon: <RefreshCw className="w-6 h-6" />, text: "Live Data Integration — connected to your databases or APIs" },
  { icon: <Clock className="w-6 h-6" />, text: "Daily Auto-Updates — no manual refresh needed" },
  { icon: <Shield className="w-6 h-6" />, text: "Role-Based Access — control who sees what" },
  { icon: <Bell className="w-6 h-6" />, text: "Real-Time Timers & Notifications" },
  { icon: <Smartphone className="w-6 h-6" />, text: "Mobile & Desktop Friendly" }
];

const successStories = [
  {
    title: "75% Faster Report Generation",
    description: "After deploying a Power BI dashboard, our client reduced report generation time by 75%.",
    image: "/placeholder.svg"
  },
  {
    title: "20 Hours Saved Weekly",
    description: "Sales team now saves 20 hours weekly with automated data collection and visualization.",
    image: "/placeholder.svg"
  }
];

const useCases = [
  {
    title: "How We Helped a Sales Team Save 20 Hours Weekly Using Power BI",
    excerpt: "Learn how automated dashboards transformed our client's sales operations...",
    readTime: "5 min read"
  },
  {
    title: "Top 5 Dashboard Features Every HR Manager Needs",
    excerpt: "Discover the essential dashboard features that make HR management more efficient...",
    readTime: "4 min read"
  },
  {
    title: "Live Dashboard vs Static Reports — What's Best for Your Business?",
    excerpt: "Compare the benefits and use cases of live dashboards versus traditional reports...",
    readTime: "6 min read"
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'Data Vision Blog',
  'description': 'Latest trends and best practices in data-driven dashboards, visualization techniques, and business intelligence.',
  'url': 'https://yourdomain.com/blog',
  'blogPost': blogPosts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'image': post.image,
    'author': {
      '@type': 'Person',
      'name': post.author.name,
    },
    'datePublished': post.date,
    'description': post.excerpt,
    'url': `https://yourdomain.com/blog/${post.id}`,
  })),
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Data Vision Blog | Data Dashboards, BI & Visualization Insights</title>
        <meta name="description" content="Latest trends and best practices in data-driven dashboards, visualization techniques, and business intelligence." />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        <meta property="og:title" content="Data Vision Blog | Data Dashboards, BI & Visualization Insights" />
        <meta property="og:description" content="Latest trends and best practices in data-driven dashboards, visualization techniques, and business intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:image" content="/blog-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Vision Blog | Data Dashboards, BI & Visualization Insights" />
        <meta name="twitter:description" content="Latest trends and best practices in data-driven dashboards, visualization techniques, and business intelligence." />
        <meta name="twitter:image" content="/blog-og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Section with Intro */}
        <section className="relative pt-16 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Dashboards Are the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Heart of Modern Decision-Making
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-3 text-lg text-gray-600 animate-fade-in" style={{animationDelay: '200ms'}}>
              <p>Data is the new oil. In today's fast-paced business environment, dashboards simplify complex data into actionable insights.</p>
              <p>With real-time updates and intuitive visualizations, modern dashboards enable smarter, faster decisions that drive business growth.</p>
            </div>
          </div>
        </section>

        {/* Services Breakdown Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Dashboard Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Makes Our Dashboards Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg flex items-start space-x-3">
                  <div className="text-blue-600">{feature.icon}</div>
                  <p className="text-gray-700 text-base">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-40">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.title}</h3>
                    <p className="text-gray-600 text-base">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Featured Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-3 text-base">{useCase.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{useCase.readTime}</span>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600">
                      <Link to={`/blog/${index + 1}`}>Read More <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-xl animate-fade-in" itemScope itemType="https://schema.org/BlogPosting">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <div className="w-full h-56 lg:h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={post.image}
                        alt=""
                        className="object-cover w-full h-full"
                        itemProp="image"
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block" itemProp="articleSection">
                      {post.category}
                    </span>
                    <div className="flex items-center mb-2">
                      <span className="text-gray-500 text-sm" itemProp="datePublished">{post.date}</span>
                      <span className="ml-4 text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 text-left" itemProp="headline">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-lg" itemProp="description">{post.excerpt}</p>
                    <div className="flex items-center mb-3">
                      <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
                      <span className="text-gray-800 font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">#{tag}</span>
                      ))}
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600">
                      <Link to={`/blog/${post.id}`} itemProp="url">Read More <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in flex flex-col"
                  style={{animationDelay: `${index * 100}ms`}}
                  itemScope itemType="https://schema.org/BlogPosting"
                >
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="object-cover w-full h-full"
                      itemProp="image"
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block" itemProp="articleSection">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span itemProp="datePublished">{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200 text-left" itemProp="headline">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <div className="flex items-center mb-2">
                      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
                      <span className="text-gray-800 text-sm">{post.author.name}</span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed text-base" itemProp="description">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">#{tag}</span>
                      ))}
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 mt-auto">
                      <Link to={`/blog/${post.id}`} itemProp="url">Read More <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
