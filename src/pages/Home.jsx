import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Award, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  Send, 
  Disc,
  Zap,
  Globe
} from 'lucide-react';
import { NavHashLink as HashLink } from 'react-router-hash-link';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const wipeReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
};

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1532704101643-77510e3f7739?auto=format&fit=crop&w=600&q=80",
  ];

  const services = [
    {
      title: "Commercial Ads",
      price: "Premium",
      desc: "Cinematic drone sequences designed for high-conversion brand advertisements and commercial storytelling.",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real Estate",
      price: "₹8,000+",
      desc: "Architectural aerial photography that highlights property scale and surrounding infrastructure in 4K HDR.",
      img: "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Temple Festivals",
      price: "₹10,000+",
      desc: "Capturing the vibrant divinity and massive cultural scale of Tamil Nadu's festivals from the sky.",
      img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Event Coverage",
      price: "₹30,000+",
      desc: "Seamlessly integrating aerial grandeur into weddings and large-scale corporate gatherings.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const slides = [
    { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(timer); 
  }, [slides.length]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - PROFESSIONAL DRONE ANIMATION */}
  <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
  
  {/* 1. BROADCAST-GRADE BACKGROUND VIDEO LAYER (True Edge-to-Edge Fluid Span) */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover select-none"
    >
      <source src="./VV.mp4" type="video/mp4" />
    </video>
  </div>

  {/* 2. CINEMATIC GRADIENT LAYER OVERLAY - Tuned for elegant readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 z-10" />

  {/* 3. BOUNDED LAYOUT WRAPPER & CENTERED INTERFACE BOX */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-10 flex items-center justify-center min-h-screen">
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeInUp} 
      className="max-w-4xl w-full text-center flex flex-col items-center pt-16 pb-12"
    >
      {/* Minimalist Accent Typography Header */}
      <div className="flex items-center gap-4 mb-6 justify-center">
        <span className="w-8 h-[1px] bg-[#BFA388]"></span>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">
          Elite Media Production
        </span>
        <span className="w-8 h-[1px] bg-[#BFA388]"></span>
      </div>

      {/* Professional Certified Pilot Badge Anchor */}
      <div className="mb-6">
        <span className="text-[8px] tracking-[0.3em] uppercase bg-[#BFA388]/10 text-[#BFA388] px-4 py-1.5 border border-[#BFA388]/20 font-mono font-bold rounded-none">
          DGCA Certified Pilot Crew
        </span>
      </div>

      {/* Master Core Headline Frame */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-black uppercase tracking-tighter text-white serif whitespace-nowrap leading-none">
        Aerial <span className="text-[#BFA388]">Vision</span>
      </h1>

      {/* Corporate Strategy Sub-headline */}
      <h2 className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.4em] font-medium mb-10">
        Cinematic Excellence Across Tamil Nadu
      </h2>

      {/* Precision Context Information Board */}
      <div className="border border-white/5 bg-black/40 backdrop-blur-md p-6 max-w-md w-full mb-12 border-l-2 border-l-[#BFA388] transition-colors duration-500 hover:border-white/10">
        <p className="text-white/80 leading-relaxed uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-light text-center">
          <span className="text-white font-bold">Phase 1 Specialists.</span> Currently delivering high-end <span className="text-[#BFA388] italic">4K Drone Cinematography</span> for commercial, cultural, and corporate sectors.
        </p>
      </div>

      {/* Business Capture Interface Action Trigger Bar */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
        <HashLink smooth to="/pricing">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-[#BFA388] text-black px-10 py-4 text-[9px] font-black uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 shadow-xl shadow-black/20"
          >
            View Services
          </motion.button>
        </HashLink>
        
        <HashLink smooth to="/contact#contact-form">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="border border-white/10 text-white bg-black/20 backdrop-blur-sm px-10 py-4 text-[9px] font-black uppercase tracking-[0.25em] hover:border-[#BFA388] hover:text-[#BFA388] transition-all duration-500"
          >
            Start Project
          </motion.button>
        </HashLink>
      </div>
    </motion.div>
  </div>
</section>
      {/* 2. IMAGE MARQUEE - PURE VISUAL FLOW */}
      <section className="bg-black py-10 overflow-hidden border-y border-white/5">
        <div className="relative flex animate-marquee gap-4">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-[300px] md:w-[450px] h-[300px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10 group">
              <img src={src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cinematography" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="bg-black py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4 border-b border-white/5 pb-8">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter serif">Expertise</h2>
            <Link to="/portfolio" className="text-[#BFA388] text-[10px] uppercase tracking-widest hover:text-white transition-colors">See Archive +</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
            {services.map((service, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
                <div className="overflow-hidden h-[300px] md:h-[450px] border border-white/10">
                  <img src={service.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={service.title} />
                </div>
                <div className="bg-[#0A0A0A] p-8 md:p-10 mx-6 -mt-20 relative z-10 border-l-4 border-[#BFA388] shadow-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter serif">{service.title}</h3>
                    <span className="text-[#BFA388] text-[10px] font-bold uppercase">{service.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest font-light">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE VISION STRATEGY */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
             <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">Future-Focused</span>
             <h2 className="serif text-4xl md:text-6xl text-white mt-4 uppercase tracking-tighter">The Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <InfoCard 
              icon={<Zap size={32} strokeWidth={1} className="mx-auto text-[#BFA388]" />} 
              title="Scale & Tech" 
              desc="Expanding from elite Air 3S drone services to full-scale DSLR cinematography and professional studio systems." 
            />
            <InfoCard 
              icon={<Globe size={32} strokeWidth={1} className="mx-auto text-[#BFA388]" />} 
              title="Regional Reach" 
              desc="Building a network of production branches across Tamil Nadu, handling large-scale commercial projects." 
            />
            <InfoCard 
              icon={<Award size={32} strokeWidth={1} className="mx-auto text-[#BFA388]" />} 
              title="Innovation" 
              desc="Pioneering custom FPV drone builds for both creative commercial shoots and high-end hobby applications." 
            />
          </div>
        </div>
      </section>

      {/* 5. FINAL SHOWCASE CTA */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden border-t border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-10 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/80 z-20"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-30 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold mb-4">
            Aerial Vision India
          </motion.span>
          <motion.h1 className="serif text-5xl md:text-8xl leading-tight mb-8 font-black uppercase tracking-tighter text-white">
            ELEVATING <br /> <span className="font-light" style={{color: '#BFA388'}}>PERSPECTIVE.</span>
          </motion.h1>
          <HashLink smooth to="/contact#contact-form">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-[#BFA388] text-black px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
              Launch Project
            </motion.button>
          </HashLink>
        </motion.div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-white/5 bg-[#0A0A0A] transition hover:border-[#BFA388]/40 h-full group">
    <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xs font-bold uppercase tracking-widest mb-4 serif text-[#BFA388]">{title}</h4>
    <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">{desc}</p>
  </div>
);

export default Home;