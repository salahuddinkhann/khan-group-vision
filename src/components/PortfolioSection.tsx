
const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Khan Group",
      category: "Business Empire",
      description: "The umbrella organization for all business ventures, creating value across multiple industries.",
      image: "/placeholder.svg",
      status: "Active"
    },
    {
      title: "Clothing Brand",
      category: "Fashion",
      description: "Premium T-shirt & hoodie line offering stylish, comfortable attire with unique designs.",
      image: "/placeholder.svg",
      status: "In Development"
    },
    {
      title: "YouTube Comedy",
      category: "Content Creation",
      description: "Entertainment channel delivering humorous content created with friends to bring joy to viewers.",
      image: "/placeholder.svg",
      status: "Active"
    },
    {
      title: "TikTok Content",
      category: "Digital Media",
      description: "Short-form videos focusing on motivational messages, respect, and emotional storytelling.",
      image: "/placeholder.svg",
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
            <div 
              key={index} 
              className="card bg-muted hover:bg-khan-dark hover:border border-khan-blue/30 group"
            >
              <div className="h-48 mb-4 rounded overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-khan-blue/20 to-khan-blue/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <span className="font-bold text-xl text-white">{item.title}</span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === "Active" 
                    ? "bg-green-900/60 text-green-400" 
                    : "bg-yellow-900/60 text-yellow-400"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-khan-gold mb-3">{item.category}</p>
              <p className="text-white/70 mb-4">{item.description}</p>
              <div className="flex justify-end">
                <button className="text-khan-gold hover:text-white transition-colors text-sm font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
