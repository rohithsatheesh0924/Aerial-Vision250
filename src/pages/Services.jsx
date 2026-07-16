import React from 'react';
import { motion } from 'framer-motion';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { ArrowUpRight, PlayCircle, Camera, Tent, Building2, GraduationCap, Users, Repeat } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: "01",
      title: "Commercial / Ads",
      price: "₹30,000",
      icon: <PlayCircle className="text-[#BFA388]" size={24} />,
      desc: "High-end cinematic sequences tailored for brand storytelling, business promotion, and high-conversion advertisements.",
      img:"./img-1 (7).png",
      accent: "Commercial Impact"
    },
    {
      id: "02",
      title: "Wedding / Marriage",
      price: "₹15,000 - ₹30,000",
      icon: <Camera className="text-[#BFA388]" size={24} />,
      desc: "Capturing the grandeur of your special day from the sky, providing a movie-like dimension to your wedding legacy.",
      img:"./img-1 (1).png",
      accent: "Cinematic Grandeur"
    },
    {
      id: "03",
      title: "Temple Festival",
      price: "₹10,000",
      icon: <Tent className="text-[#BFA388]" size={24} />,
      desc: "Documenting the spiritual scale and vibrant cultural colors of temple festivals from a divine aerial perspective.",
      img:"./img-1 (4).png",
      accent: "Spiritual Scale"
    },
    {
      id: "04",
      title: "Real Estate",
      price: "₹8,000 - ₹20,000",
      icon: <Building2 className="text-[#BFA388]" size={24} />,
      desc: "Architectural visuals that highlight property scale and surroundings to create high-impact real estate promotions.",
      img:"./img-1 (2).png",
      accent: "Architectural Precision"
    },
    {
      id: "05",
      title: "Monthly Service",
      price: "₹15,000 - ₹30,000",
      icon: <Repeat className="text-[#BFA388]" size={24} />,
      desc: "Regular monthly shooting for construction progress, institutions, or ongoing documentation projects.",
      img:"./img-1 (5).png",
      accent: "Long-term Documentation"
    },
    {
      id: "06",
      title: "Family Functions",
      price: "₹7,000",
      icon: <Users className="text-[#BFA388]" size={24} />,
      desc: "Beautifully captured private moments and group gatherings, ensuring your family memories are truly timeless.",
      img:"./img-1 (8).png",
      accent: "Timeless Memories"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* HEADER SECTION */}
   <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 min-h-[40vh] flex items-center justify-center">
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl w-full flex flex-col items-center text-center"
  >
    {/* Minimalist Top Accent Header */}
    <div className="flex items-center gap-4 mb-6 justify-center">
      <span className="w-8 h-[1px] bg-[#BFA388]"></span>
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">
        The Aerial Vision Portfolio
      </span>
      <span className="w-8 h-[1px] bg-[#BFA388]"></span>
    </div>

    {/* Master Core Headline - Centered & forced on a single line for impact */}
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white serif whitespace-nowrap leading-none mb-4">
      Aerial <span className="text-[#BFA388]">Solutions.</span>
    </h1>

    {/* Professional Certified Pilot Badge Anchor */}
    <div className="mb-8">
      <span className="text-[8px] tracking-[0.3em] uppercase bg-[#BFA388]/10 text-[#BFA388] px-4 py-1.5 border border-[#BFA388]/20 font-mono font-bold rounded-none">
        DGCA Certified Pilot Operations
      </span>
    </div>

    {/* High-Visibility Balanced Context Subtitle */}
    <p className="text-white/80 text-sm sm:text-base md:text-lg uppercase tracking-widest font-light leading-relaxed max-w-2xl border-t border-b border-white/5 py-6 px-4">
      From commercial advertisements to spiritual festivals, we provide total visual coverage across Tamil Nadu.
    </p>
  </motion.div>
</section>

      {/* SERVICES LIST */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 mb-40 group`}
          >
            {/* Image Side */}
            <div className="w-full md:w-3/5 relative overflow-hidden aspect-[16/10] shadow-2xl border border-white/10">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-serif italic text-[#BFA388]/40">{service.id}</span>
                <div className="w-12 h-[1px] bg-[#BFA388]/40"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#BFA388]">{service.accent}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 serif leading-tight">
                {service.title}
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 uppercase tracking-widest font-light">
                {service.desc}
              </p>

              {/* ROUTING FUNCTIONALITY */}
              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-2">Investment Starts At</span>
                  <span className="text-2xl font-bold text-[#BFA388]">{service.price}</span>
                </div>
                
                {/* HashLink to the Contact Form Section */}
                <HashLink smooth to="/contact#contact-form">
                  <button className="bg-[#BFA388] p-5 rounded-full text-black hover:bg-white transition-all duration-300 shadow-xl active:scale-90">
                    <ArrowUpRight size={22} />
                  </button>
                </HashLink>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA SECTION */}
     <section className="relative mt-20 py-32 bg-[#050505] border-y border-white/5 text-center overflow-hidden w-full">
  
  {/* 1. AMBIENT STUDIO GLOW - Soft background light focused behind the text */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BFA388]/5 blur-[130px] rounded-full pointer-events-none z-0" />

  {/* 2. TECHNICAL BORDER ACCENTS - Reinforces high-end architectural layout */}
  <div className="absolute top-0 left-12 w-[1px] h-4 bg-[#BFA388]/30" />
  <div className="absolute bottom-0 right-12 w-[1px] h-4 bg-[#BFA388]/30" />

  {/* 3. INTERFACE BLOCK CONTAINER */}
  <motion.div 
    initial={{ opacity: 0, y: 35 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center"
  >
    {/* Micro-Context Tag */}
    <div className="flex items-center gap-3 mb-6 justify-center">
      <span className="w-4 h-[1px] bg-[#BFA388]/60"></span>
      <span className="text-[9px] uppercase tracking-[0.4em] text-[#BFA388] font-mono font-bold">
        Next Phase Operations
      </span>
      <span className="w-4 h-[1px] bg-[#BFA388]/60"></span>
    </div>

    {/* Master Core Headline - High impact single-line configuration */}
    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white serif leading-none mb-6">
      Elevate <span className="text-[#BFA388]">Your Vision.</span>
    </h2>

    {/* High-Visibility Supporting Subtitle */}
    <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.25em] leading-relaxed max-w-md mx-auto mb-12 font-light">
      Partner with a DGCA certified pilot squad to secure broadcast-grade aerial capture across South India.
    </p>

    {/* Primary Routing Trigger - Cohesive Curved Polish */}
    <HashLink smooth to="/contact#contact-form">
      <motion.button 
        whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(191,163,136,0.3)" }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#BFA388] text-black px-14 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
      >
        Request a Consultation
      </motion.button>
    </HashLink>
  </motion.div>
</section>
    </div>
  );
};

export default ServicesPage;