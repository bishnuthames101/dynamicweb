import React from 'react';
import { Users, Award, BookOpen, Target, CheckCircle } from 'lucide-react';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/mockData';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12 pb-8">
        <PageTitle 
          title="About Us" 
          subtitle="Learn about our school's history, mission, and values."
          centered
        />
      </Section>
      
      {/* History Section */}
      <Section backgroundClass="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our History</h2>
            <p className="text-gray-600">
              Founded in 2000, EduSite Dynamic School began with a vision to provide quality education to the children of Nepal. What started as a small institution with just 50 students has now grown into one of the most respected educational institutions in the region.
            </p>
            <p className="text-gray-600">
              Over the past two decades, we have continuously evolved our teaching methodologies and upgraded our infrastructure to keep pace with global educational standards. Our commitment to excellence has helped thousands of students achieve their dreams and contribute positively to society.
            </p>
            <p className="text-gray-600">
              Today, we stand proud as an institution that not only focuses on academic excellence but also emphasizes character building, creativity, and overall personality development.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/256491/pexels-photo-256491.jpeg" 
              alt="School Building" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg text-sm text-gray-700">
              Our main building established in 2000
            </div>
          </div>
        </div>
      </Section>
      
      {/* Mission & Vision Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary-50 p-8 rounded-lg border border-primary-100">
            <div className="mb-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Target className="text-primary-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To provide quality education that nurtures critical thinking, creativity, and character in a supportive learning environment where students can discover and develop their unique potential.
            </p>
            <ul className="space-y-3">
              {[
                'Foster academic excellence and love for learning',
                'Develop critical thinking and problem-solving skills',
                'Nurture moral values and ethical leadership',
                'Prepare students for global challenges'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100">
            <div className="mb-4 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <BookOpen className="text-secondary-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be recognized as a center of excellence in education that empowers students to become responsible global citizens who contribute positively to society and lead meaningful lives.
            </p>
            <ul className="space-y-3">
              {[
                'Be a leading educational institution in Nepal',
                'Create a community of lifelong learners',
                'Integrate technology with traditional learning methods',
                'Promote cultural values alongside global perspectives'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Stats Section */}
      <Section backgroundClass="bg-primary-600 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-xl opacity-90">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1,500+</div>
            <div className="text-xl opacity-90">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">120+</div>
            <div className="text-xl opacity-90">Expert Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-xl opacity-90">Success Rate</div>
          </div>
        </div>
      </Section>
      
      {/* Core Values Section */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in all aspects of education, encouraging our students to aim high and perform to the best of their abilities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Respect</h3>
            <p className="text-gray-600">
              We foster mutual respect among students, teachers, and staff, creating a harmonious environment that values diverse perspectives.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty and integrity in all our actions, teaching students the importance of ethical behavior and moral values.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace innovative teaching methods and technologies to enhance the learning experience and prepare students for a rapidly changing world.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              We create an inclusive environment where every student feels valued and has equal opportunities to learn and grow.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsibility</h3>
            <p className="text-gray-600">
              We encourage social responsibility, teaching students to contribute positively to their communities and the wider world.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Team Section */}
      <Section backgroundClass="bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Leadership Team</h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Meet our dedicated team of educators and administrators who work tirelessly to maintain our high standards of education and student care.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;