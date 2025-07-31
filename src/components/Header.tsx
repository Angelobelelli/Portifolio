import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center"> 
            <div className="w-12 h-12 bg-gradient-to-r  rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                <img src='../../img/image-removebg-preview.png'></img>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block text-white hover:text-purple-400 transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-white hover:text-purple-400 transition-colors duration-300"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block text-white hover:text-purple-400 transition-colors duration-300"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors duration-300 w-fit"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;