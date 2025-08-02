import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzQ2NDY0NiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">48-Hour Delivery Promise</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero text-foreground mb-6 animate-slide-up">
            Copy + Reels: Your Content,{" "}
            <span className="text-gradient">Accelerated</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elite copywriting & short-form video editing for content creators. 
            Boost engagement, save time, and maintain brand consistency with our unique hybrid approach.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold">48-Hour Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold">100+ Happy Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold">Conversion Focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold px-8 py-4 rounded-lg shadow-primary transition-all duration-300 hover:scale-105 animate-pulse-glow group"
            >
              Get Your Content in 48 Hours
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>

          {/* Pricing Highlight */}
          <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Launch Offer - Limited Time</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-semibold">
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Copywriting</span>
                  <span className="text-foreground">₹999</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Video Editing</span>
                  <span className="text-foreground">₹999</span>
                </div>
                <div className="flex flex-col bg-primary/10 px-4 py-2 rounded-lg border-2 border-primary">
                  <span className="text-primary text-sm font-bold">Hybrid Package</span>
                  <span className="text-primary text-xl font-bold">₹1,499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;