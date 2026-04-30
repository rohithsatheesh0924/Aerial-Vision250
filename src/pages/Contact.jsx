import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
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
                  content="+91 [Your Number]" 
                />
                <ContactDetail 
                  icon={<Mail className="text-[#BFA388]" size={20} />} 
                  title="Email" 
                  content="hello@peacocksnaps.com" 
                />
                <ContactDetail 
                  icon={<Clock className="text-[#BFA388]" size={20} />} 
                  title="Business Hours" 
                  content="Mon - Sun: 09:00 AM - 08:00 PM" 
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-8">
               <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-6">Direct Connect</h3>
               <div className="flex gap-4">
                  {['Instagram', 'Youtube', 'WhatsApp'].map((social) => (
                    <button key={social} className="text-xs uppercase tracking-widest font-black border border-white/10 px-4 py-2 hover:bg-[#BFA388] hover:text-black transition-all">
                      {social}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-widest serif mb-4">
                Booking Inquiry
              </h2>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                Please fill the form below. We usually respond within 24 hours.
              </p>
            </div>
            
            {/* Calling the ContactForm Component we created earlier */}
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
      <p className="text-sm text-gray-300 uppercase tracking-widest leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Contact;