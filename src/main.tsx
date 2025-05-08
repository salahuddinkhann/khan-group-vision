
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize EmailJS if it exists in the window object
// This helps with deployment on Netlify
if (window.emailjs) {
  // Using the same EmailJS public key that's in your ContactForm component
  window.emailjs.init("ZB3c_CLmtPDHMB_zC");
}

createRoot(document.getElementById("root")!).render(<App />);
