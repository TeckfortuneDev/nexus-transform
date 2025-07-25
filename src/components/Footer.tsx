import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail,
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '#' },
        { name: 'Cloud Transformation', href: '#' },
        { name: 'Cybersecurity', href: '#' },
        { name: 'Data Analytics', href: '#' },
        { name: 'Digital Experience', href: '#' },
        { name: 'Process Automation', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '#' },
        { name: 'Industry Specific', href: '#' },
        { name: 'Technology Assessments', href: '#' },
        { name: 'Digital Strategy', href: '#' },
        { name: 'Innovation Labs', href: '#' },
        { name: 'Managed Services', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#' },
        { name: 'White Papers', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'News & Press', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Support', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Stay Ahead of Technology Trends
            </h3>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get insights on emerging technologies, industry best practices, and 
              exclusive content delivered to your inbox monthly.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-effect border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="btn-glass-accent">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60 mt-4">
              Join 10,000+ technology leaders who trust our insights.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* TeckFortune Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 bg-gradient-maroon rounded-xl flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-black-accent to-white-accent opacity-90"></div>
                  <span className="relative text-2xl font-bold text-primary-foreground drop-shadow-lg">T</span>
                </div>
                <div>
                  <h1 className="text-xl font-poppins font-bold">TeckFortune</h1>
                  <p className="text-sm text-primary-foreground/60">Digital Transformation</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Leading technology consulting firm specializing in digital transformation, 
                AI implementation, and enterprise technology solutions for Fortune 500 companies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                <span className="text-sm">8875 Hidden River Parkway, Suite # 300, Tampa, FL 33637</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <span className="text-sm">hello@teckfortune.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-accent/20">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-accent/20">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-accent/20">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-poppins font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar with Glass Effect */}
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 glass-effect">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-primary-foreground/60">
              <p>&copy; 2024 TeckFortune. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-primary-foreground/60">
              <span>Certified Partners:</span>
              <div className="flex space-x-3">
                <span className="px-2 py-1 bg-primary-foreground/10 rounded text-xs">AWS</span>
                <span className="px-2 py-1 bg-primary-foreground/10 rounded text-xs">Azure</span>
                <span className="px-2 py-1 bg-primary-foreground/10 rounded text-xs">GCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;