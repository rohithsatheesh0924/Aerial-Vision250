import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { Instagram, Youtube, MessageCircle, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link to="/" className="flex flex-row items-center cursor-pointer group mb-8">
            {/* BRAND LOGO */}
            <img 
              src="./Logo.png" 
              alt="Aerial Vision Logo" 
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />

            {/* BRAND WORDINGS - Side by Side, No Gap */}
            <div className="flex flex-col ml-0"> 
              <span className="text-xl font-black tracking-[0.15em] serif uppercase leading-none text-white group-hover:text-[#BFA388] transition-colors duration-300">
                AERIAL
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#BFA388] mt-0.5">
                VISION 250
              </span>
            </div>
          </Link>
          <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-[0.2em] font-light max-w-[200px]">
            Elite cinematic drone production and aerial technology development based in Tamil Nadu.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BFA388] mb-8 border-l border-[#BFA388] pl-3">Navigation</h4>
          <ul className="text-[10px] space-y-5 uppercase tracking-[0.3em] font-bold">
            <li className="group flex items-center gap-2">
              <HashLink smooth to="/#home" className="group-hover:text-[#BFA388] transition-colors">Home</HashLink>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all text-[#BFA388]" />
            </li>
            <li className="group flex items-center gap-2">
              <Link to="/services" className="group-hover:text-[#BFA388] transition-colors">Services</Link>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all text-[#BFA388]" />
            </li>
            <li className="group flex items-center gap-2">
              <Link to="/about" className="group-hover:text-[#BFA388] transition-colors">Vision</Link>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all text-[#BFA388]" />
            </li>
            <li className="group flex items-center gap-2">
              <Link to="/pricing" className="group-hover:text-[#BFA388] transition-colors">Pricing</Link>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all text-[#BFA388]" />
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BFA388] mb-8 border-l border-[#BFA388] pl-3">Inquiries</h4>
          <ul className="text-[10px] space-y-5 text-gray-400 uppercase tracking-[0.2em]">
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-white/5 rounded-full text-[#BFA388] group-hover:bg-[#BFA388] group-hover:text-black transition-all">
                <MapPin size={12} />
              </div>
              Tamil Nadu, India
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-white/5 rounded-full text-[#BFA388] group-hover:bg-[#BFA388] group-hover:text-black transition-all">
                <Phone size={12} />
              </div>
              <a href="tel:+918148167943">+91 81481 67943</a>
            </li>
            <li className="flex items-center gap-4 group lowercase tracking-normal">
              <div className="p-2 bg-white/5 rounded-full text-[#BFA388] group-hover:bg-[#BFA388] group-hover:text-black transition-all">
                <Mail size={12} />
              </div>
              <a href="mailto:aerialvision250@gmail.com" className="group-hover:text-white transition-colors">aerialvision250@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social Connect Column */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BFA388] mb-8 border-l border-[#BFA388] pl-3">Connect</h4>
          <div className="flex gap-3">
            <SocialIcon href="https://instagram.com" icon={<Instagram size={16} />} />
            <SocialIcon href="https://youtube.com" icon={<Youtube size={16} />} />
            <SocialIcon href="https://wa.me/918148167943" icon={<MessageCircle size={16} />} />
          </div>
          <p className="mt-8 text-[9px] text-gray-600 uppercase tracking-[0.3em] leading-relaxed">
            Follow our journey as we redefine the boundaries of the sky.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-[8px] uppercase tracking-[0.5em] text-gray-600">
            © 2026 AERIAL VISION. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-gray-700">
            Established for cinematic excellence and drone innovation.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
           <p className="text-[8px] uppercase tracking-[0.4em] text-gray-600 group cursor-pointer">
            Developed By <span className="text-white group-hover:text-[#BFA388] transition-colors">Rohith</span>
          </p>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
          <p className="text-[8px] uppercase tracking-[0.5em] text-gray-500 font-black italic">
            SKY IS THE LIMIT
          </p>
        </div>
      </div>
    </footer>
  );
};

// Internal Helper for Social Icons
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-[#BFA388] hover:text-[#BFA388] transition-all bg-white/5 hover:bg-[#BFA388]/5"
  >
    {icon}
  </a>
);

export default Footer;