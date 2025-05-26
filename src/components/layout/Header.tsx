import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Bell, User } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Courses', path: '/courses' },
    { title: 'Notice Board', path: '/notice-board' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap size={28} className="text-primary-600" />
            <span className="text-xl font-bold text-gray-800">EduSite</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary-600 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-700'}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Admin Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/notice-board">
              <Bell size={20} className="text-gray-600 hover:text-primary-600 transition-colors" />
            </Link>
            <Link to="/admin">
              <Button variant="primary" size="sm" className="flex items-center">
                <User size={16} className="mr-1" />
                Admin
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-primary-600 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link 
                to="/admin" 
                className="flex items-center font-medium text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} className="mr-1" />
                Admin Login
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;