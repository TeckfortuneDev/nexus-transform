import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* TeckFortune Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-accent/30 rounded-full text-accent font-medium text-sm animate-fadeInUp hover-glass">
            <TrendingUp className="w-4 h-4 mr-2" />
            Leading Digital Transformation Since 2015
          </div>

          {/* TeckFortune Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-primary-foreground leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Transform Your
            <span className="text-gradient-accent"> Business </span>
            with
            <span className="text-gradient-gold"> Smart Technology</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            We help Fortune 500 companies and growing enterprises implement cutting-edge technology solutions 
            that drive measurable business outcomes and sustainable competitive advantages.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">$2.5B+</div>
              <div className="text-sm opacity-80">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>

          {/* Glass CTA Button */}
          <div className="flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Button className="btn-glass-accent group px-8 py-4 text-lg hover-glow">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* TeckFortune Trust Indicators */}
          <div className="pt-12 animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <p className="text-primary-foreground/60 text-sm mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Fortune 500', 'Tech Giants', 'Healthcare Leaders', 'Financial Services', 'Manufacturing'].map((company, index) => (
                <div key={index} className="px-6 py-3 glass-effect rounded-lg text-primary-foreground/80 font-medium hover-glass transition-all duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-8 text-primary-foreground/40">
          <div className="flex flex-col items-center group hover:text-accent transition-colors">
            <Shield className="w-8 h-8 mb-2" />
            <span className="text-xs">Secure</span>
          </div>
          <div className="flex flex-col items-center group hover:text-gold transition-colors">
            <Zap className="w-8 h-8 mb-2" />
            <span className="text-xs">Fast</span>
          </div>
          <div className="flex flex-col items-center group hover:text-accent transition-colors">
            <TrendingUp className="w-8 h-8 mb-2" />
            <span className="text-xs">Scalable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;