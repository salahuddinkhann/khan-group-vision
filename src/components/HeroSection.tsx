
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: "linear-gradient(to right, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.8)), url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-khan-dark/30 to-khan-dark"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <h4 className="text-khan-gold font-semibold mb-4 uppercase tracking-wider">Salahuddin Khan</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Future Tycoon of <span className="gold-gradient-text">Nepal</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-montserrat text-white/90 mb-6">
              Entrepreneur | Investor | Visionary Leader
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
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
          
          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-khan-blue animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-r from-khan-blue to-khan-lightblue/60 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">SK</span>
                </div>
              </div>
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
