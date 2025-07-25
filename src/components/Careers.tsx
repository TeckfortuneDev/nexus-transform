import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Code,
  Brain,
  Shield,
  ArrowRight,
  Star,
  Globe,
  Award,
  Mail,
  GraduationCap,
  DollarSign
} from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Software Developer',
      department: 'Technology',
      location: 'Tampa, FL 33637',
      type: 'Full-time',
      experience: '12 months',
      icon: Code,
      description: 'Develop software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes. Plan and execute a full software development lifecycle for each assigned project, adhering to company standards and expectations. Document and demonstrate solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. Work closely with clients and cross functional departments to communicate project statuses and proposals. Occasional travel to unanticipated client-site locations within USA may be required as a roving employee.',
      requirements: ['Master\'s Degree or foreign equivalent in IT or CS or CIS or ENGG', '12 months of related work experience'],
      salary: '$116,771.00 per Annum',
      education: 'Master\'s Degree or foreign equivalent in IT or CS or CIS or ENGG. along with 12 months of related work experience',
      schedule: '9:00 am – 6:00 pm, Monday – Friday',
      contact: 'Director Hari Priya Vallabahneni',
      address: '8875 Hidden River Parkway, Suite # 300, Tampa, FL 33637',
      color: 'accent',
      featured: true
    },
    {
      title: 'Senior AI/ML Engineer',
      department: 'Technology',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain,
      description: 'Lead AI initiatives and build cutting-edge machine learning solutions for enterprise clients.',
      requirements: ['PhD/MS in CS or related field', 'Python, TensorFlow, PyTorch', 'Cloud platforms (AWS/Azure)', 'MLOps experience'],
      salary: '$180k - $250k',
      color: 'accent'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '7+ years',
      icon: Globe,
      description: 'Design and implement scalable cloud architectures for Fortune 500 digital transformations.',
      requirements: ['AWS/Azure/GCP certifications', 'Kubernetes, Docker', 'Infrastructure as Code', 'Enterprise architecture'],
      salary: '$160k - $220k',
      color: 'gold'
    },
    {
      title: 'Cybersecurity Consultant',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      icon: Shield,
      description: 'Provide security consulting and implement enterprise-grade security solutions.',
      requirements: ['CISSP/CISM certification', 'Penetration testing', 'Risk assessment', 'Compliance frameworks'],
      salary: '$140k - $190k',
      color: 'accent'
    },
    {
      title: 'Full-Stack Developer',
      department: 'Development',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      icon: Code,
      description: 'Build modern web applications and digital solutions using latest technologies.',
      requirements: ['React, Node.js, TypeScript', 'Cloud deployment', 'Database design', 'Agile methodologies'],
      salary: '$120k - $160k',
      color: 'gold'
    },
    {
      title: 'Business Technology Analyst',
      department: 'Strategy',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '2+ years',
      icon: TrendingUp,
      description: 'Bridge business and technology to drive digital transformation strategies.',
      requirements: ['Business analysis', 'Process optimization', 'Stakeholder management', 'Technical documentation'],
      salary: '$90k - $130k',
      color: 'accent'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      icon: Award,
      description: 'Automate deployments and manage CI/CD pipelines for enterprise applications.',
      requirements: ['Jenkins, GitLab CI', 'AWS/Azure DevOps', 'Terraform, Ansible', 'Monitoring tools'],
      salary: '$130k - $170k',
      color: 'gold'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear advancement paths'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with industry experts and innovative thought leaders'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Hybrid work options and global team collaboration'
    },
    {
      icon: Award,
      title: 'Competitive Packages',
      description: 'Top-tier compensation, equity, and comprehensive benefits'
    }
  ];

  return (
    <section id="careers" className="py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-primary/30 rounded-full text-primary font-medium text-sm mb-6 hover-glass">
            <Briefcase className="w-4 h-4 mr-2" />
            Join Our Team
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Shape the Future of
            <span className="text-gradient-accent"> Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a team of world-class consultants and engineers building tomorrow's 
            technology solutions for the world's most innovative companies.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="card-glass p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-8 text-center">
            Current Openings
          </h3>
          <div className="grid gap-6">
            {openings.map((job, index) => {
              const IconComponent = job.icon;
              const isAccent = job.color === 'accent';
              
              return (
                <Card 
                  key={index} 
                  className={`${isAccent ? 'card-accent' : 'card-maroon'} hover-lift group cursor-pointer`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0">
                    {/* Left Side - Job Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isAccent ? 'bg-gradient-accent' : 'bg-gradient-gold'
                        }`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="text-2xl font-poppins font-bold text-primary">{job.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {job.type}
                            </Badge>
                            {job.featured && (
                              <Badge className="text-xs bg-gradient-accent text-white">
                                NOW HIRING
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.experience}
                            </div>
                            <div className={`flex items-center font-semibold ${
                              isAccent ? 'text-accent' : 'text-gold'
                            }`}>
                              <Star className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          
                          <p className="text-foreground mb-4">{job.description}</p>
                          
                          {/* Additional Details for Featured Job */}
                          {job.education && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium text-foreground">Education:</span>
                              </div>
                              <p className="text-sm text-muted-foreground ml-6">{job.education}</p>
                            </div>
                          )}
                          
                          {job.schedule && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium text-foreground">Schedule:</span>
                              </div>
                              <p className="text-sm text-muted-foreground ml-6">{job.schedule}</p>
                            </div>
                          )}
                          
                          {job.contact && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium text-foreground">Contact:</span>
                              </div>
                              <p className="text-sm text-muted-foreground ml-6">{job.contact}</p>
                              {job.address && (
                                <p className="text-sm text-muted-foreground ml-6">{job.address}</p>
                              )}
                            </div>
                          )}
                          
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.slice(0, 3).map((req, reqIndex) => (
                              <Badge 
                                key={reqIndex} 
                                variant="outline" 
                                className={`text-xs border-current ${
                                  isAccent ? 'text-accent border-accent/30' : 'text-gold border-gold/30'
                                }`}
                              >
                                {req}
                              </Badge>
                            ))}
                            {job.requirements.length > 3 && (
                              <Badge variant="outline" className="text-xs text-muted-foreground">
                                +{job.requirements.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Apply Button */}
                    <div className="lg:ml-6">
                      <Button 
                        className={`${isAccent ? 'btn-glass-accent' : 'btn-glass-gold'} group px-8 py-3 hover-glow`}
                      >
                        {job.featured ? 'Apply via Email' : 'Apply Now'}
                        {job.featured ? (
                          <Mail className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        ) : (
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Don't See Your Perfect Role?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glass-accent hover-glow">
                <Users className="mr-2 h-5 w-5" />
                Submit General Application
              </Button>
              <Button className="btn-glass hover-glass">
                <Globe className="mr-2 h-5 w-5" />
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;