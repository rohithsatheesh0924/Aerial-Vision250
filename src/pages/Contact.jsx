import React from 'react';
import { motion } from 'framer-motion';
import { Info, Mail, MapPin, Phone, Instagram, Youtube, MessageCircle, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-x-hidden" id="contact">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <div className="relative h-[400px] w-full overflow-hidden border border-white/5 shadow-2xl">
          {/* Background Image - Original Color */}
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80" 
            alt="Drone Pilot at work" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          
          <div className="absolute bottom-12 left-8 md:left-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] text-[#BFA388] font-bold"
            >
              Get In Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter serif leading-none mt-4"
            >
              Start Your <br /> <span className="text-[#BFA388]">Journey.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT - SPLIT LAYOUT */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-black uppercase tracking-widest serif mb-8 border-b border-[#BFA388]/30 pb-4">
                Office Info
              </h2>
              
              <div className="space-y-8">
                <ContactDetail 
                  icon={<MapPin className="text-[#BFA388]" size={20} />} 
                  title="Location" 
                  content="Karur, Tamil Nadu, India" 
                />
                <ContactDetail 
                  icon={<Phone className="text-[#BFA388]" size={20} />} 
                  title="Phone" 
                  content="+91 81481 67943" 
                />
                <ContactDetail 
                  icon={<Mail className="text-[#BFA388]" size={20} />} 
                  title="Email" 
                  content="aerialvision250@gmail.com" 
                />
                <ContactDetail 
                  icon={<Clock className="text-[#BFA388]" size={20} />} 
                  title="Business Hours" 
                  content="Mon - Sun: 09:00 AM - 08:00 PM" 
                />
              </div>
            </motion.div>

            {/* Social Links Module */}
            <div className="pt-8">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
                Direct Connect
              </h3>
              
              <div className="flex gap-4">
                {/* Instagram Link */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center border border-white/10 text-white p-3 hover:bg-[#BFA388] hover:text-black transition-all duration-300 group"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={16} className="transition-transform group-hover:scale-110" />
                </a>

                {/* YouTube Link */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center border border-white/10 text-white p-3 hover:bg-[#BFA388] hover:text-black transition-all duration-300 group"
                  aria-label="YouTube Channel"
                >
                  <Youtube size={16} className="transition-transform group-hover:scale-110" />
                </a>

                {/* WhatsApp Direct Chat Link */}
                <a 
                  href="https://wa.me/918148167943" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center border border-white/10 text-white p-3 hover:bg-[#BFA388] hover:text-black transition-all duration-300 group"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-widest serif mb-4">
                Booking Inquiry
              </h2>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em]">
                Please fill the form below. We usually respond within 24 hours.
              </p>
            </div>
            
            {/* Calling the ContactForm Component */}
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
};

// Helper Component for Contact Details
const ContactDetail = ({ icon, title, content }) => (
  <div className="flex items-start gap-4 group">
    <div className="p-3 bg-[#0A0A0A] border border-white/5 group-hover:border-[#BFA388]/50 transition-all">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#BFA388] font-bold mb-1">{title}</h4>
      <p className="text-sm text-white/90 uppercase tracking-widest leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Contact;