import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import risfaPortrait from '@/assets/risfa-portrait.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block hero-text text-6xl sm:text-7xl lg:text-8xl">Risfandhiani</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              DevOps Engineer & Cloud Specialist
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about cloud infrastructure, network automation, and software engineering. 
              I build scalable systems and streamline deployment processes with modern DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2" />
                  Contact Me
                </a>
              </Button>
              
              <Button variant="glass" size="lg" asChild>
                <a href="#projects">
                  <Download className="mr-2" />
                  View Projects
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={risfaPortrait}
                  alt="Risfandhiani Triara Putri"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};