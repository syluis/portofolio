import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BarChart3, Cloud, Network, Code } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud infrastructure deployment using Terraform and AWS. Implemented CI/CD pipelines for scalable microservices architecture with Docker and Kubernetes.',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'Python'],
      icon: Cloud,
      color: 'text-blue-400',
      github: 'https://github.com/X5851X',
      demo: '#',
      category: 'DevOps'
    },
    {
      title: 'Network Monitoring Dashboard',
      description: 'Built a comprehensive network monitoring solution with real-time metrics, alerting system, and automated incident response using modern observability tools.',
      technologies: ['Prometheus', 'Grafana', 'Python', 'AlertManager'],
      icon: Network,
      color: 'text-green-400',
      github: 'https://github.com/X5851X',
      demo: '#',
      category: 'Network Engineering'
    },
    {
      title: 'Data Visualization Suite',
      description: 'Created interactive dashboards and visualizations for business intelligence, helping teams make data-driven decisions with clear, actionable insights.',
      technologies: ['Tableau', 'Python', 'SQL', 'React'],
      icon: BarChart3,
      color: 'text-purple-400',
      github: '#',
      demo: 'https://public.tableau.com/app/profile/risfandhiani.triara.putri/vizzes',
      category: 'Data Analytics'
    },
    {
      title: 'Automated Deployment Pipeline',
      description: 'Designed and implemented a fully automated CI/CD pipeline with testing, security scanning, and blue-green deployment strategies.',
      technologies: ['GitLab CI/CD', 'Docker', 'Ansible', 'Nginx'],
      icon: Code,
      color: 'text-orange-400',
      github: 'https://github.com/X5851X',
      demo: '#',
      category: 'Automation'
    }
  ];

  const tableauProjects = [
    {
      name: 'Visualisasi Kedua',
      description: 'Advanced data visualization dashboard with interactive elements',
      link: 'https://public.tableau.com/app/profile/risfandhiani.triara.putri/viz/VisualisasiKedua/Dashboard1'
    },
    {
      name: 'Visualisasi Pertama', 
      description: 'Comprehensive data analysis and reporting dashboard',
      link: 'https://public.tableau.com/app/profile/risfandhiani.triara.putri/viz/VisualisasiPertama_17337959530760/Dashboard1'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in DevOps, cloud infrastructure, network engineering, and data visualization
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <project.icon className={`h-6 w-6 ${project.color}`} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo !== '#' && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tableau Visualizations */}
        <div className="animate-fadeInUp">
          <Card className="shadow-card border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>Tableau Visualizations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Interactive data visualizations and dashboards created with Tableau Public
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tableauProjects.map((viz, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border border-border/30 hover:border-primary/50 transition-colors group"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{viz.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{viz.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={viz.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Dashboard
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="hero" size="lg" asChild>
                  <a 
                    href="https://public.tableau.com/app/profile/risfandhiani.triara.putri/vizzes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <BarChart3 className="mr-2" />
                    View All Visualizations
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};