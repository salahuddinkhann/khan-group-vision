
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Khan</span>
              <span className="text-khan-gold">Group</span>
            </h3>
            <p className="text-white/70 mb-4">
              Building a legacy of innovation, leadership, and success across multiple industries.
            </p>
            <p className="text-white/50 text-sm">
              Sadahawa, Rupandehi, Nepal
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-khan-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-khan-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-khan-gold transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-khan-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-khan-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-khan-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="text-khan-gold mr-2">Email:</span>
                <a href="mailto:salahuddinpvtt@gmail.com" className="hover:text-khan-gold transition-colors">
                  salahuddinpvtt@gmail.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="text-khan-gold mr-2">Phone:</span>
                <a href="tel:+9779707455404" className="hover:text-khan-gold transition-colors">
                  +977 9707455404
                </a>
              </li>
            </ul>
            
            <h4 className="text-lg font-bold text-white mb-2 mt-4">Social Media</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Salahuddinkhannn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-khan-gold transition-colors hover:scale-110 transform duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.facebook.com/salahuddin__k" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-khan-gold transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com/@dhamakayt_short?si=qJUVpVpvfsqJGppD" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-khan-gold transition-colors hover:scale-110 transform duration-200"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-2 md:mb-0">
            &copy; {currentYear} Khan Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
