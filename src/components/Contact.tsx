import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Clock, Send, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    projectDetails: "",
    timeline: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `New Project Inquiry - ${formData.service}`;
    const body = `
Hello Jatin,

I'm interested in your content services. Here are my project details:

Name: ${formData.name}
Email: ${formData.email}
Service Needed: ${formData.service}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Details:
${formData.projectDetails}

I look forward to hearing from you!

Best regards,
${formData.name}
    `.trim();

    const mailtoLink = `mailto:jatinkhandagale6106@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Form Submitted!",
      description: "Your email client will open with your inquiry. Thank you for reaching out!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "",
      projectDetails: "",
      timeline: "",
      budget: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "jatinkhandagale6106@gmail.com",
      link: "mailto:jatinkhandagale6106@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: "Phone",
      value: "+91 9324400296",
      link: "tel:+919324400296"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: "Response Time",
      value: "Within 4 hours",
      link: null
    }
  ];

  const faqs = [
    {
      question: "How does the 48-hour delivery work?",
      answer: "Once you submit your project brief and materials, I begin work immediately. Most projects are completed within 24-48 hours, depending on complexity."
    },
    {
      question: "What if I need revisions?",
      answer: "Each package includes one round of revisions to ensure you're completely satisfied with the final result."
    },
    {
      question: "Do you work with all types of content creators?",
      answer: "Yes! I work with influencers, coaches, e-commerce brands, educational content creators, and any business creating short-form content."
    },
    {
      question: "Can I see samples before starting?",
      answer: "Absolutely! Check out my portfolio section or contact me for industry-specific samples relevant to your niche."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Get Your 48-Hour Content Boost!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your content strategy? Let's discuss your project and get started on 
            creating content that converts. I typically respond within 4 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="Copywriting Only (₹1,299)">Copywriting Only (₹1,299)</option>
                      <option value="Video Editing Only (₹1,299)">Video Editing Only (₹1,299)</option>
                      <option value="Hybrid Package (₹1,999)">Hybrid Package (₹1,999) - Most Popular</option>
                      <option value="Premium Package (₹2,499)">Premium Package (₹2,499)</option>
                      <option value="Custom Quote">Custom Quote Needed</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="timeline">When do you need this?</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                      <option value="">Select timeline</option>
                      <option value="Standard (48 hours)">Standard (48 hours)</option>
                        <option value="Next Week">Next Week</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget</option>
                        <option value="₹1,299 - Single Service">₹1,299 - Single Service</option>
                        <option value="₹1,999 - Hybrid Package">₹1,999 - Hybrid Package</option>
                        <option value="₹2,499 - Premium Package">₹2,499 - Premium Package</option>
                        <option value="₹5,000+">₹5,000+ (Multiple Projects)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project:
• What type of content do you create?
• What's your target audience?
• What are your main goals?
• Any specific requirements or brand guidelines?
• Do you have existing materials (footage, brand assets, etc.)?"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-3 rounded-lg shadow-primary transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Project Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-accent rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-semibold text-card-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-card-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => window.open('tel:+919324400296')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=jatinkhandagale6106@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  View Packages
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Content Strategy?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 50+ successful creators who've accelerated their growth with our hybrid content approach. 
            Your next viral content is just 48 hours away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold px-8 py-3 rounded-lg shadow-primary transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View More Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;