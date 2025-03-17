
import { Database, Shield, Code, Lightbulb, Briefcase, GraduationCap } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper>
            <p className="heading-chip">About Me</p>
            <h2 className="section-heading">Professional Background</h2>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <MotionWrapper delay={200}>
              <div className="space-y-6">
                <p className="text-lg">
                  I'm <span className="font-semibold">Imam Mukhri</span>, an Industrial Engineer who has built a multifaceted career spanning Government, Manufacturing, and Technology sectors. My expertise lies in bridging technical knowledge with practical industry applications.
                </p>
                <p>
                  I specialize in Management Systems and Product Certification, including SNI and Halal Certification. My technical proficiency extends to programming (Python, HTML, JavaScript) and data science, allowing me to deliver comprehensive solutions that combine engineering precision with innovative technology.
                </p>
                <p>
                  My unique perspective comes from working across diverse industries, giving me insight into how technical solutions can address real-world challenges in regulated environments.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={400}>
              <div className="glass-card p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-5">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { 
                      icon: <Shield className="h-6 w-6 text-primary" />, 
                      title: "Certification", 
                      desc: "SNI & Halal Certification expertise" 
                    },
                    { 
                      icon: <Briefcase className="h-6 w-6 text-primary" />, 
                      title: "Management", 
                      desc: "Systems implementation & oversight" 
                    },
                    { 
                      icon: <Code className="h-6 w-6 text-primary" />, 
                      title: "Development", 
                      desc: "Python, HTML, JavaScript" 
                    },
                    { 
                      icon: <Database className="h-6 w-6 text-primary" />, 
                      title: "Data Science", 
                      desc: "Analysis & implementation" 
                    },
                    { 
                      icon: <GraduationCap className="h-6 w-6 text-primary" />, 
                      title: "Engineering", 
                      desc: "Industrial engineering background" 
                    },
                    { 
                      icon: <Lightbulb className="h-6 w-6 text-primary" />, 
                      title: "Innovation", 
                      desc: "Tech-forward solutions" 
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center mb-2">
                        {item.icon}
                        <h4 className="font-medium ml-2">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>
          
          <div className="mt-20">
            <MotionWrapper>
              <h3 className="text-2xl font-bold mb-8">Industry Experience</h3>
            </MotionWrapper>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Government",
                  description: "Doing assessment based on regulatory that has been developed, enhancing public safety and product quality."
                },
                {
                  title: "Manufacturing",
                  description: "Implemented efficient management systems that streamlined production while ensuring adherence to international quality and certification standards."
                },
                {
                  title: "Technology",
                  description: "Created data-driven solutions and technical systems that bridge the gap between traditional industry needs and modern technological capabilities."
                }
              ].map((item, index) => (
                <MotionWrapper key={index} delay={200 * (index + 1)}>
                  <div className="glass-card rounded-xl p-6 h-full">
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
