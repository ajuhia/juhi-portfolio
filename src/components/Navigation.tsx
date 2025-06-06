
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', isIcon: true, path: '/' },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'education', label: 'Education', path: '/education' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'certifications', label: 'Certifications', path: '/certifications' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-maroon-700 font-poppins hover:text-maroon-600 transition-colors">
            Juhi Anand
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-maroon-600 flex items-center ${
                  isActivePage(item.path) ? 'text-maroon-600' : 'text-slate-700'
                }`}
              >
                {item.isIcon ? <Home size={18} /> : item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className="border-maroon-500 text-maroon-600 hover:bg-maroon-600 hover:text-white"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
