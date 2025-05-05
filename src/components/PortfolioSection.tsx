
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GalleryHorizontal, ImageIcon, ArrowRight } from "lucide-react";
import { useState } from "react";

const PortfolioSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const portfolioItems = [
    {
      title: "Khan Group",
      category: "Business Empire",
      description: "The umbrella organization for all business ventures, creating value across multiple industries.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      link: "#"
    },
    {
      title: "Clothing Brand",
      category: "Fashion",
      description: "Premium T-shirt & hoodie line offering stylish, comfortable attire with unique designs.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "In Development",
      link: "#"
    },
    {
      title: "TikTok Content",
      category: "Digital Media",
      description: "Short-form videos focusing on motivational messages, respect, and emotional storytelling.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-khan-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            My <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my diverse ventures and projects spanning business, fashion, and digital content creation.
          </p>
          <div className="w-20 h-1 bg-khan-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-muted hover:bg-khan-dark hover:border border-khan-blue/30 transition-all duration-300 group overflow-hidden h-full"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredItem === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "Active" 
                        ? "bg-green-900/60 text-green-400" 
                        : "bg-yellow-900/60 text-yellow-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-khan-gold">{item.category}</p>
                </div>
              </div>
              <CardContent className="pt-4 flex flex-col h-[calc(100%-14rem)]">
                <p className="text-white/70 mb-4 flex-grow">{item.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2 text-khan-blue/70">
                    {index % 2 === 0 ? <GalleryHorizontal size={18} /> : <ImageIcon size={18} />}
                    <span className="text-xs">{item.category}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-khan-gold hover:text-white hover:bg-khan-blue/20 transition-colors p-0 h-auto"
                  >
                    <span className="mr-1">Explore</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="bg-khan-blue hover:bg-khan-lightblue text-white transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ExternalLink 
              size={16} 
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
