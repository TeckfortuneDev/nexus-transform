import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import servicesIllustration from '@/assets/services-illustration.jpg';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Implement intelligent automation and predictive analytics to transform your business operations.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'accent'
    },
    {
      icon: Cloud,
      title: 'Cloud Transformation',
      description: 'Migrate and optimize your infrastructure for scalability, security, and cost-efficiency.',
      features: ['Multi-Cloud Strategy', 'DevOps Implementation', 'Serverless Architecture', 'Container Orchestration'],
      color: 'gold'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions and risk management.',
      features: ['Security Audits', 'Compliance Management', 'Threat Detection', 'Incident Response'],
      color: 'accent'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive strategic decision-making.',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Advanced Analytics'],
      color: 'gold'
    },
    {
      icon: Smartphone,
      title: 'Digital Experience',
      description: 'Create engaging digital touchpoints that enhance customer experience and drive growth.',
      features: ['Mobile Applications', 'Web Platforms', 'UX/UI Design', 'Customer Journey Mapping'],
      color: 'accent'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline operations and eliminate inefficiencies with intelligent automation solutions.',
      features: ['Workflow Automation', 'RPA Implementation', 'System Integration', 'Performance Optimization'],
      color: 'gold'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Comprehensive Technology
            <span className="text-gradient-accent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to implementation, we deliver end-to-end technology solutions 
            that transform businesses and create lasting competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isAccent = service.color === 'accent';
            
            return (
              <Card 
                key={index} 
                className={`${isAccent ? 'card-accent' : 'card-premium'} group hover-lift cursor-pointer`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isAccent ? 'bg-gradient-accent' : 'bg-gradient-gold'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-foreground">
                          <CheckCircle className={`w-4 h-4 mr-2 ${
                            isAccent ? 'text-accent' : 'text-gold'
                          }`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className={`group p-0 h-auto font-semibold ${
                        isAccent ? 'text-accent hover:text-accent-glow' : 'text-gold hover:text-gold-glow'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${servicesIllustration})` }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our proven methodologies and cutting-edge solutions 
              can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-accent">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;