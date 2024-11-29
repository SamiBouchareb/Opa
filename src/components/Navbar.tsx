import React, { useState, useEffect } from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className={`transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} size={24} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>Dr. Abdelali</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              À Propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10'
              }`}
            >
              Prendre Rendez-vous
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}