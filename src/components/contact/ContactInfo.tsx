
import { Mail, Phone, User } from 'lucide-react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="icon-box">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
            <a href="mailto:salahuddinpvtt@gmail.com" className="text-khan-gold hover:underline">
              salahuddinpvtt@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="icon-box">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
            <a href="tel:+9779707455404" className="text-khan-gold hover:underline">
              +977 9707455404
            </a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="icon-box">
            <User size={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Social Media</h4>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://youtube.com/@dhamakayt_short?si=qJUVpVpvfsqJGppD" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://www.instagram.com/salahuddin__k" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/Salahuddinkhannn" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-muted rounded-lg border border-khan-blue/30">
        <h4 className="text-lg font-semibold text-white mb-3">Location</h4>
        <p className="text-white/70">
          Sadahawa, Gaidahawa Municipality<br />
          Rupandehi, Lumbini Province<br />
          Nepal
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
