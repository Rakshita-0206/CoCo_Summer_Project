import React from 'react';
import { Users, Target, Heart, Code, Database, FileText, Brain } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'RK',
      role: 'Frontend Developer',
      icon: <Code className="h-8 w-8 text-blue-600" />,
      description: 'Crafting beautiful and intuitive user interfaces with modern design principles.',
      skills: ['React', 'TypeScript', 'UI/UX Design', 'Responsive Web Design']
    },
    {
      name: 'Anuradha',
      role: 'Backend Developer',
      icon: <Database className="h-8 w-8 text-green-600" />,
      description: 'Building robust and scalable backend systems with cloud architecture.',
      skills: ['Node.js', 'Database Design', 'API Development', 'Cloud Architecture']
    },
    {
      name: 'Jamal',
      role: 'Documentation Specialist',
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      description: 'Ensuring comprehensive documentation and seamless project coordination.',
      skills: ['Technical Writing', 'Project Management', 'Quality Assurance', 'Process Optimization']
    },
    {
      name: 'Cheeranjeet',
      role: 'AI/ML Engineer',
      icon: <Brain className="h-8 w-8 text-red-600" />,
      description: 'Developing intelligent recommendation algorithms and training ML models.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Algorithm Design']
    },
    {
      name: 'Ritesh',
      role: 'AI/ML Engineer',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      description: 'Creating smart AI systems for personalized learning experiences.',
      skills: ['Deep Learning', 'Natural Language Processing', 'AI Research', 'Model Training']
    }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to user experience.'
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Community',
      description: 'Building a supportive community where students can learn, grow, and succeed together.'
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: 'Passion',
      description: 'We are passionate about education and helping students achieve their dreams.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-200 via-purple-200 to-violet-300 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">
                {' '}ExamMate
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're a passionate team of developers, AI engineers, and education enthusiasts 
              dedicated to revolutionizing how students prepare for exams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At ExamMate, we believe that every student deserves access to the best study materials 
                and guidance. Our mission is to democratize exam preparation by leveraging artificial 
                intelligence to provide personalized recommendations that help students succeed.
              </p>
              <p className="text-lg text-gray-600">
                We understand that finding the right resources can be overwhelming. That's why we've 
                created an intelligent platform that learns from your preferences and goals to suggest 
                the most effective books, videos, and study materials for your specific needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise in technology, AI, and education 
              to create the best possible experience for our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {member.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 to-violet-100 text-purple-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              ExamMate was born from our collective experience as students who struggled to find 
              the right study materials among countless options. We realized that while there's 
              no shortage of educational content online, the challenge lies in discovering what's 
              most relevant and effective for each individual learner.
            </p>
            <p>
              Combining our expertise in frontend development, backend systems, AI/ML, and 
              documentation, we set out to create a solution that would make exam preparation 
              more efficient and less stressful. Our AI-powered recommendation system learns 
              from successful study patterns and adapts to each user's learning style.
            </p>
            <p>
              Today, ExamMate helps thousands of students worldwide discover the perfect study 
              resources for their academic journey. We're constantly improving our algorithms 
              and expanding our database to serve you better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;