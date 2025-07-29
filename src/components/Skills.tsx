import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Server, 
  Network, 
  Code, 
  Database, 
  Monitor,
  GitBranch,
  Shield,
  Cpu,
  BarChart3
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-blue-400',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI/CD', 'Ansible', 'Prometheus']
    },
    {
      title: 'Network Engineering',
      icon: Network,
      color: 'text-green-400',
      skills: ['Cisco', 'Juniper', 'OSPF', 'BGP', 'VPN', 'Firewall Config', 'Network Automation', 'SDN']
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'text-purple-400',
      skills: ['Python', 'JavaScript', 'Go', 'Shell Scripting', 'PowerShell', 'TypeScript', 'Node.js', 'React']
    },
    {
      title: 'Infrastructure',
      icon: Server,
      color: 'text-orange-400',
      skills: ['Linux', 'Windows Server', 'VMware', 'Hyper-V', 'Load Balancing', 'High Availability', 'Backup Solutions']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-cyan-400',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ElasticSearch', 'Database Optimization', 'Backup & Recovery']
    },
    {
      title: 'Monitoring & Security',
      icon: Monitor,
      color: 'text-red-400',
      skills: ['Grafana', 'ELK Stack', 'Nagios', 'Security Scanning', 'Vulnerability Assessment', 'SIEM']
    }
  ];

  const certifications = [
    'Associate Cloud Engineer',
    'Alibaba Cloud Certified Associate'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps, cloud infrastructure, and network engineering
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs py-1 px-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Additional Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="shadow-card border border-border/50 animate-slideInLeft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="shadow-card border border-border/50 animate-slideInRight">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <span>Tools & Platforms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Version Control</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">GitHub</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Collaboration</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Jira</Badge>
                    <Badge variant="outline">Slack</Badge>
                    <Badge variant="outline">Teams</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Data Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Tableau</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};