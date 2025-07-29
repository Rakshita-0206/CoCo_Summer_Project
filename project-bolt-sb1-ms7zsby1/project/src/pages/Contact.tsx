import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      description: 'Get in touch via email',
      contact: 'info@exammate.com',
      action: 'mailto:info@exammate.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Call Us',
      description: 'Speak to our team',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-6 w-6 text-indigo-600" />,
      title: 'Visit Us',
      description: 'Our office location',
      contact: 'New York, NY 10001',
      action: '#'
    }
  ];

  const faqs = [
    {
      question: 'How accurate are your AI recommendations?',
      answer: 'Our AI achieves 95% accuracy in recommendations by analyzing millions of student success patterns and continuously learning from user feedback.'
    },
    {
      question: 'Is ExamMate free to use?',
      answer: 'We offer both free and premium tiers. Basic recommendations are free, while advanced features require a subscription.'
    },
    {
      question: 'What types of exams do you support?',
      answer: 'We support over 200 exam types including competitive exams, academic tests, professional certifications, and standardized tests.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply start chatting with our AI assistant, tell us about your exam goals, and receive personalized recommendations instantly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-800 to-indigo-700">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-white">Get in</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                {' '}Touch
              </span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Have questions about ExamMate? We're here to help you succeed in your exam preparation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-teal-100 mb-4">
                  {info.description}
                </p>
                <a
                  href={info.action}
                  className="text-teal-300 hover:text-teal-200 font-medium transition-colors duration-200"
                >
                  {info.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-teal-100">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="" className="text-gray-900">Select a subject</option>
                      <option value="general" className="text-gray-900">General Inquiry</option>
                      <option value="support" className="text-gray-900">Technical Support</option>
                      <option value="feedback" className="text-gray-900">Feedback</option>
                      <option value="partnership" className="text-gray-900">Partnership</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg mb-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-teal-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Get Personalized Help</h4>
                      <p className="text-teal-100 text-sm">Our team can provide tailored recommendations for your specific exam needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Quick Response</h4>
                      <p className="text-teal-100 text-sm">We typically respond to all inquiries within 24 hours.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Expert Support</h4>
                      <p className="text-teal-100 text-sm">Get help from our experienced team of educators and AI specialists.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 rounded-2xl text-white border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-teal-100 text-sm mt-4">
                  For urgent inquiries outside office hours, please use our AI chatbot for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-teal-100">
              Find answers to common questions about ExamMate
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-teal-100 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;