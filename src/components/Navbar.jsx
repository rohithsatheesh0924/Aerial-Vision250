import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', target: 'home' },
    { name: 'Services', path: '/services', target: 'services' },
    { name: 'Portfolio', path: '/portfolio', target: 'portfolio' },
    { name: 'About', path: '/about', target: 'about' },
    { name: 'Pricing', path: '/pricing', target: 'pricing' },
    { name: 'Contact', path: '/contact', target: 'contact' },
  ];

  useEffect(() => {
    // 1. Highlight based on URL Path (for separate pages)
    const currentPath = location.pathname;
    
    // Find the link that matches the current path exactly
    const matchingLink = navLinks.find(link => link.path === currentPath);
    
    if (matchingLink) {
      setActiveSection(matchingLink.target);
    }

    // 2. Logic for Home Page Scroll Highlighting
    if (currentPath === '/') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        const scrollPosition = window.scrollY + 150;

        navLinks.forEach((link) => {
          // Only check scroll positions for home page sections
          const element = document.getElementById(link.target);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(link.target);
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // If not on Home, ensure background is always solid black
      setScrolled(true);
    }
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
    // Force immediate highlight update on click
    window.scrollTo(0, 0); 
  };

  return (
    <nav className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 ${
      scrolled || isOpen || location.pathname !== '/'
        ? 'bg-black border-b border-[#BFA388]/20 shadow-2xl' 
        : 'bg-black/40 backdrop-blur-md border-b border-white/5'
    } py-3 px-6 md:px-10 flex justify-between items-center`}>
      
      {/* Brand */}
      <Link to="/" onClick={handleLinkClick} className="flex flex-row items-center gap-4 cursor-pointer group z-[60]">
  
  {/* LOGO IMAGE - Place your <img> tag here */}
  <img 
    src="./Logo.png" 
    alt="Peacock Snaps Logo" 
    className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
  />

  {/* WORDINGS - Attached directly to the logo */}
  <div className="flex flex-col ml-0"> 
    <span className="text-base md:text-lg font-black tracking-[0.15em] serif uppercase leading-none text-white group-hover:text-[#BFA388] transition-colors duration-300">
      AERIAL
    </span>
    <span className="text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-[#BFA388] mt-0.5">
      VISIONS 250
    </span>
  </div>
</Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link 
            key={link.target}
            to={link.path} 
            onClick={handleLinkClick}
            className={`relative group transition-all duration-300 ${
              activeSection === link.target ? 'text-[#BFA388]' : 'text-white/70 hover:text-white'
            }`}
          >
            {link.name}
            <span className={`absolute bottom-[-6px] left-0 w-full h-[1px] bg-[#BFA388] transform origin-left transition-transform duration-300 ${
              activeSection === link.target ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}></span>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <HashLink 
  smooth 
  to="/contact#contact-form" 
  onClick={handleLinkClick} 
  className="hidden sm:block"
>
  <button className="bg-[#BFA388] text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95">
    Book Now
  </button>
</HashLink>

      {/* Mobile Hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 z-[60] p-2" onClick={() => setIsOpen(!isOpen)}>
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px] !bg-[#BFA388]' : ''}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px] !bg-[#BFA388]' : ''}`}></span>
      </button>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-screen w-full bg-black transform transition-transform duration-500 ease-in-out z-[55] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex flex-col items-center justify-center gap-8 shadow-2xl`}>
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.target}
              to={link.path} 
              onClick={handleLinkClick}
              className={`text-3xl font-black uppercase tracking-[0.2em] transition-colors ${
                activeSection === link.target ? 'text-[#BFA388]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={handleLinkClick}>
            <button className="mt-4 bg-[#BFA388] text-black px-12 py-4 text-xs font-black uppercase tracking-[0.3em]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;