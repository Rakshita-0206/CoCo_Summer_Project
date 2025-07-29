import React from 'react';
import { ArrowRight, BookOpen, Video, MessageCircle, Users, Star, TrendingUp, Brain, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Smart Book Recommendations',
      description: 'Get AI-powered suggestions for the best books tailored to your exam type and learning style.'
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: 'Curated Video Content',
      description: 'Access handpicked video tutorials and lectures from top educators and platforms.'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      title: 'AI Chat Assistant',
      description: 'Chat with our intelligent assistant for instant study guidance and motivation.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Books Analyzed' },
    { number: '5,000+', label: 'Video Resources' },
    { number: '50,000+', label: 'Students Helped' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-teal-400">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-3xl mb-8 shadow-2xl">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Exam Companion
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect books, videos, and motivational content for any competitive or academic exam. 
              Let our AI guide you to success with personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/streams"
                className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-white/30"
              >
                <Target className="h-5 w-5" />
                <span>Explore Streams</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/chatbot"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ask AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ExamMate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with expert curation to provide 
              you with the most effective study resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-pink-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who are already using ExamMate to achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/streams"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/80 backdrop-blur-lg border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;