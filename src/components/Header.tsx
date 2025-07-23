import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Resources', href: '#resources', hasDropdown: true },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-md border-b border-primary/20 shadow-glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* TeckFortune Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative w-12 h-12 bg-gradient-maroon rounded-xl flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                {/* Maroonish Red (80%), Black (10%), White (10%) */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-black-accent to-white-accent opacity-90"></div>
                <span className="relative text-2xl font-bold text-primary-foreground drop-shadow-lg">T</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-gradient-maroon">TeckFortune</h1>
                <p className="text-xs text-muted-foreground">Digital Transformation</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Glass Effect */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button variant="outline" className="btn-glass">
              Login
            </Button>
            <Button className="btn-glass-accent">
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Glass Effect */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-effect border-b border-primary/20 shadow-glass">
            <div className="px-4 py-6 space-y-4 backdrop-blur-md">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full btn-glass">
                  Login
                </Button>
                <Button className="w-full btn-glass-accent">
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;