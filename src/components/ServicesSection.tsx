
const ServicesSection = () => {
  const services = [
    {
      title: "Small Loans",
      description: "Accessible financing options designed to help small businesses and entrepreneurs get started and grow.",
      icon: "💰",
      status: "Coming Soon"
    },
    {
      title: "Investment Services",
      description: "Strategic investment guidance to help clients build wealth and secure their financial future.",
      icon: "📈",
      status: "Coming Soon"
    },
    {
      title: "Financial Consulting",
      description: "Expert advice on financial planning, budgeting, and wealth management strategies.",
      icon: "📊",
      status: "Coming Soon"
    },
    {
      title: "Business Collaboration",
      description: "Partnership opportunities for innovative businesses looking to expand their reach and impact.",
      icon: "🤝",
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
            <div 
              key={index} 
              className="card bg-khan-dark hover:bg-muted border border-khan-blue/20 transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 bg-khan-blue/20 rounded-lg flex items-center justify-center text-3xl">
                  {service.icon}
                </div>
                <span className="bg-khan-blue/20 text-khan-gold px-3 py-1 rounded-full text-xs">
                  {service.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
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
