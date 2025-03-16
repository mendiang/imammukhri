
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type ProjectCategory = 'all' | 'certification' | 'technical' | 'management';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  image: string;
  link?: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "SNI Certification System",
      description: "Developed a comprehensive management system for tracking and implementing SNI certification processes across manufacturing clients.",
      category: "certification",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 2,
      title: "Halal Compliance Framework",
      description: "Created a structured framework for manufacturers to achieve and maintain Halal certification with automated compliance checks.",
      category: "certification",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 3,
      title: "Manufacturing Data Analytics",
      description: "Built a Python-based data analytics platform that helps manufacturing operations identify efficiency improvements through production data.",
      category: "technical",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 4,
      title: "Regulatory Compliance Dashboard",
      description: "Developed an interactive dashboard for tracking compliance metrics across multiple regulatory frameworks simultaneously.",
      category: "management",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Implemented a management system that optimizes supply chain operations while maintaining certification compliance at every step.",
      category: "management",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 6,
      title: "Advanced Process Automation",
      description: "Created a JavaScript-based process automation tool that reduces manual certification paperwork by 85%.",
      category: "technical",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionWrapper>
            <p className="heading-chip">Portfolio</p>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl">
              A selection of my work across certification, technical implementation, and management systems that demonstrate my ability to bridge engineering expertise with practical industry solutions.
            </p>
          </MotionWrapper>
        </div>
        
        <div className="mb-10">
          <MotionWrapper delay={200}>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-xl mx-auto">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedCategory('all')}
                  className="rounded-full"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="certification" 
                  onClick={() => setSelectedCategory('certification')}
                  className="rounded-full"
                >
                  Certification
                </TabsTrigger>
                <TabsTrigger 
                  value="technical" 
                  onClick={() => setSelectedCategory('technical')}
                  className="rounded-full"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger 
                  value="management" 
                  onClick={() => setSelectedCategory('management')}
                  className="rounded-full"
                >
                  Management
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <ProjectGrid projects={filteredProjects} />
              </TabsContent>
              <TabsContent value="certification">
                <ProjectGrid projects={filteredProjects} />
              </TabsContent>
              <TabsContent value="technical">
                <ProjectGrid projects={filteredProjects} />
              </TabsContent>
              <TabsContent value="management">
                <ProjectGrid projects={filteredProjects} />
              </TabsContent>
            </Tabs>
          </MotionWrapper>
        </div>
        
        <div className="text-center mt-12">
          <MotionWrapper delay={600}>
            <Button 
              variant="outline" 
              className="rounded-full px-8 group"
            >
              <span>View More Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </MotionWrapper>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto">
          <MotionWrapper>
            <h3 className="text-2xl font-bold mb-8">Certifications & Expertise</h3>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SNI Certification",
                description: "Certified expert in Indonesian National Standard implementation and compliance verification processes."
              },
              {
                title: "Halal Certification",
                description: "Specialist in Halal certification requirements, implementation strategies, and maintenance protocols."
              },
              {
                title: "Data Science & Analytics",
                description: "Expertise in Python-based data analysis and implementing data-driven solutions for industrial applications."
              },
              {
                title: "Management Systems",
                description: "Certified in designing and implementing robust management systems that enhance operational efficiency while maintaining compliance."
              }
            ].map((cert, index) => (
              <MotionWrapper key={index} delay={200 * (index + 1)}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <h4 className="text-xl font-semibold mb-3">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {projects.map((project, index) => (
        <MotionWrapper key={project.id} delay={100 * (index + 1)}>
          <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden aspect-[3/2]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white flex items-center text-sm hover:underline"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="chip">{project.category}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{project.description}</p>
            </div>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
};

export default Portfolio;
