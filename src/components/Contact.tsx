
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import MotionWrapper from './MotionWrapper';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <MotionWrapper>
            <p className="heading-chip">Contact</p>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl">
              Interested in working together? I'm always open to discussing new projects, opportunities or partnerships.
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-5 gap-10 mt-16">
            <MotionWrapper delay={200} className="md:col-span-2">
              <div className="glass-card rounded-xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:contact@example.com" 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-medium mb-4">Connect</h4>
                  <div className="flex space-x-4">
                    {['linkedin', 'twitter', 'github'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        aria-label={platform}
                      >
                        <span className="capitalize text-sm">{platform.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={400} className="md:col-span-3">
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="rounded-lg min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="rounded-full px-8 w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
