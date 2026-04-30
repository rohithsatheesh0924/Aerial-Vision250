import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Zap, Crown, Star, Camera, Landmark, Repeat } from 'lucide-react';
import { NavHashLink as HashLink } from 'react-router-hash-link';

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      icon: <Star className="text-[#BFA388]" size={28} />,
      price: "₹10,000",
      duration: "2-3 Hours Shooting",
      features: [
        "1-2 Minutes Edited Video",
        "4K Raw & Edited Quality",
        "10-15 Professional Photos",
        "Cinematic Color & Music",
        "Up to 2 Locations"
      ],
      recommended: false
    },
    {
      name: "Premium",
      icon: <Zap className="text-[#BFA388]" size={28} />,
      price: "₹20,000",
      duration: "Half / Full Day",
      features: [
        "3-5 Minutes Cinematic Film",
        "Advanced Color Grading",
        "Social Media Reels Included",
        "Unlimited Locations",
        "Fast-Track Delivery"
      ],
      recommended: true
    },
    {
      name: "Commercial",
      icon: <Crown className="text-[#BFA388]" size={28} />,
      price: "₹30,000",
      duration: "Full Production",
      features: [
        "Concept & Idea Planning",
        "Business Promotion Focus",
        "Multi-Location Narrative",
        "Optimized for Ads/YT/Insta",
        "High-End Visual Identity"
      ],
      recommended: false
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold"
        >
          Aerial Vision Investment
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter serif mt-6"
        >
          Strategic <br /> <span className="text-[#BFA388]">Pricing.</span>
        </motion.h1>
        <p className="mt-8 text-gray-500 uppercase tracking-widest text-xs max-w-xl mx-auto font-light">
          High-quality cinematic drone services tailored for events, real estate, and commercial growth.
        </p>
      </section>

      {/* 2. MAIN PRICING CARDS */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-10 border transition-all duration-500 group ${
              plan.recommended 
                ? 'bg-[#0A0A0A] border-[#BFA388] shadow-[0_0_40px_rgba(191,163,136,0.15)]' 
                : 'bg-[#050505] border-white/10 hover:border-white/20'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BFA388] text-black px-4 py-1 text-[9px] font-black uppercase tracking-widest">
                Most Versatile
              </div>
            )}

            <div className="mb-8">{plan.icon}</div>
            <h3 className="text-2xl font-black uppercase tracking-widest mb-2 serif">{plan.name}</h3>
            <p className="text-[#BFA388] text-[10px] uppercase tracking-[0.2em] mb-6 font-bold">{plan.duration}</p>
            
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">+</span>
            </div>

            <ul className="space-y-4 mb-12">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest font-light">
                  <Check size={14} className="text-[#BFA388]" />
                  {feat}
                </li>
              ))}
            </ul>

            <HashLink smooth to="/contact#contact-form" className="w-full">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                  plan.recommended 
                    ? 'bg-[#BFA388] text-black hover:bg-white shadow-[0_10px_20px_rgba(191,163,136,0.2)]' 
                    : 'border border-white/20 text-white hover:bg-white hover:text-black'
                }`}
              >
                Inquire Now
              </motion.button>
            </HashLink>
          </motion.div>
        ))}
      </section>

      {/* 3. OTHER SERVICES GRID */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <h2 className="text-xl font-black uppercase tracking-widest mb-12 text-center serif text-white/50">Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OtherServiceCard icon={<Camera size={20}/>} title="Wedding Drone" price="₹15k - ₹30k" />
          <OtherServiceCard icon={<Landmark size={20}/>} title="Real Estate" price="₹8k - ₹20k" />
          <OtherServiceCard icon={<Repeat size={20}/>} title="Monthly Service" price="₹15k - ₹30k" />
        </div>
      </section>

      {/* 4. IMPORTANT NOTES */}
     <section className="px-6 md:px-10 max-w-4xl mx-auto mb-32 p-12 bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
  {/* Subtle Background Accent */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-[#BFA388] opacity-[0.02] blur-[100px]"></div>

  <div className="flex items-center gap-4 mb-10">
    <div className="p-2 bg-[#BFA388]/10 rounded-full">
      <Info size={18} className="text-[#BFA388]" />
    </div>
    <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-[#BFA388] serif">
      Operational Protocols & Terms
    </h4>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.2em] leading-loose font-light">
    <div className="space-y-6">
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>A 50% non-refundable advance is required to secure your date in our production calendar.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Travel, on-site accommodation, and necessary police/local permissions are billed as additional costs.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Unedited raw footage is available upon request and must be collected via client-provided storage.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Flight operations are strictly subject to weather conditions and airspace regulations (No-Fly Zones).</span>
      </p>
    </div>

    <div className="space-y-6">
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Final cinematic delivery timelines vary (7-14 days) based on the specific complexity of post-production.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>In the event of technical grounding due to rain or high winds, sessions will be rescheduled at no extra cost.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Aerial Vision retains the right to use captured media for studio portfolio and promotional purposes.</span>
      </p>
      <p className="flex items-start gap-3">
        <span className="text-[#BFA388] font-bold">•</span>
        <span>Balance payment must be settled in full upon completion of the shoot, prior to final edited delivery.</span>
      </p>
    </div>
  </div>
</section>

      {/* 5. CONTACT / CALL TO ACTION */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center border-t border-white/5 pt-20">
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 serif text-white">Direct <span className="text-[#BFA388]">Consultation</span></h2>
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">aerialvision250@gmail.com | +91 81481 67943</p>
      </section>

    </div>
  );
};

// Helper Components
const OtherServiceCard = ({ icon, title, price }) => (
  <div className="p-6 bg-[#0A0A0A] border border-white/5 flex items-center justify-between hover:border-[#BFA388]/30 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-[#BFA388]">{icon}</div>
      <span className="text-[11px] font-bold uppercase tracking-widest">{title}</span>
    </div>
    <span className="text-[#BFA388] text-[11px] font-black">{price}</span>
  </div>
);

export default Pricing;