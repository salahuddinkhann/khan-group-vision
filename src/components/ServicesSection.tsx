
import { Card, CardContent } from "@/components/ui/card";
import { FileImage, GalleryVertical, ImageIcon, FileVideo } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Small Loans",
      description: "Accessible financing options designed to help small businesses and entrepreneurs get started and grow.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Coming Soon"
    },
    {
      title: "Investment Services",
      description: "Strategic investment guidance to help clients build wealth and secure their financial future.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Coming Soon"
    },
    {
      title: "Financial Consulting",
      description: "Expert advice on financial planning, budgeting, and wealth management strategies.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1565514913079-4edcaa0cfd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Coming Soon"
    },
    {
      title: "Business Collaboration",
      description: "Partnership opportunities for innovative businesses looking to expand their reach and impact.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Open for Discussion"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted to-khan-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Future <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Khan Finance will offer comprehensive financial solutions tailored to meet diverse needs.
          </p>
          <div className="w-20 h-1 bg-khan-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-khan-dark hover:bg-muted border border-khan-blue/20 transition-all duration-300 overflow-hidden"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-khan-dark via-khan-dark/80 to-transparent"></div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-khan-blue/20 text-khan-gold px-3 py-1 rounded-full text-xs">
                    {service.status}
                  </span>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-khan-blue/20 rounded-lg flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/70 mb-3">{service.description}</p>
                <div className="flex justify-end items-center text-khan-gold/80 text-sm gap-2">
                  {index % 4 === 0 && <FileImage size={16} />}
                  {index % 4 === 1 && <GalleryVertical size={16} />}
                  {index % 4 === 2 && <ImageIcon size={16} />}
                  {index % 4 === 3 && <FileVideo size={16} />}
                  <span>Learn more about this service</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-muted p-8 rounded-lg border border-khan-blue/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I'm always looking for innovative partnerships and business opportunities. Let's create something remarkable together.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-block"
            >
              Discuss Possibilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
