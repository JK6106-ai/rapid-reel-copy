import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, Video, Zap, Clock, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Copywriting for Creators",
      price: "₹999",
      description: "Convert viewers into engaged followers with compelling copy that speaks your brand voice.",
      features: [
        "Video scripts for Reels/Shorts",
        "Social media captions & hooks",
        "Sales page copy",
        "Ad copy optimization",
        "Landing page content",
        "Blog post outlines"
      ],
      highlight: false
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Reels/Shorts Video Editing",
      price: "₹999", 
      description: "Transform raw footage into scroll-stopping short-form content that drives engagement.",
      features: [
        "Fast-paced cuts & transitions",
        "Trendy visual effects",
        "Text overlays & graphics",
        "Sound design & music sync",
        "Optimized for 9:16 format",
        "Platform-specific optimization"
      ],
      highlight: false
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Hybrid Package",
      price: "₹1,499",
      originalPrice: "₹1,998",
      description: "The ultimate content solution - seamless integration of copy and video for maximum impact.",
      features: [
        "Complete copy + video package",
        "Consistent brand messaging",
        "Script-to-screen optimization",
        "48-hour delivery guarantee",
        "Unlimited revisions (1 round)",
        "Priority support"
      ],
      highlight: true
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "48-Hour Delivery",
      description: "Fast turnaround without compromising quality"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Conversion Focused",
      description: "Every piece of content designed to drive results"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Engagement Optimized",
      description: "Proven strategies to boost your content performance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Accelerate Your Content Creation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop juggling multiple freelancers. Get professional copywriting and video editing 
            from one source, delivered in just 48 hours with perfect brand consistency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-card ${
                service.highlight 
                  ? 'border-2 border-primary bg-gradient-card shadow-primary' 
                  : 'bg-card hover:shadow-lg'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-card-title text-card-foreground mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {service.originalPrice}
                    </span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold transition-all duration-300 ${
                    service.highlight
                      ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary hover:scale-105'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Choose This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
            Why Choose Our Hybrid Approach?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Simple 3-Step Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Submit Brief</h4>
              <p className="text-muted-foreground">Share your content goals, brand voice, and raw materials</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">We Create</h4>
              <p className="text-muted-foreground">Our team crafts your copy and edits your videos within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">You Publish</h4>
              <p className="text-muted-foreground">Receive polished content ready to upload and engage your audience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;