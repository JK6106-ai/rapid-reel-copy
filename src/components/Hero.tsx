import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-hero font-tight font-bold text-primary mb-8 animate-slide-up leading-tight">
            Copy + Reels: Your Content{" "}
            <span className="text-gradient">Accelerator</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-tight animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Elite copywriting & video editing for content creators. 
            48-hour delivery guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 group font-tight"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Content in 48 Hours
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-tight"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;