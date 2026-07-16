import React from 'react';
import { motion } from 'framer-motion';
import { NavHashLink as HashLink } from 'react-router-hash-link';

const Portfolio = () => {
 const portfolioItems = [
  {
    id: "01.",
    title: "Real Estate Shoot",
    category: "ARCHITECTURAL AERIALS",
    img:"./img-1 (2).png",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "02.",
    title: "Advertising Campaign",
    category: "COMMERCIAL PRODUCTION",
      img:"./img-1 (7).png",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "03.",
    title: "Marriage Chronicles",
    category: "WEDDING CINEMATOGRAPHY",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    gridSpan: "md:col-span-2 md:row-span-1" // WIDE
  },
  {
    id: "04.",
    title: "Temple Festival",
    category: "CULTURAL SCALE",
    img: "img-1 (4).png",
    gridSpan: "md:col-span-1 md:row-span-2" // TALL
  },
  {
    id: "05.",
    title: "Family Gathering",
    category: "PRIVATE CELEBRATIONS",
    img: "img-1 (8).png",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "06.",
    title: "Events",
    category: "CORPORATE OVERVIEW",
    img: "img-1 (8).png",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "07.",
    title: "Schools and Colleges Functions",
    category: "INSTITUTIONAL DOCUMENTATION",
    img: "./img-1 (6).png",
    gridSpan: "md:col-span-2 md:row-span-1" // WIDE
  }
];
  return (
    <div className="bg-black min-h-screen pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold"
          >
            Our Work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-4"
          >
            Visual <br /> Stories
          </motion.h1>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: (index % 3) * 0.1 }}
              className={`relative group overflow-hidden border border-white/5 shadow-2xl ${item.gridSpan}`}
            >
              {/* Image - Original Colors (Grayscale removed) */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />

              {/* Subtle Dark Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Top Details */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                <span className="text-white text-sm font-bold tracking-widest">{item.id}</span>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:text-[#BFA388] transition-colors duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Professional Thick Border on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-8">Ready to create yours?</h2>
          <HashLink smooth to="/contact#contact-form">
  <motion.button 
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(191,163,136,0.3)" }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#BFA388] text-black px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-xl"
  >
    Book a Session
  </motion.button>
</HashLink>
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;