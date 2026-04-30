import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VisualStories = () => {
  const portfolioItems = [
    {
      id: "01.",
      title: "Wedding Shoot",
      category: "TRADITION SHOOT",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      gridSpan: "md:col-span-2 md:row-span-1"
    },
    {
      id: "02.",
      title: "Portrait Shoot",
      category: "CREATIVE PORTRAITS",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      // SIZE INCREASED: Spans 2 columns (Wide)
      gridSpan: "md:col-span-2 md:row-span-1" 
    },
    {
      id: "03.",
      title: "Couple Sessions",
      category: "COUPLE SESSIONS",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
      gridSpan: "md:col-span-1 md:row-span-2" 
    },
    {
      id: "04.",
      title: "Baby Stories",
      category: "BABY STORIES",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
      // SIZE INCREASED: Spans 2 rows (Tall)
      gridSpan: "md:col-span-1 md:row-span-2"
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            Visual <br /> Stories
          </motion.h2>
          
         <Link to="/portfolio">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="border border-white/30 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
  >
    See Our Portfolio
  </motion.button>
</Link>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden ${item.gridSpan}`}
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Top Text (ID and Category) */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                <span className="text-white/80 text-sm font-bold tracking-widest">{item.id}</span>
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
              </div>

              {/* Bottom Text (Title) */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-[#BFA388]">
                  {item.title}
                </h3>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[10px] border-white/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisualStories;