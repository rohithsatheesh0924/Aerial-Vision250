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
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      accent: "Commercial Impact"
    },
    {
      id: "02",
      title: "Wedding / Marriage",
      price: "₹15,000 - ₹30,000",
      icon: <Camera className="text-[#BFA388]" size={24} />,
      desc: "Capturing the grandeur of your special day from the sky, providing a movie-like dimension to your wedding legacy.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      accent: "Cinematic Grandeur"
    },
    {
      id: "03",
      title: "Temple Festival",
      price: "₹10,000",
      icon: <Tent className="text-[#BFA388]" size={24} />,
      desc: "Documenting the spiritual scale and vibrant cultural colors of temple festivals from a divine aerial perspective.",
      img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      accent: "Spiritual Scale"
    },
    {
      id: "04",
      title: "Real Estate",
      price: "₹8,000 - ₹20,000",
      icon: <Building2 className="text-[#BFA388]" size={24} />,
      desc: "Architectural visuals that highlight property scale and surroundings to create high-impact real estate promotions.",
      img: "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?auto=format&fit=crop&w=1200&q=80",
      accent: "Architectural Precision"
    },
    {
      id: "05",
      title: "Monthly Service",
      price: "₹15,000 - ₹30,000",
      icon: <Repeat className="text-[#BFA388]" size={24} />,
      desc: "Regular monthly shooting for construction progress, institutions, or ongoing documentation projects.",
      img: "https://images.unsplash.com/photo-1532704101643-77510e3f7739?auto=format&fit=crop&w=1200&q=80",
      accent: "Long-term Documentation"
    },
    {
      id: "06",
      title: "Family Functions",
      price: "₹7,000",
      icon: <Users className="text-[#BFA388]" size={24} />,
      desc: "Beautifully captured private moments and group gatherings, ensuring your family memories are truly timeless.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      accent: "Timeless Memories"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold">The Aerial Vision Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter serif mt-6 leading-none">
            Aerial <br /> <span className="text-[#BFA388]">Solutions.</span>
          </h1>
          <p className="mt-8 text-gray-400 text-lg uppercase tracking-widest font-light leading-relaxed">
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
      <section className="mt-20 py-32 bg-[#0A0A0A] border-y border-white/5 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter serif mb-12">
            Elevate <br /> <span className="text-[#BFA388]">Your Vision.</span>
          </h2>
          <HashLink smooth to="/contact#contact-form">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(191,163,136,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#BFA388] text-black px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-2xl"
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