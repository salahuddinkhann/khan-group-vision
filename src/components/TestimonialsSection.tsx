
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Best advice on website setup. Professional and fast!",
      author: "Rahul Sharma",
      position: "Tech Entrepreneur"
    },
    {
      id: 2,
      content: "Salahuddin's vision and business insights are truly impressive for his age. Looking forward to seeing his future ventures!",
      author: "Priya Patel",
      position: "Marketing Director"
    },
    {
      id: 3,
      content: "Working with Khan Group was an excellent experience. Their attention to detail and dedication is outstanding.",
      author: "Amir Khan",
      position: "Business Owner"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Client <span className="gold-gradient-text">Feedback</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            What people say about working with me and Khan Group.
          </p>
          <div className="w-20 h-1 bg-khan-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <Card 
              key={item.id} 
              className={`bg-khan-dark border border-khan-blue/20 transition-all duration-300 overflow-hidden ${
                hoveredCard === item.id ? 'transform -translate-y-2 shadow-lg shadow-khan-blue/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="pt-6 pb-6 relative">
                <div className="absolute top-4 left-4 text-khan-gold opacity-20">
                  <Quote size={40} />
                </div>
                
                <div className="relative z-10">
                  <p className="text-white/90 mb-8 italic">"{item.content}"</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-khan-gold">
                      <AvatarFallback className="bg-khan-blue text-white">
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold text-white">{item.author}</p>
                      <p className="text-khan-gold text-sm">{item.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
