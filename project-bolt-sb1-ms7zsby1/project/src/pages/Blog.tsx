import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Brain, Target, Coffee } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Science Behind Effective Exam Preparation: How AI is Revolutionizing Study Methods',
    excerpt: 'Discover how artificial intelligence is transforming the way students prepare for exams, making study sessions more efficient and effective than ever before.',
    author: 'ExamMate Team',
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI & Technology'
  };

  const blogPosts = [
    {
      title: '10 Proven Study Techniques That Actually Work',
      excerpt: 'Evidence-based study methods that have helped thousands of students improve their exam performance and retention rates.',
      author: 'RK',
      date: 'December 12, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Study Tips',
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    },
    {
      title: 'How to Stay Motivated During Long Study Sessions',
      excerpt: 'Practical strategies to maintain focus and motivation throughout your exam preparation journey.',
      author: 'Anuradha',
      date: 'December 10, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Motivation',
      icon: <Target className="h-5 w-5 text-purple-600" />
    },
    {
      title: 'The Psychology of Learning: Understanding Your Brain',
      excerpt: 'Learn how your brain processes information and how to optimize your study methods based on cognitive science.',
      author: 'Cheeranjeet',
      date: 'December 8, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Psychology',
      icon: <Brain className="h-5 w-5 text-indigo-600" />
    },
    {
      title: 'Creating the Perfect Study Environment',
      excerpt: 'Tips for setting up a productive study space that enhances focus and minimizes distractions.',
      author: 'Ritesh',
      date: 'December 5, 2024',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Productivity',
      icon: <Coffee className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Time Management Strategies for Busy Students',
      excerpt: 'Effective time management techniques to balance studies with other commitments and responsibilities.',
      author: 'Jamal',
      date: 'December 3, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Time Management',
      icon: <Target className="h-5 w-5 text-red-600" />
    },
    {
      title: 'Digital Tools That Enhance Your Study Experience',
      excerpt: 'A comprehensive guide to the best digital tools and apps that can supercharge your learning process.',
      author: 'ExamMate Team',
      date: 'December 1, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    }
  ];

  const categories = [
    'All Posts',
    'Study Tips',
    'AI & Technology',
    'Motivation',
    'Psychology',
    'Productivity',
    'Time Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-white">ExamMate</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                {' '}Blog
              </span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover study tips, educational insights, and the latest in AI-powered learning 
              to help you achieve your academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-orange-300 font-medium text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-indigo-200 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 w-fit transform hover:scale-105">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                    : 'bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 hover:transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-lg text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      {post.icon}
                      <span>{post.category}</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-indigo-100 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-indigo-200 text-sm mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-indigo-300">{post.readTime}</span>
                    <button className="text-orange-300 hover:text-orange-200 font-medium flex items-center space-x-1 transition-colors duration-200">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Tips
          </h2>
            <p className="text-xl text-orange-100 mb-8">
            Subscribe to our newsletter and never miss out on valuable study insights and exam preparation strategies.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
            />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;