
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MotionWrapper from './MotionWrapper';

const Hero = () => {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -left-40 bottom-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="stagger-animation">
            <MotionWrapper delay={100}>
              <p className="heading-chip mb-4">Industrial Engineer & Technology Expert</p>
            </MotionWrapper>
            
            <MotionWrapper delay={300}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight mb-6">
                Bridging <span className="text-primary">Industry</span> and <span className="text-primary">Technology</span> with Engineering Excellence
              </h1>
            </MotionWrapper>
            
            <MotionWrapper delay={500}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Specializing in Management Systems, Product Certification, and Technical Implementation, with expertise spanning Government, Manufacturing, and Technology sectors.
              </p>
            </MotionWrapper>
            
            <MotionWrapper delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full px-8"
                >
                  <a href="#portfolio">View My Work</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8"
                >
                  <a href="#about">Learn About Me</a>
                </Button>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={900}>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
                <a 
                  href="#about"
                  className="flex flex-col items-center text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  <span className="mb-2">Scroll Down</span>
                  <ArrowDown className="animate-bounce h-5 w-5" />
                </a>
              </div>
            </MotionWrapper>
          </div>
          
          <div className="mt-20 md:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Government', 'Manufacturing', 'Technology', 'Data Science'].map((item, index) => (
              <MotionWrapper 
                key={item} 
                delay={800 + index * 100}
                className="glass-card rounded-lg flex items-center justify-center py-4 px-2 text-center"
              >
                <p className="font-medium text-sm md:text-base">{item}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
