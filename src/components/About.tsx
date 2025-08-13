import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Target, PenTool, Video, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Creators" },
    { icon: <Clock className="w-6 h-6" />, number: "48", label: "Hour Delivery" },
    { icon: <Target className="w-6 h-6" />, number: "95%", label: "Client Satisfaction" },
    { icon: <Award className="w-6 h-6" />, number: "2+", label: "Years Experience" }
  ];

  const skills = [
    { category: "Copywriting", items: ["Video Scripts", "Sales Copy", "Social Captions", "Ad Copy", "Landing Pages"] },
    { category: "Video Editing", items: ["Short-form Content", "Reels & Shorts", "Transitions", "Text Overlays", "Sound Design"] },
    { category: "Strategy", items: ["Content Planning", "Brand Voice", "Engagement Optimization", "Conversion Focus", "Trend Analysis"] }
  ];

  const values = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Speed Without Compromise",
      description: "48-hour delivery doesn't mean rushed work. I've streamlined my process to deliver high-quality content quickly."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven Approach",
      description: "Every piece of content is created with specific goals in mind - whether it's engagement, conversions, or brand awareness."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Creative Innovation",
      description: "I stay ahead of trends and bring fresh, creative ideas to every project while maintaining proven effectiveness."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-section-title text-foreground mb-6">
              Hi, I'm Jatin Khandagale
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a content creator's secret weapon - combining the art of compelling copywriting 
              with the science of engaging video editing. With over 2 years of experience helping 
              creators scale their online presence, I've discovered that the magic happens when 
              your message and visuals work in perfect harmony.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My unique hybrid approach ensures your content doesn't just look good - it converts. 
              Whether you're an influencer looking to monetize your audience, a coach selling courses, 
              or a business owner building brand awareness, I create content that drives real results 
              in just 48 hours.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="px-3 py-1">Content Strategy</Badge>
              <Badge variant="secondary" className="px-3 py-1">Video Editing</Badge>
              <Badge variant="secondary" className="px-3 py-1">Copywriting</Badge>
              <Badge variant="secondary" className="px-3 py-1">Brand Development</Badge>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-primary transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </Button>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="aspect-square bg-muted rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Professional Photo</p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-background rounded-lg">
                    <div className="flex justify-center text-primary mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Expertise & Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 && <PenTool className="w-6 h-6 text-primary" />}
                    {index === 1 && <Video className="w-6 h-6 text-primary" />}
                    {index === 2 && <Target className="w-6 h-6 text-primary" />}
                    <h4 className="text-lg font-semibold text-card-foreground">{skillGroup.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-12">
            My Approach to Content Creation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            My Mission
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To empower content creators with high-quality, conversion-focused content that saves them time 
            and amplifies their message. I believe every creator deserves professional-grade content without 
            the traditional agency wait times or prices. That's why I've built a streamlined process that 
            delivers exceptional results in just 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;