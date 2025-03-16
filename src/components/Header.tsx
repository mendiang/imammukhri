
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a 
            href="#top" 
            className="text-xl font-semibold tracking-tight"
          >
            <span className="text-primary">E</span>ngineer.
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-sm" />
            <Button 
              asChild 
              className="rounded-full px-6"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col space-y-4">
            <NavLinks 
              className="flex flex-col space-y-4 py-2" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <Button 
              asChild 
              className="rounded-full w-full"
            >
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

const NavLinks = ({ className = '', onClick = () => {} }: NavLinksProps) => {
  return (
    <div className={className}>
      {['about', 'portfolio', 'contact'].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors capitalize"
          onClick={onClick}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Header;
