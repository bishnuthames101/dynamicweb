import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import Container from '../common/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap size={28} className="text-primary-400 mr-2" />
              <h2 className="text-xl font-bold">EduSite Dynamic</h2>
            </div>
            <p className="mb-4 text-gray-300">
              Providing quality education to empower the future generation of Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/notice-board" className="text-gray-300 hover:text-primary-400 transition-colors">Notice Board</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+977 01-4123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@edusite.com.np</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} EduSite Dynamic. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;