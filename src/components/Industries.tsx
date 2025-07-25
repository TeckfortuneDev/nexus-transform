import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Banknote, 
  ShoppingCart, 
  Settings2, 
  Cpu, 
  Shield,
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Healthcare & Life Sciences',
      description: 'Digital transformation for patient care, regulatory compliance, and operational efficiency.',
      metrics: ['50% faster diagnosis', '30% cost reduction', 'HIPAA compliant'],
      projects: 125,
      color: 'accent'
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description: 'Secure fintech solutions, compliance automation, and customer experience enhancement.',
      metrics: ['99.9% uptime', '40% faster processing', 'SOX compliant'],
      projects: 89,
      color: 'gold'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Omnichannel experiences, inventory optimization, and personalized customer journeys.',
      metrics: ['65% revenue increase', '45% customer retention', '24/7 availability'],
      projects: 156,
      color: 'accent'
    },
    {
      icon: Settings2,
      title: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and smart factory automation solutions.',
      metrics: ['35% efficiency gain', '60% downtime reduction', 'Real-time monitoring'],
      projects: 78,
      color: 'gold'
    },
    {
      icon: Cpu,
      title: 'Technology & Software',
      description: 'Platform modernization, cloud-native architecture, and development acceleration.',
      metrics: ['3x faster deployment', '50% cost savings', 'Auto-scaling'],
      projects: 203,
      color: 'accent'
    },
    {
      icon: Shield,
      title: 'Government & Public',
      description: 'Citizen services digitization, security enhancement, and transparent governance.',
      metrics: ['80% user satisfaction', 'Enhanced security', 'FedRAMP certified'],
      projects: 42,
      color: 'gold'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-primary/30 rounded-full text-primary font-medium text-sm mb-6 hover-glass">
            <Building2 className="w-4 h-4 mr-2" />
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Transforming Industries
            <span className="text-gradient-gold"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep industry knowledge combined with cutting-edge technology expertise 
            to deliver solutions that drive real business outcomes across sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isAccent = industry.color === 'accent';
            
            return (
              <Card 
                key={index} 
                className={`${isAccent ? 'card-accent hover-glow' : 'card-maroon hover-lift'} group cursor-pointer glass-hover`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      isAccent ? 'bg-gradient-accent' : 'bg-gradient-gold'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${isAccent ? 'text-accent' : 'text-gold'}`}>
                        {industry.projects}+
                      </div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {industry.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 mb-6">
                      {industry.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm">
                          <TrendingUp className={`w-4 h-4 mr-2 ${
                            isAccent ? 'text-accent' : 'text-gold'
                          }`} />
                          <span className="text-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className={`group p-0 h-auto font-semibold ${
                        isAccent ? 'text-accent hover:text-accent-glow' : 'text-gold hover:text-gold-glow'
                      }`}
                    >
                      View Case Studies
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
              Trusted Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">693+</div>
                <div className="text-sm opacity-80">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">6</div>
                <div className="text-sm opacity-80">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="btn-glass-accent hover-glow">
                <Users className="mr-2 h-5 w-5" />
                Discuss Your Industry Needs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;