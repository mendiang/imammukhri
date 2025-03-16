
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#top" 
              className="text-xl font-semibold"
            >
              <span className="text-primary">E</span>ngineer.
            </a>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Bridging Industry and Technology with Engineering Excellence
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors mb-4"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
