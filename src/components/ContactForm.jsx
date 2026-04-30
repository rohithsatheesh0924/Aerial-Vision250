import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Loader2, Sparkles } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", mobile: "",
    service: "- Select -", date: "", time: "", location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/submit-inquiry", formData);
      if (response.status === 200 || response.data.success) {
        setSubmitted(true);
        Swal.fire({
          icon: "success", title: "Inquiry Sent",
          text: "Our cinematic team will contact you shortly.",
          confirmButtonColor: "#BFA388", background: "#050505", color: "#fff"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error", title: "Submission Failed",
        text: "Please check your connection and try again.",
        confirmButtonColor: "#BFA388", background: "#050505", color: "#fff"
      });
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      id="contact-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full max-w-4xl mx-auto bg-[#050505] p-8 md:p-16 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] scroll-mt-32 relative overflow-hidden"
    >
      {/* Decorative Brand Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFA388]/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form 
            key="form"
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.3 } }}
            onSubmit={handleSubmit} 
            className="space-y-10 relative z-10"
          >
            {/* Form Header */}
            <motion.div variants={itemVariants} className="mb-12">
             
              <h2 className="text-4xl font-black uppercase tracking-tighter serif text-white">Contact <span className="text-[#BFA388]">US</span></h2>
            </motion.div>

            {/* Row 1: Names */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Murali" required />
              <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Krishna" required />
            </motion.div>

            {/* Row 2: Email */}
            <motion.div variants={itemVariants}>
              <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="hello@studio.com" required />
            </motion.div>

            {/* Row 3: Mobile */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Direct Contact *</label>
              <div className="flex group">
                <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 border-r-0 px-5 transition-all group-within:border-[#BFA388]/50">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto opacity-80" />
                  <span className="text-white text-xs">▼</span>
                </div>
                <input 
                  required name="mobile" value={formData.mobile} onChange={handleChange} 
                  type="tel" placeholder="98765 43210" 
                  className="w-full bg-[#0A0A0A] border border-white/10 p-5 text-white focus:outline-none focus:border-[#BFA388] transition-all placeholder:text-gray-700 text-sm tracking-widest" 
                />
              </div>
            </motion.div>

            {/* Row 4: Services */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Service Tier *</label>
              <select 
                name="service" value={formData.service} onChange={handleChange} 
                className="w-full bg-[#0A0A0A] border border-white/10 p-5 text-white focus:outline-none focus:border-[#BFA388] transition-all cursor-pointer appearance-none text-sm tracking-widest"
              >
                <option className="bg-black text-white">- Select Category -</option>
                <option className="bg-black text-white">Cinematic Wedding Shoot</option>
                <option className="bg-black text-white">Temple Festival Coverage</option>
                <option className="bg-black text-white">Real Estate Marketing</option>
                <option className="bg-black text-white">Corporate Event Analytics</option>
              </select>
            </motion.div>

            {/* Row 5: Date & Time */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Preferred Date" name="date" value={formData.date} onChange={handleChange} type="date" className="[color-scheme:dark]" required />
              <InputField label="Preferred Time" name="time" value={formData.time} onChange={handleChange} type="time" className="[color-scheme:dark]" required />
            </motion.div>

            {/* Row 6: Location */}
            <motion.div variants={itemVariants}>
              <InputField label="Shoot Location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Salem, Tamil Nadu" required />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(191,163,136,0.2)" }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full bg-[#BFA388] text-black py-6 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <>Initiate Booking <Send size={14} /></>}
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 text-center"
          >
            <div className="relative inline-block mb-10">
              <CheckCircle2 size={100} className="text-[#BFA388] relative z-10" />
              <div className="absolute inset-0 bg-[#BFA388]/20 blur-3xl rounded-full" />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter serif mb-4 text-white">Mission Received</h3>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mb-12 max-w-sm mx-auto leading-relaxed">Your request has been logged. Our lead cinematographer will review the details and reach out within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="group text-[#BFA388] text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:text-white"
            >
              <span className="border-b border-[#BFA388] group-hover:border-white pb-1">Submit New Inquiry</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Reusable Professional Input Sub-component
const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-3 group">
    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1 group-focus-within:text-[#BFA388] transition-colors">{label} *</label>
    <input 
      {...props}
      className={`w-full bg-[#0A0A0A] border border-white/10 p-5 text-white focus:outline-none focus:border-[#BFA388] transition-all placeholder:text-gray-700 text-sm tracking-widest ${props.className || ""}`} 
    />
  </div>
);

export default ContactForm;