import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);

  useEffect(() => {
    // Check if EmailJS is already loaded
    if (window.emailjs) {
      try {
        window.emailjs.init("ZB3c_CLmtPDHMB_zC");
        setIsScriptLoaded(true);
        console.log("EmailJS already loaded and initialized");
      } catch (error) {
        console.error("Error initializing EmailJS:", error);
        setScriptError("Failed to initialize EmailJS. Please try again later.");
      }
      return;
    }

    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      try {
        // Initialize EmailJS with public key
        window.emailjs.init("ZB3c_CLmtPDHMB_zC");
        setIsScriptLoaded(true);
        console.log("EmailJS script loaded and initialized successfully");
      } catch (error) {
        console.error("Error initializing EmailJS:", error);
        setScriptError("Failed to initialize EmailJS. Please try again later.");
      }
    };
    
    script.onerror = () => {
      setScriptError("Failed to load EmailJS. Please try again later.");
      console.error("EmailJS script failed to load");
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isScriptLoaded) {
      toast.error("Email service is not available yet. Please try again in a moment.");
      return;
    }
    
    setIsSubmitting(true);
    console.log("Sending email with data:", formData);
    
    try {
      if (typeof window.emailjs === 'undefined') {
        throw new Error("EmailJS is not defined");
      }

      if (typeof window.emailjs.send !== 'function') {
        throw new Error("EmailJS send method is not available");
      }
      
      // Log the parameters to help with debugging
      console.log("EmailJS parameters:", {
        serviceId: "service_bzmdaus",
        templateId: "template_rmkfyhv",
        templateParams: {
          from_name: formData.name,
          to_name: "Salahuddin Khan",
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      });
      
      const response = await window.emailjs.send(
        "service_bzmdaus", 
        "template_rmkfyhv",
        {
          from_name: formData.name,
          to_name: "Salahuddin Khan",
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      
      console.log("EmailJS response:", response);
      
      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(`Failed to send your message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
      
      {scriptError && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{scriptError}</AlertDescription>
        </Alert>
      )}
      
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
            disabled={isSubmitting || !isScriptLoaded}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
