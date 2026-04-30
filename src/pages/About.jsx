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

  const team = [
    {
      name: "Murali Krishna",
      role: "Lead Cinematographer",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Arun Kumar",
      role: "Senior Drone Pilot",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sanjay Raj",
      role: "Drone Tech Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vikram Sethu",
      role: "Post-Production Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">The Innovation</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter serif mt-6 leading-none">
              Aerial <br /> <span className="text-[#BFA388]">Vision.</span>
            </h1>
            <p className="mt-10 text-gray-400 text-lg uppercase tracking-widest font-light leading-relaxed">
              We are a specialized media and technology hub. Aerial Vision bridges the gap between high-end cinematic drone production and the future of unmanned aerial development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1473960236041-7c505555d045?auto=format&fit=crop&w=1000&q=80" 
                alt="Drone Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-6 -left-6 w-48 h-48 border-b-2 border-l-2 border-[#BFA388] hidden md:block z-[-1] origin-left" 
            />
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

      {/* 3. CORE PILLARS */}
      <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <ValueCard icon={<Target className="text-[#BFA388]" size={32} />} title="Precision Shoots" desc="Specializing in 4K HDR cinematography for commercial ads, real estate, and cultural festivals." />
          <ValueCard icon={<Cpu className="text-[#BFA388]" size={32} />} title="Drone R&D" desc="We don't just fly; we develop. Innovating custom FPV and cinematic builds for creative production." />
          <ValueCard icon={<Award className="text-[#BFA388]" size={32} />} title="Elite Certification" desc="Operating with full legal compliance and safety standards as recognized Tamil Nadu aerial experts." />
          <ValueCard icon={<Box className="text-[#BFA388]" size={32} />} title="Future Ready" desc="Pioneering the expansion of drone technology into toys, hobby kits, and industrial documentation." />
        </motion.div>
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

      {/* 5. TEAM SECTION */}
      <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">The Creative Unit</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter serif mt-4 text-white leading-tight">
            Aerial Visionaries <br /> <span className="text-[#BFA388]">Behind the Skies</span>
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.4em] mt-6 max-w-2xl leading-relaxed">
            A collective of engineers and filmmakers dedicated to pushing the boundaries of aerial visual production and hardware innovation.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#0A0A0A] border border-white/10 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                  <p className="text-[#BFA388] text-[9px] uppercase tracking-[0.3em] font-black mb-2 translate-y-0 opacity-100 transition-all duration-500 group-hover:text-white">
                    {member.role}
                  </p>
                  <h3 className="text-white text-xl font-bold uppercase tracking-widest serif leading-none">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
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