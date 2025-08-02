import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  const services = [
    "Copywriting for Creators",
    "Reels/Shorts Video Editing", 
    "Hybrid Content Packages",
    "Brand Voice Development",
    "Conversion Optimization"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              Jatin
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Transforming content creators with professional copywriting and video editing. 
              Your brand, accelerated in just 48 hours.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:jatinkhandagale6106@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  jatinkhandagale6106@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+919324400296"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +91 9324400296
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Response within 4 hours</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ready to Start?</h3>
            <p className="text-secondary-foreground/80 text-sm mb-6">
              Get professional content that converts in just 48 hours. Join 100+ successful creators.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline"
                className="w-full border-primary/50 text-secondary-foreground hover:bg-primary/10 hover:border-primary rounded-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/60">
              © 2024 Jatin Khandagale. All rights reserved. • Professional Content Services • 48-Hour Delivery
            </div>
            
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10 p-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;