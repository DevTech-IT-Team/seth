import { FiTarget, FiShield, FiBarChart, FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import heroBg from '../assets/Kitchen Counter 1.jpg';
import bentoImg1 from '../assets/Prep 2.jpg';
import bentoImg2 from '../assets/Standards 1.jpg';
import bentoImg3 from '../assets/Meeting 1.jpg';
import bentoImg4 from '../assets/Standards 6.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rotatingImageIndex, setRotatingImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  
  const rotatingImages = [bentoImg1, bentoImg2, bentoImg3, bentoImg4];
  
  const tabs = [
    { 
      label: 'Advisory-focused', 
      image: bentoImg1, 
      text: 'Embedded alongside leadership. Defining structural goals with a clear view of operational reality.' 
    },
    { 
      label: 'Systems-driven', 
      image: bentoImg3, 
      text: 'Results that hold are built on repeatable structure—not on repeated effort.' 
    },
    { 
      label: 'Measurable Outcomes', 
      image: bentoImg4, 
      text: 'Engagements are measured against operational performance—not activity or effort.' 
    }
  ];
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20">
      
      {/* 1. HERO: Sophisticated Architectural Hero */}
      <header className="relative min-h-[100vh] flex items-center pt-48 pb-32 overflow-hidden bg-neutral-950">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroBg} 
            alt="About the Firm" 
            className="w-full h-full object-cover"
          />
          
          {/* Architectural Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none">
            <svg width="100%" height="100%">
              <pattern id="grid-pattern-about" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern-about)" />
            </svg>
          </div>

          {/* Neutral Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent z-10" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl lg:-mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">About the Firm</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-[5rem] font-headline leading-[1.2] lg:leading-[1.1] text-white mb-12 tracking-tighter italic"
            >
              Operational clarity <br />
              <span className="text-accent not-italic font-bold">is the only durable foundation.</span><br />
      
            </motion.h1>
          </div>
        </div>

        {/* Decorative architectural line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "12rem" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-24 w-px bg-gradient-to-t from-accent/50 to-transparent hidden md:block" 
        />

        {/* Curved Shape Bottom - Subtle Wave Design */}
        <div className="absolute bottom-0 left-0 right-0 z-40 w-full overflow-hidden leading-none">
          <svg 
            className="w-full h-20" 
            viewBox="0 0 1200 80" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,20 Q300,50 600,20 T1200,20 L1200,80 L0,80 Z" 
              fill="white"
            />
          </svg>
        </div>
      </header>

      {/* 2. VALUES: Interactive Tabbed Interface */}
      <section className="pt-0 pb-16 bg-white relative overflow-hidden border-b border-neutral/5">
        <div className="container mx-auto px-8 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="max-w-xl">
               <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">About us</span>
               <h2 className="text-5xl md:text-6xl font-headline text-primary tracking-tight">
                  Replicable <span className="text-accent italic">Results</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl text-neutral/60 font-body text-sm leading-relaxed">
              <p>
                Long-term advisory. Clear frameworks. Consistent output. These are not aspirations—they are design constraints.
              </p>
              <p>
                Accountability is built into the engagement structure, not added after the fact.
              </p>
            </div>
          </div>

          {/* Interactive Tab Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="grid grid-cols-3 gap-0 p-4 border-b border-primary/10">
              {tabs.map((tab, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative py-6 px-8 font-bold text-sm uppercase tracking-widest transition-all duration-300 border-b-2 ${
                    activeTab === idx 
                      ? 'text-accent border-accent' 
                      : 'text-neutral/50 border-transparent hover:text-primary'
                  }`}
                >
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content - Image and Text */}
            <div className="grid md:grid-cols-2 gap-0 py-12">
              {/* Left: Image */}
              <motion.div
                key={`img-${activeTab}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden min-h-[350px] md:min-h-[450px]"
              >
                <img 
                  src={tabs[activeTab].image} 
                  alt={tabs[activeTab].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Right: Text Content */}
              <motion.div
                key={`text-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-center px-8 md:px-12"
              >
                <div className="mb-12">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Focus Area</span>
                  <h3 className="text-4xl md:text-5xl font-headline text-primary italic mb-8">
                    {tabs[activeTab].label}
                  </h3>
                  <p className="text-lg text-neutral/70 leading-relaxed font-body border-l-4 border-accent pl-8 py-4">
                    {tabs[activeTab].text}
                  </p>
                </div>

                {/* Interactive Progress Indicator */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-neutral/40 font-bold">Our Focus Areas</p>
                  <div className="flex gap-2">
                    {tabs.map((_, idx) => (
                      <motion.div
                        key={idx}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          idx === activeTab 
                            ? 'bg-accent' 
                            : idx < activeTab 
                            ? 'bg-accent/40'
                            : 'bg-neutral/10'
                        }`}
                        layoutId={`progress-${idx}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & FOCUS: Precise Screenshot Replication */}
      <section className="bg-[#FBFAF8] relative overflow-hidden">
        
        {/* Curved Green Banner */}
        <div className="bg-[#4C6444] pt-0 pb-32 rounded-bl-[10rem] relative z-10">
          
          <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center pt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
               <div className="flex items-center gap-2 mb-6">
                 <span className="text-white text-lg">♥</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Structured Advisory. Measurable Outcomes.</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-headline italic mb-8 tracking-tighter">
                 Culinary <br /> <span className="text-accent not-italic font-bold">Provision Group.</span>
               </h2>
               <div className="space-y-6 max-w-lg text-white/70 font-body text-base leading-relaxed">
                 <p>
                   We provide structured advisory focused on aligning operations, financial clarity, and workforce capability into a cohesive model.
                 </p>
                 <p>
                   The goal is not improvement. It is a business that performs consistently without dependency on the engagement.
                 </p>
               </div>
            </motion.div>

            {/* Right Featured Image with specific curvature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[450px] bg-white p-2 rounded-[5rem] rounded-tl-none shadow-3xl overflow-hidden">
                <img src={bentoImg4} className="w-full h-full object-cover rounded-[4.5rem] rounded-tl-none" alt="" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower White Area with Overlapping Card */}
        <div className="container mx-auto px-8 relative z-20 -mt-32 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Overlapping Diagnostic Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
               <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-neutral-100 w-full max-w-sm text-center relative"
               >
                  <div className="absolute top-10 right-10 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-2 h-2 rounded-full bg-accent/20" />
                  </div>
                  
                  <span className="text-[#4C6444] text-[10px] uppercase font-black tracking-widest mb-4 block">Focus Area</span>
                  <h4 className="text-3xl font-headline italic text-primary mb-12">Systems <br/>Design</h4>
                  
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Rotating circular image */}
                    <motion.div 
                      animate={{ rotate: isRotating ? 360 : 0 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10"
                    >
                      <motion.img 
                        key={rotatingImageIndex}
                        src={rotatingImages[rotatingImageIndex]} 
                        className="w-full h-full object-cover"
                        alt="Rotating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Green Circle Click Button */}
                    <motion.button
                      onClick={() => {
                        setRotatingImageIndex((prev) => (prev + 1) % rotatingImages.length);
                        setIsRotating(true);
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute -top-3 right-2 w-16 h-16 bg-[#4C6444] text-white rounded-full shadow-lg flex items-center justify-center z-30 border-4 border-white hover:bg-accent transition-colors duration-300 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiArrowDownRight size={24} />
                      </motion.div>
                    </motion.button>
                  </div>
               </motion.div>
            </div>

            {/* Mission Text Area */}
            <div className="lg:col-span-7 pt-20">
               <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
               >
                 <div className="flex items-center gap-3 mb-6">
                   <span className="text-[#4C6444] text-lg">♥</span>
                   <motion.span 
                     animate={{ letterSpacing: ["0em", "0.1em", "0em"] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="text-[12px] font-black uppercase tracking-[0.4em] text-[#4C6444]"
                   >
                     We Are Committed
                   </motion.span>
                 </div>
                 
                 <h3 className="text-3xl md:text-6xl font-headline italic text-primary mt-12 mb-12 tracking-tighter">
                   Our Mission Statement
                 </h3>
                 
                 {/* Content sections with animated dividers */}
                 <div className="space-y-10 max-w-xl mb-12">
                   {[
                     {
                       text: '"The firm focuses on how businesses operate, train, and scale through systems—not isolated adjustments."',
                       highlight: true
                     },
                     {
                       text: 'Alignment across operations, finance, and training means every decision has a structural basis. The engagement ends. The system does not.',
                       highlight: false
                     }
                   ].map((item, idx) => (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.2 }}
                       className="relative pl-8 py-6 border-l-4 border-accent"
                     >
                       <p className={`font-body text-base leading-relaxed ${item.highlight ? 'italic text-neutral/70' : 'text-neutral/60'}`}>
                         {item.text}
                       </p>
                       <motion.div
                         animate={{ x: [0, 4, 0] }}
                         transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                         className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-accent"
                       />
                     </motion.div>
                   ))}
                 </div>
                 
                 <motion.div
                   whileHover={{ x: 8 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Link to="/contact" className="bg-[#4C6444] text-white px-10 md:px-12 py-5 mt-10 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl shadow-primary/20 inline-flex items-center gap-4 group">
                     Learn More About Us 
                     <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                   </Link>
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Wave Transition (Optional but matches image feel) */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* 6. FINAL CTA: Screenshot Style Horizontal Banner */}
      <section className="relative overflow-hidden bg-white w-full border-none">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[450px]">
          
          {/* Left Content Area - Padded to align with container */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center py-24 px-8 md:pl-[10%] lg:pl-[15%] lg:pr-24 text-left relative z-20 bg-white">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block"
            >
              NEXT STEPS
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-headline tracking-tighter text-primary leading-tight"
            >
              Ready for <br/> 
              <span className="text-accent italic font-light">Operational Clarity?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-neutral/40 max-w-lg mt-6 font-body italic"
            >
              Schedule a primary callback to discuss your current operational structure and performance goals.
            </motion.p>
          </div>

          {/* Right Image Area - Truly Edge to Edge */}
          <div className="w-full lg:w-[45%] relative min-h-[300px] flex items-center justify-center lg:justify-start">
            {/* Diagonal Fade Transition */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block" />
            
            {/* Background Image Container */}
            <div className="absolute inset-0">
              <img src={heroBg} className="w-full h-full object-cover grayscale-[0.3] opacity-80" alt="" />
              <div className="absolute inset-0 bg-primary/5" />
            </div>

            {/* Floating Action Button (Overlapping Position) */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-20 lg:-ml-40"
            >
              <Link to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(194,164,109,0.4)] hover:bg-primary hover:shadow-primary/30 transition-all duration-500 flex items-center gap-4 group">
                Request a Consultation
                <FiArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

     
    </div>
  );
};

export default About;