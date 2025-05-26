import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockData';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCourses = courses.filter((course) => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <Section className="pt-12 pb-8">
        <PageTitle 
          title="Our Programs" 
          subtitle="Explore the comprehensive range of academic programs we offer at EduSite Dynamic."
          centered
        />
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </Section>
      
      <Section>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
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
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No programs found matching your search. Please try a different term.</p>
          </div>
        )}
      </Section>
      
      {/* Additional Information Section */}
      <Section backgroundClass="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Programs?</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-gray-600">
                Our programs are designed to foster not just academic excellence but also physical, emotional, and social development. We believe in nurturing well-rounded individuals ready to face the challenges of the modern world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                All our programs are taught by experienced educators who are experts in their respective fields. They use innovative teaching methods to make learning engaging and effective.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                Our school is equipped with state-of-the-art facilities including science laboratories, computer labs, libraries, and sports facilities to provide practical, hands-on learning experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Personalized Attention</h3>
              <p className="text-gray-600">
                With a favorable teacher-student ratio, we ensure that each student receives personalized attention and guidance to maximize their learning potential.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Courses;