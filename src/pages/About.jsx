import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { ShieldCheck, Award, Zap, Cpu, Target, Box } from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Counter Component ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      // Extract numeric part (e.g., "150" from "150+")
      const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
      motionValue.set(num);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + (value.includes('+') ? '+' : '');
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  const stats = [
    { label: "Flight Projects", value: "30+" },
    { label: "Airborne Hours", value: "150+" },
    { label: "Tech Innovations", value: "05+" },
    { label: "Cities Served", value: "12+" }
  ];

  

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black mb-32">
  
  {/* 1. BACKGROUND VIDEO LAYER (True Edge-to-Edge Fluid Span) */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover select-none"
    >
      <source src="./V2.mp4" type="video/mp4" />
    </video>
  </div>

  {/* 2. THE BLACK LAYER MASK OVERLAY - Tuned for ultra-clean contrast visibility */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75 z-10" />

  {/* 3. BOUNDED CONTENT GRID CONTAINER */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
    
    {/* Left Column Stack: Typographic Core */}
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="lg:col-span-7 flex flex-col items-start text-left"
    >
      {/* Minimalist Top Accent Header with Certified Pilot Badge */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#BFA388]"></span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">
            The Innovation
          </span>
        </div>
        <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
        {/* Certified Badge Anchor */}
        <span className="text-[8px] tracking-[0.3em] uppercase bg-[#BFA388]/10 text-[#BFA388] px-3 py-1 border border-[#BFA388]/20 font-mono font-bold">
          DGCA Certified Pilot Team
        </span>
      </div>

      {/* Master Core Headline */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl mb-6 font-black uppercase tracking-tighter text-white serif leading-none">
        Aerial <br /> <span className="text-[#BFA388]">Vision.</span>
      </h1>

      {/* High-density Context Information Block */}
      <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg uppercase tracking-widest font-light leading-relaxed max-w-2xl border-l-2 border-[#BFA388] pl-6">
        We are a specialized media and technology hub. Aerial Vision bridges the gap between high-end cinematic drone production and the future of unmanned aerial development, backed by a fully certified, elite pilot squad.
      </p>
    </motion.div>

    {/* Right Column Stack: High-Density Technical Frame */}
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="lg:col-span-5 hidden lg:flex flex-col justify-center items-end"
    >
      <div className="border border-white/10 bg-black/40 backdrop-blur-md p-8 rounded-none max-w-xs w-full relative group hover:border-[#BFA388]/30 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#BFA388]" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#BFA388]" />
        
        <span className="text-[8px] text-gray-500 font-mono tracking-widest block mb-2">TELEMETRY DECK</span>
        <h4 className="text-xs font-bold text-[#BFA388] uppercase tracking-widest mb-4 serif">SYSTEM LOGS</h4>
        <p className="text-white/60 text-[10px] tracking-widest uppercase leading-loose font-mono">
          • PILOTS: DGCA CERTIFIED<br />
          • CORE: 4K KINETIC REC<br />
          • DATA: 10-BIT D-LOG M<br />
          • PROC: AMBARELLA H22<br />
          • LINK: O4 CINEMA HD
        </p>
      </div>
    </motion.div>

  </div>
</section>

 

      {/* 2. MISSION STATEMENT */}
      <section className="bg-[#0A0A0A] py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            className="serif text-3xl md:text-5xl leading-tight mb-12 uppercase tracking-tight"
          >
            "To redefine perspective through <span className="text-[#BFA388]">precision engineering</span> and cinematic mastery, making every visual an extraordinary legacy."
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            className="h-[1px] bg-[#BFA388] mx-auto"
          />
        </div>
      </section>

      {/* 4. PERFORMANCE METRICS (Counter Animation) */}
      <section className="py-24 bg-[#BFA388]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-black text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-black/60 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS */}
     <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/5">
  
  {/* Optional Section Header to Establish Context */}
  <div className="mb-16 border-b border-white/5 pb-8">
    <span className="text-[9px] uppercase tracking-[0.5em] text-[#BFA388] font-bold block mb-2">Core Competencies</span>
    <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter serif">Operational Pillars</h2>
  </div>

  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    <ValueCard 
      icon={<Target className="text-[#BFA388]" size={28} strokeWidth={1.5} />} 
      title="Precision Shoots" 
      desc="Specializing in 4K HDR cinematography for commercial ads, real estate, and cultural festivals." 
    />
    <ValueCard 
      icon={<Cpu className="text-[#BFA388]" size={28} strokeWidth={1.5} />} 
      title="Drone R&D" 
      desc="We don't just fly; we develop. Innovating custom FPV and cinematic builds for creative production." 
    />
    <ValueCard 
      icon={<Award className="text-[#BFA388]" size={28} strokeWidth={1.5} />} 
      title="Elite Certification" 
      desc="Operating with full legal compliance and safety standards as recognized Tamil Nadu aerial experts." 
    />
    <ValueCard 
      icon={<Box className="text-[#BFA388]" size={28} strokeWidth={1.5} />} 
      title="Future Ready" 
      desc="Pioneering the expansion of drone technology into toys, hobby kits, and industrial documentation." 
    />
  </motion.div>
</section>

     

     
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -15, transition: { type: "spring", stiffness: 300 } }}
    className="p-10 bg-[#0A0A0A] border border-white/5 transition-all hover:border-[#BFA388]/30 group"
  >
    <div className="mb-8 transform transition-transform group-hover:scale-110">{icon}</div>
    <h4 className="text-[#BFA388] text-sm font-bold uppercase tracking-[0.2em] mb-4 serif">{title}</h4>
    <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-light">{desc}</p>
  </motion.div>
);

export default About;