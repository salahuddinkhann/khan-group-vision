
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize EmailJS if it exists in the window object
// This helps with deployment on Netlify
if (window.emailjs) {
  // Replace this with your actual EmailJS public key when deploying
  window.emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
}

createRoot(document.getElementById("root")!).render(<App />);
