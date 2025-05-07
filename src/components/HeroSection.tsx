
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex items-center py-12"
      style={{
        background: "linear-gradient(to right, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.8)), url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-khan-dark/30 to-khan-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="animate-fade-up order-2 lg:order-1">
            <h4 className="text-khan-gold font-semibold mb-2 uppercase tracking-wider">Salahuddin Khan</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white leading-tight">
              Future Tycoon of <span className="gold-gradient-text">Nepal</span>
            </h1>
            <h2 className="text-lg md:text-xl font-montserrat text-white/90 mb-3 flex items-center gap-2">
              <span>I am a </span>
              <AnimatedText words={["Businessman", "Investor", "Tech Consultant"]} />
            </h2>
            <p className="text-white/70 text-base mb-4 max-w-lg">
              Building a business empire with ambition, innovation, and a commitment to excellence. 
              Join me on the journey as we redefine success in Nepal.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary flex items-center gap-2">
                Explore My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/MTrRPjWj/1740569004827-removebg-preview.png" 
                alt="Salahuddin Khan" 
                className="max-w-full h-auto rounded-[20px] border-4 border-khan-blue/30 shadow-lg shadow-khan-blue/30 animate-fade-in object-cover object-center"
                style={{ maxHeight: "400px", width: "auto" }}
              />
              <div className="absolute -bottom-4 -right-4 bg-khan-dark px-4 py-2 rounded-lg border border-khan-gold">
                <span className="text-khan-gold font-bold">Vision 2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
