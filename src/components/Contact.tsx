import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Tech Avenue, Suite 500',
      phone: '+1 (555) 123-4567',
      email: 'ny@techconsult.com',
      timezone: 'EST'
    },
    {
      city: 'San Francisco',
      address: '456 Innovation Drive, Floor 15',
      phone: '+1 (555) 987-6543',
      email: 'sf@techconsult.com',
      timezone: 'PST'
    },
    {
      city: 'London',
      address: '789 Digital Square, Level 8',
      phone: '+44 20 7123 4567',
      email: 'london@techconsult.com',
      timezone: 'GMT'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud Transformation',
    'Cybersecurity',
    'Data Analytics',
    'Digital Experience',
    'Process Automation'
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TeckFortune Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-accent/30 rounded-full text-accent font-medium text-sm mb-6 hover-glass">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-6">
            Start Your
            <span className="text-gradient-accent"> Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your challenges and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-glass">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Company Name *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, challenges, and goals..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Submit with Glass Effect */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-glass-accent flex-1 hover-glow">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                    <Button type="button" className="btn-glass hover-glass">
                      <Calendar className="mr-2 w-4 h-4" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-accent">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-poppins font-bold text-primary mb-4">
                    Quick Contact
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Call Us</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email Us</p>
                      <p className="text-sm text-muted-foreground">hello@techconsult.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-glass-gold hover-glow">
                  <CheckCircle className="mr-2 w-4 h-4" />
                  Start Live Chat
                </Button>
              </div>
            </Card>

            {/* Office Locations */}
            <Card className="card-premium">
              <div className="space-y-6">
                <h3 className="text-xl font-poppins font-bold text-primary">
                  Office Locations
                </h3>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary">{office.city}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <p>📞 {office.phone}</p>
                            <p>✉️ {office.email}</p>
                            <p>🕒 {office.timezone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="card-premium">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-2" />
                  <h3 className="text-lg font-poppins font-bold text-primary">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-primary font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-primary font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-primary font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-accent font-medium">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;