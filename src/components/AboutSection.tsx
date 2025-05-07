
const AboutSection = () => {
  return (
    <section id="about" className="py-14 bg-muted">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="gold-gradient-text">Salahuddin Khan</span>
          </h2>
          <div className="w-20 h-1 bg-khan-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 text-white">My Story</h3>
            <p className="mb-3 text-white/80">
              Born and raised in Sadahawa, Gaidahawa Municipality, Rupandehi, I am currently a Class 9 student with extraordinary ambitions. At a young age, I've already begun building my business empire under the brand "Khan Group".
            </p>
            <p className="mb-3 text-white/80">
              My passion for business, investment, and politics drives me to excel in everything I do. I believe in the power of vision, determination, and strategic thinking to achieve remarkable success.
            </p>
            <p className="mb-4 text-white/80">
              With my focus on launching Khan Finance, entering the stock market at 18, and eventually stepping into political leadership as a municipality mayor, I'm determined to make a lasting impact on Nepal's economic and political landscape.
            </p>
            
            <div className="border-l-4 border-khan-gold pl-4 py-2 mb-6">
              <blockquote className="text-xl font-montserrat italic text-white">
                "Success isn't just about what you accomplish, but about inspiring others and creating opportunities for growth."
              </blockquote>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-khan-dark/50 p-4 rounded-lg border border-khan-blue/30">
                <h4 className="font-bold text-khan-gold mb-1">Location</h4>
                <p className="text-white/70">Sadahawa, Rupandehi, Nepal</p>
              </div>
              <div className="bg-khan-dark/50 p-4 rounded-lg border border-khan-blue/30">
                <h4 className="font-bold text-khan-gold mb-1">Education</h4>
                <p className="text-white/70">Class 9 Student</p>
              </div>
              <div className="bg-khan-dark/50 p-4 rounded-lg border border-khan-blue/30">
                <h4 className="font-bold text-khan-gold mb-1">Vision</h4>
                <p className="text-white/70">Business Tycoon & Political Leader</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 bg-gradient-to-r from-khan-blue to-khan-lightblue rounded-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
                <div className="z-10 text-center p-6">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SK</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Salahuddin Khan</h3>
                  <p className="text-white/70 mb-4">Future Tycoon</p>
                  <div className="flex justify-center space-x-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-khan-gold"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-khan-gold"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-khan-gold"></span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-khan-dark p-4 rounded-lg shadow-lg">
                <h4 className="font-bold text-khan-gold text-lg">Khan Group</h4>
                <p className="text-white/70 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
