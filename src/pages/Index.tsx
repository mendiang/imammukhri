
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Account for header
          behavior: 'smooth'
        });
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="space-y-16 md:space-y-24">
        <Hero />
        <About />
        <div className="h-16 md:h-24"></div> {/* Extra spacing */}
        <Portfolio />
        <div className="h-16 md:h-24"></div> {/* Extra spacing */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
