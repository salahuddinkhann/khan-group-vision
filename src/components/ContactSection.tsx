
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

const ContactSection = () => {
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
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
