import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-[#f9f9f9] px-6 md:px-12 lg:px-24 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24">
        <div className="mb-12 md:mb-0 max-w-md">
          <h2 className="font-serif text-6xl md:text-8xl mb-8">Zava.</h2>
          <p className="font-sans opacity-60 text-lg mb-8">
            Ready to build something serious? Tell us where you want to go. We'll get you there faster, cleaner, and stronger.
          </p>
          <div className="space-y-2 font-sans text-sm opacity-80">
             <div className="flex items-center gap-3"><Mail size={16}/> info@zavabuild.com</div>
             <div className="flex items-center gap-3"><Phone size={16}/> +44 78 4082 7694</div>
             <div className="flex items-center gap-3"><MapPin size={16}/> Middlesbrough, UK</div>
          </div>
        </div>

        <div className="flex gap-12 md:gap-24 font-sans text-sm uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <span className="opacity-40 mb-2">Sitemap</span>
            <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link to="/services" className="hover:opacity-60 transition-opacity">Services</Link>
            <Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="opacity-40 mb-2">Socials</span>
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#f9f9f9]/10 font-sans text-xs opacity-40">
        <p>&copy; 2025 Zava Agency. All Rights Reserved.</p>
        <p>Built for Growth.</p>
      </div>
    </footer>
  );
}
