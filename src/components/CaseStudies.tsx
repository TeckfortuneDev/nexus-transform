import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Global Banking Digital Transformation',
      client: 'Fortune 100 Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy systems hindering customer experience and operational efficiency',
      solution: 'Cloud-native architecture with AI-powered customer insights',
      results: [
        { icon: TrendingUp, value: '300%', label: 'Customer Satisfaction Increase' },
        { icon: DollarSign, value: '$50M', label: 'Annual Cost Savings' },
        { icon: Clock, value: '75%', label: 'Faster Transaction Processing' }
      ],
      technologies: ['AWS', 'Kubernetes', 'TensorFlow', 'React'],
      duration: '18 months',
      teamSize: '45 experts',
      image: 'bg-gradient-to-br from-accent/20 to-accent/5'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Leading Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain causing delays and increased costs',
      solution: 'Machine learning algorithms for predictive analytics and automation',
      results: [
        { icon: Clock, value: '40%', label: 'Delivery Time Reduction' },
        { icon: DollarSign, value: '$25M', label: 'Inventory Cost Savings' },
        { icon: TrendingUp, value: '99.2%', label: 'Demand Forecast Accuracy' }
      ],
      technologies: ['Python', 'Apache Kafka', 'MongoDB', 'Tableau'],
      duration: '12 months',
      teamSize: '28 experts',
      image: 'bg-gradient-to-br from-gold/20 to-gold/5'
    },
    {
      title: 'Healthcare Data Platform Modernization',
      client: 'Multi-Hospital Health System',
      industry: 'Healthcare',
      challenge: 'Fragmented data systems limiting patient care coordination',
      solution: 'Unified data platform with real-time analytics and HIPAA compliance',
      results: [
        { icon: Users, value: '2M+', label: 'Patients Served' },
        { icon: Clock, value: '60%', label: 'Faster Diagnosis' },
        { icon: TrendingUp, value: '95%', label: 'Data Accuracy Improvement' }
      ],
      technologies: ['Azure', 'PostgreSQL', 'Power BI', 'FHIR'],
      duration: '24 months',
      teamSize: '35 experts',
      image: 'bg-gradient-to-br from-accent/20 to-accent/5'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold font-medium text-sm mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Proven Results Across
            <span className="text-gradient-gold"> Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped leading organizations achieve transformational 
            outcomes through strategic technology implementations.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="card-premium overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Content */}
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {caseStudy.industry}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {caseStudy.teamSize}
                      </div>
                    </div>
                    <h3 className="text-3xl font-poppins font-bold text-primary mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {caseStudy.client}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-accent/20 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button className="btn-primary">
                      Full Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="btn-outline">
                      Similar Projects
                    </Button>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-8">
                  {/* Visual Element */}
                  <div className={`${caseStudy.image} rounded-2xl h-48 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {caseStudy.results[0].value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Key Improvement
                      </div>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-primary text-xl">Business Impact</h4>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, resultIndex) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={resultIndex} className="flex items-center gap-4 p-4 bg-gradient-card rounded-xl">
                            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                {result.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {result.label}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their business 
              with our proven methodology and expert guidance.
            </p>
            <Button className="btn-accent">
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;