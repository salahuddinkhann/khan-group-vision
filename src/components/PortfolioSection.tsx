
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal, ImageIcon } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Khan Group",
      category: "Business Empire",
      description: "The umbrella organization for all business ventures, creating value across multiple industries.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active"
    },
    {
      title: "Clothing Brand",
      category: "Fashion",
      description: "Premium T-shirt & hoodie line offering stylish, comfortable attire with unique designs.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "In Development"
    },
    {
      title: "YouTube Comedy",
      category: "Content Creation",
      description: "Entertainment channel delivering humorous content created with friends to bring joy to viewers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active"
    },
    {
      title: "TikTok Content",
      category: "Digital Media",
      description: "Short-form videos focusing on motivational messages, respect, and emotional storytelling.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-khan-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my diverse ventures and projects spanning business, fashion, and digital content creation.
          </p>
          <div className="w-20 h-1 bg-khan-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-muted hover:bg-khan-dark hover:border border-khan-blue/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
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
              <CardContent className="pt-4">
                <p className="text-white/70 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 text-khan-blue/70">
                    {index % 2 === 0 ? <GalleryHorizontal size={18} /> : <ImageIcon size={18} />}
                    <span className="text-xs">{item.category}</span>
                  </div>
                  <button className="text-khan-gold hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
