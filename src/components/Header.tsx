import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://portal.revattitude.io/uploads/domain/58696/logo/Revattitude500x200_ddf5a624ac37af0e9198265581568538.png" 
              alt="RevAttitude Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          <Link to="/" onClick={() => scrollToSection('home')} className="block md:inline-block py-2 text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/" onClick={() => scrollToSection('services')} className="block md:inline-block py-2 text-gray-600 hover:text-blue-600">Services</Link>
          <Link to="/" onClick={() => scrollToSection('contact')} className="block md:inline-block py-2 text-gray-600 hover:text-blue-600">Contact</Link>
          <a href="https://reviews.revattitude.com/" target="_blank" rel="noopener noreferrer" className="block md:inline-block py-2 text-gray-600 hover:text-blue-600">Client Portal</a>
        </nav>
        <div className="flex items-center">
          <Link to="/" onClick={() => scrollToSection('services')} className="hidden md:inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mr-4">
            Get Started
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;