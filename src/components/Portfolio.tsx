import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, FileText, ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      type: "video",
      title: "E-commerce Product Reel",
      description: "High-converting product showcase reel that generated 150K+ views and 15% increase in sales",
      category: "Product Marketing",
      metrics: "150K+ Views, 15% Sales Increase",
      thumbnail: "/placeholder.svg",
      tags: ["E-commerce", "Product Demo", "Sales"]
    },
    {
      type: "copy",
      title: "SaaS Landing Page Copy",
      description: "Complete landing page copy that improved conversion rate by 40% for a productivity app",
      category: "SaaS Marketing",
      metrics: "40% Conversion Increase",
      content: "Transform Your Productivity Game\n\nTired of juggling endless to-do lists? Meet the app that turns chaos into clarity...",
      tags: ["SaaS", "Landing Page", "Conversion"]
    },
    {
      type: "video",
      title: "Educational Content Series",
      description: "5-part educational reel series that boosted follower engagement by 200%",
      category: "Education",
      metrics: "200% Engagement Boost",
      thumbnail: "/placeholder.svg",
      tags: ["Education", "Tutorial", "Engagement"]
    },
    {
      type: "hybrid",
      title: "Coach's Personal Brand Package",
      description: "Complete content package: sales scripts + promo reels for a life coach's course launch",
      category: "Personal Branding",
      metrics: "5x Course Sign-ups",
      thumbnail: "/placeholder.svg",
      tags: ["Coaching", "Personal Brand", "Course Launch"]
    },
    {
      type: "copy",
      title: "Social Media Caption Series",
      description: "30-day caption collection that increased average post engagement by 85%",
      category: "Social Media",
      metrics: "85% Engagement Increase",
      content: "Your biggest competitor isn't who you think it is...\n\nIt's the voice in your head that says 'tomorrow'...",
      tags: ["Social Media", "Captions", "Engagement"]
    },
    {
      type: "video",
      title: "Restaurant Promo Reels",
      description: "Mouth-watering food reels that drove 300% increase in reservation bookings",
      category: "Food & Beverage",
      metrics: "300% Booking Increase",
      thumbnail: "/placeholder.svg",
      tags: ["Restaurant", "Food", "Local Business"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fitness Influencer",
      content: "Jatin transformed my content game! The hybrid approach gave me cohesive, high-converting content that boosted my engagement by 200%. The 48-hour delivery is unmatched!",
      result: "200% engagement increase"
    },
    {
      name: "Mike Rodriguez",
      role: "E-commerce Store Owner",
      content: "The product reels Jatin created drove more sales in one month than our previous six months combined. The copy perfectly captured our brand voice.",
      result: "6x monthly sales"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Educational Content Creator",
      content: "Finally, someone who understands both the writing and visual aspects of content. My course enrollment doubled after implementing Jatin's hybrid content strategy.",
      result: "2x course enrollment"
    }
  ];

  const FilterButton = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`transition-all duration-300 ${
        active 
          ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary" 
          : "border-border hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </Button>
  );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Proven Results Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how our hybrid approach delivers measurable results for content creators across industries. 
            Every project combines strategic copywriting with engaging video editing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton active={true} onClick={() => {}}>All Projects</FilterButton>
          <FilterButton active={false} onClick={() => {}}>Video Editing</FilterButton>
          <FilterButton active={false} onClick={() => {}}>Copywriting</FilterButton>
          <FilterButton active={false} onClick={() => {}}>Hybrid Packages</FilterButton>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-card hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {item.type === "video" && <Play className="w-4 h-4 text-primary" />}
                    {item.type === "copy" && <FileText className="w-4 h-4 text-primary" />}
                    {item.type === "hybrid" && <TrendingUp className="w-4 h-4 text-primary" />}
                  </div>
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Thumbnail for video content */}
                {(item.type === "video" || item.type === "hybrid") && (
                  <div className="relative mb-4 bg-muted rounded-lg aspect-video flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <Play className="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      0:15
                    </span>
                  </div>
                )}

                {/* Copy preview */}
                {item.type === "copy" && item.content && (
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      "{item.content.substring(0, 100)}..."
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-primary">
                    {item.metrics}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    View Details <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            What Creators Say About Our Work
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-none shadow-card">
                <CardContent className="p-6">
                  <p className="text-card-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                    <div className="text-sm font-semibold text-primary">{testimonial.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to See Similar Results for Your Brand?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's create content that converts and engages your audience.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold px-8 py-4 rounded-lg shadow-primary transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;