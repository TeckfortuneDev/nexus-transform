import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Globe, 
  Zap,
  LinkedinIcon,
  TwitterIcon,
  ArrowRight
} from 'lucide-react';
import teamCollaboration from '@/assets/team-collaboration.jpg';

const About = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: Award },
    { value: '150+', label: 'Expert Consultants', icon: Users },
    { value: '25+', label: 'Countries Served', icon: Globe },
    { value: '99%', label: 'Client Retention', icon: Zap }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      specialization: 'AI & Machine Learning',
      experience: '15+ years',
      bio: 'Former Microsoft AI researcher with expertise in enterprise ML implementations.',
      achievements: ['PhD Computer Science', 'Published 50+ Papers', 'AI Ethics Board Member'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Cloud Architecture Lead',
      specialization: 'Enterprise Cloud Solutions',
      experience: '12+ years',
      bio: 'Ex-AWS Solutions Architect specializing in large-scale cloud transformations.',
      achievements: ['AWS Certified Expert', 'Cloud Migration Specialist', 'DevOps Pioneer'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Data Science Director',
      specialization: 'Advanced Analytics',
      experience: '14+ years',
      bio: 'Leading data scientist with deep expertise in predictive modeling and business intelligence.',
      achievements: ['Data Science PhD', 'Fortune 500 Advisor', 'Analytics Innovation Award'],
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const certifications = [
    'AWS Advanced Consulting Partner',
    'Microsoft Gold Partner',
    'Google Cloud Premier Partner',
    'Salesforce Platinum Partner',
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            About TechConsult
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Leading Technology
            <span className="text-gradient-accent"> Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over a decade, we've been at the forefront of digital transformation, 
            helping organizations navigate the complex technology landscape with confidence.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-poppins font-bold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                We believe technology should empower businesses, not complicate them. 
                Our mission is to bridge the gap between cutting-edge innovation and 
                practical business solutions that deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground">
                Since 2015, we've partnered with organizations across industries to 
                implement transformative technology solutions that drive growth, 
                improve efficiency, and create competitive advantages.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">Our Approach</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strategic consulting before technology implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Agile methodologies with continuous client collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Focus on measurable business outcomes and ROI</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Long-term partnership and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={teamCollaboration} 
                alt="TechConsult team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="card-premium text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
              Leadership Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experts leading our technology consulting practice and 
              driving innovation across all client engagements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-premium text-center group hover-lift">
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-primary mb-1">
                      {member.name}
                    </h4>
                    <p className="text-accent font-semibold mb-2">
                      {member.role}
                    </p>
                    <Badge variant="secondary" className="bg-gold/10 text-gold mb-4">
                      {member.specialization}
                    </Badge>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-xs text-muted-foreground flex items-center">
                        <Award className="w-3 h-3 mr-2 text-gold" />
                        {achievement}
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <TwitterIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-8">
            Certifications & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-card-border rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-primary text-sm">{cert}</p>
              </div>
            ))}
          </div>

          <Button className="btn-primary">
            Join Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;