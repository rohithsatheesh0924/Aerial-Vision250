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

import VisualStories from '../components/VisualStories';
import { NavHashLink as HashLink } from 'react-router-hash-link';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

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

  const textVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="py-12 md:py-20 px-8 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-[#BFA388]"></span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#BFA388] font-bold">
              Elite Media Production
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-4 leading-[0.95] font-black uppercase tracking-tighter text-white serif">
            Aerial <br /> 
            <span className="text-[#BFA388]">Vision 250.</span>
          </h1>

          <h2 className="text-[11px] md:text-xs text-white/70 uppercase tracking-[0.3em] font-medium mb-8">
            Cinematic Excellence Across Tamil Nadu
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-light max-w-sm border-l border-[#BFA388] pl-4">
            <span className="text-white font-bold">Phase 1 Specialists.</span> Currently delivering high-end <span className="text-[#BFA388] italic">4K Drone Cinematography</span> for commercial, cultural, and corporate sectors.
          </p>

          <div className="flex flex-wrap gap-4">
            <HashLink smooth to="/pricing">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#BFA388] text-black px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500"
              >
                View Services
              </motion.button>
            </HashLink>
            <HashLink smooth to="/contact#contact-form">
              <button className="border border-white/10 text-white px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] hover:border-[#BFA388] transition-all duration-500">
                Start Project
              </button>
            </HashLink>
          </div>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={wipeReveal} className="relative rounded-sm overflow-hidden shadow-2xl border border-white/5 h-[400px] md:h-[550px]">
          <img src="https://images.unsplash.com/photo-1473960236041-7c505555d045?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Elite Drone Tech" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 flex items-center gap-2">
            <Disc size={16} className="text-[#BFA388]" />
            <div className="flex flex-col">
              <span className="text-[8px] text-white font-black uppercase tracking-widest leading-none">DJI Air 3S</span>
              <span className="text-[6px] text-gray-400 uppercase tracking-widest italic leading-none">Primary Unit</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. IMAGE MARQUEE */}
      <section className="bg-black py-10 overflow-hidden border-y border-white/5">
        <div className="relative flex animate-marquee gap-4">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-[300px] md:w-[450px] h-[300px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10">
              <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
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

      {/* 4. THE VISION (Strategy Section) */}
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
              desc="Expanding from elite Air 3S drone services to full-scale DSLR cinematography, lighting, and professional studio systems." 
            />
            <InfoCard 
              icon={<Globe size={32} strokeWidth={1} className="mx-auto text-[#BFA388]" />} 
              title="Regional Reach" 
              desc="Building a network of production branches across Tamil Nadu, handling large-scale commercial and documentary projects." 
            />
            <InfoCard 
              icon={<Award size={32} strokeWidth={1} className="mx-auto text-[#BFA388]" />} 
              title="Innovation" 
              desc="Pioneering custom FPV drone builds for both creative commercial shoots and high-end hobby applications." 
            />
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC SHOWCASE SLIDER */}
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
          <motion.span variants={textVariants} className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold mb-4">
            Aerial Vision India
          </motion.span>
          <motion.h1 variants={textVariants} className="serif text-5xl md:text-8xl leading-tight mb-8 font-black uppercase tracking-tighter text-white">
            ELEVATING <br /> <span className="font-light" style={{color: '#BFA388'}}>PERSPECTIVE.</span>
          </motion.h1>
          <HashLink smooth to="/contact#contact-form">
            <motion.button variants={textVariants} className="bg-[#BFA388] text-black px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
              Launch Project
            </motion.button>
          </HashLink>
        </motion.div>
      </section>
    </div>
  );
};

// Sub-components
const InfoCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-white/5 bg-[#0A0A0A] transition hover:border-[#BFA388]/40 h-full group">
    <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xs font-bold uppercase tracking-widest mb-4 serif text-[#BFA388]">{title}</h4>
    <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">{desc}</p>
  </div>
);

export default Home;