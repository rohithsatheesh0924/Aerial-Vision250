import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Loader2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(); // Required by EmailJS to capture form state accurately
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", mobile: "",
    service: "", date: "", time: "", location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.service) {
      Swal.fire({
        icon: "warning", 
        title: "Selection Required",
        text: "Please choose a professional service tier before initiating booking.",
        confirmButtonColor: "#BFA388", 
        background: "#050505", 
        color: "#fff"
      });
      return;
    }

    setLoading(true);

    const SERVICE_ID = "service_4whaxqi";
    const TEMPLATE_ID = "template_acl0onk";
    const PUBLIC_KEY = "nu56spVqPFU9I0ArF";

    try {
      // Passes the fully validated DOM form element directly to EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitted(true);
        Swal.fire({
          icon: "success", 
          title: "Inquiry Sent",
          text: "Our cinematic team will contact you shortly.",
          confirmButtonColor: "#BFA388", 
          background: "#050505", 
          color: "#fff"
        });
        
        // Reset form data state upon successful delivery
        setFormData({
          firstName: "", lastName: "", email: "", mobile: "",
          service: "", date: "", time: "", location: ""
        });
      }
    } catch (error) {
      console.error("EmailJS Error details:", error);
      Swal.fire({
        icon: "error", 
        title: "Submission Failed",
        text: "Please check your dashboard configurations and try again.",
        confirmButtonColor: "#BFA388", 
        background: "#050505", 
        color: "#fff"
      });
    } finally {
      setLoading(false);
    }
  };

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
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFA388]/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form 
            ref={formRef}
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
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-bold ml-1">Direct Contact *</label>
              <div className="flex group">
                <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 border-r-0 px-5 transition-all group-within:border-[#BFA388]">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto opacity-80" />
                  <span className="text-white text-[10px]">▼</span>
                </div>
                <input 
                  required 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  type="tel" 
                  placeholder="98765 43210" 
                  className="w-full bg-[#0A0A0A] border border-white/10 p-5 text-white focus:outline-none focus:border-[#BFA388] transition-all placeholder:text-gray-700 text-sm tracking-widest" 
                />
              </div>
            </motion.div>

            {/* Row 4: Services */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-bold ml-1 group-focus-within:text-[#BFA388] transition-colors">Service Tier *</label>
              <div className="relative w-full">
                <select 
                  required
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  className="w-full bg-[#0A0A0A] border border-white/10 p-5 pr-12 text-white focus:outline-none focus:border-[#BFA388] transition-all cursor-pointer appearance-none text-sm tracking-widest rounded-none"
                >
                  <option value="" className="bg-black text-white/40">Select Category</option>
                  <option value="Commercial Ads" className="bg-[#0A0A0A] text-white py-4">Commercial / Ads Production</option>
                  <option value="Cinematic Wedding Shoot" className="bg-[#0A0A0A] text-white py-4">Cinematic Wedding Shoot</option>
                  <option value="Temple Festival Coverage" className="bg-[#0A0A0A] text-white py-4">Temple Festival Coverage</option>
                  <option value="Real Estate Marketing" className="bg-[#0A0A0A] text-white py-4">Real Estate Marketing</option>
                  <option value="Monthly Service Documentation" className="bg-[#0A0A0A] text-white py-4">Monthly Service Documentation</option>
                  <option value="Family Functions" className="bg-[#0A0A0A] text-white py-4">Family Functions Overview</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-focus-within:text-[#BFA388] transition-colors">
                  <ChevronDown size={16} />
                </div>
              </div>
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
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(191,163,136,0.3)" }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full bg-[#BFA388] text-black py-5 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
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
            <p className="text-white/80 uppercase tracking-[0.3em] text-[10px] mb-12 max-w-sm mx-auto leading-relaxed">Your request has been logged. Our lead cinematographer will review the details and reach out within 24 hours.</p>
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

// Reusable Input Sub-component (Fixed to cleanly pass name down to DOM)
const InputField = ({ label, name, ...props }) => (
  <div className="flex flex-col gap-3 group">
    <label className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-bold ml-1 group-focus-within:text-[#BFA388] transition-colors">{label} *</label>
    <input 
      name={name}
      {...props}
      className={`w-full bg-[#0A0A0A] border border-white/10 p-5 text-white focus:outline-none focus:border-[#BFA388] transition-all placeholder:text-gray-700 text-sm tracking-widest ${props.className || ""}`} 
    />
  </div>
);

export default ContactForm;