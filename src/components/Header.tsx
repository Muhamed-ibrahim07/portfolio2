import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-gray-900/80 border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-violet-400/20 transition-colors duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              TechForge
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group interactive"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-violet-400 transition-colors duration-300 interactive"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 interactive"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300"
           style={{ width: `${scrollProgress}%` }}></div>
    </header>
  );
};

export default Header;