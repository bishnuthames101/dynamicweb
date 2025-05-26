import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bell, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import NoticeCard from '../components/NoticeCard';
import CourseCard from '../components/CourseCard';
import { notices, courses } from '../data/mockData';

const Home: React.FC = () => {
  // Take only the latest 3 notices
  const latestNotices = [...notices].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);
  
  // Take only 3 featured courses
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-800/60"></div>
          <img 
            src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
            alt="School Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <Container className="relative z-10 py-20 md:py-32">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Future Leaders</h1>
            <p className="text-xl mb-8 text-white/90">
              EduSite Dynamic provides quality education to shape the future of Nepal. 
              Join us in our journey to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-600">
              Comprehensive curriculum designed to nurture all-round development.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
              <Users size={24} className="text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">
              Experienced teachers dedicated to bringing out the best in every student.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-4">
              <Clock size={24} className="text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">
              State-of-the-art infrastructure to support effective learning.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Bell size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
            <p className="text-gray-600">
              Stay informed with our digital notice board and communication channels.
            </p>
          </Card>
        </div>
      </Section>
      
      {/* About Preview Section */}
      <Section backgroundClass="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Welcome to EduSite Dynamic</h2>
            <p className="text-gray-600 mb-4">
              Established with a vision to provide quality education, EduSite Dynamic has been at the forefront of educational excellence in Nepal for over two decades.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to empower students with knowledge, skills, and values that will help them excel in their chosen paths and contribute positively to society.
            </p>
            <ul className="space-y-2 mb-6">
              {['Student-centered approach', 'Holistic development', 'Technological integration', 'Cultural values'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button variant="primary" className="flex items-center">
                Learn More About Us
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8471658/pexels-photo-8471658.jpeg" 
                alt="School Campus" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Users size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Our Students</p>
                    <p className="text-2xl font-bold">1,500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Latest Notices Section */}
      <Section>
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Notices</h2>
          <Link to="/notice-board" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
            View All Notices
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </Section>
      
      {/* Featured Courses Section */}
      <Section backgroundClass="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of academic programs designed to nurture young minds and prepare them for future challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              duration={course.duration}
              level={course.level}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/courses">
            <Button variant="primary">
              View All Programs
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your child's educational journey with us and watch them grow into confident, skilled individuals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;