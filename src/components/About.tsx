import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

export const About = () => {
  const highlights = [
    'DevOps & Cloud Infrastructure',
    'Network Engineering',
    'Software Development',
    'Data Visualization',
    'System Automation'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated tech enthusiast from Indonesia, specializing in DevOps, cloud technologies, 
            and network engineering with a passion for creating efficient, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slideInLeft">
            <Card className="p-8 shadow-card border border-border/50">
              <CardContent className="space-y-6 p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>West Java, Indonesia</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Universitas Singaperbangsa Karawang</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-lg">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Passionate about technology & innovation</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a DevOps engineer with a strong background in cloud infrastructure, 
                    network engineering, and software development. I love building robust, 
                    scalable systems and automating complex processes to make technology 
                    work seamlessly.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    My expertise spans across various cloud platforms, container orchestration, 
                    CI/CD pipelines, and network architecture. I also enjoy data visualization 
                    and creating insightful dashboards that help teams make informed decisions.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">What I Do</h4>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats/Achievements */}
          <div className="animate-slideInRight">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold hero-text mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold hero-text mb-2">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold hero-text mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold hero-text mb-2">100%</div>
                  <div className="text-muted-foreground">Passion Driven</div>
                </CardContent>
              </Card>
            </div>

            {/* Fun fact */}
            <Card className="mt-6 p-6 shadow-card border border-border/50 bg-gradient-subtle">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-2 text-foreground">Fun Fact</h4>
                <p className="text-muted-foreground">
                  🩷 I love anime and my favorite character is Alhaitham from Genshin Impact! 
                  When I'm not coding or building infrastructure, you can find me exploring 
                  new tech trends or creating data visualizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};