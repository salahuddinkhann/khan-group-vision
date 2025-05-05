
import { useState } from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-khan-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gold-gradient-text">Touch</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a question or want to collaborate? Reach out and let's start a conversation.
          </p>
          <div className="w-20 h-1 bg-khan-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                      aria-label="YouTube"
                    >
                      YT
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                      aria-label="TikTok"
                    >
                      TT
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-khan-blue transition-colors"
                      aria-label="Facebook"
                    >
                      FB
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
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-muted border border-khan-blue/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-khan-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-muted border border-khan-blue/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-khan-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-muted border border-khan-blue/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-khan-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-muted border border-khan-blue/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-khan-blue"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-500 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
