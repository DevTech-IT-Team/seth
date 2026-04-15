import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiActivity, FiLayers, FiCheckCircle, FiShield, FiTrendingUp, FiUsers, FiSearch } from 'react-icons/fi';

import trainingImage from '../assets/Prep 1.jpg';
import backOfficeImage from '../assets/backoffice-2.jpg';
import paperworkImage from '../assets/Paperwork 3.jpg';
import prepImage from '../assets/Prep 2.jpg';
import meetingImage1 from '../assets/Meeting 1.jpg';
import meetingImage2 from '../assets/Meeting 2.jpg';
import standardsImage from '../assets/Standards 4.jpg';


const Services = () => {
  const [activeArea, setActiveArea] = useState(0);

  const serviceAreas = [
    {
      icon: <FiLayers />,
      title: "Systems Advisory",
      focus: "Structural Level",
      description: "Clarifying how the business functions at its core through modeling and refined process design.",
      items: ["Operational modeling", "Cost structure analysis", "Process design and refinement"],
      image: paperworkImage,
      position: "top-left"
    },
    {
      icon: <FiActivity />,
      title: "Operational Optimization",
      focus: "Day-to-Day Execution",
      description: "Improving efficiency through labor alignment and deep-dive workflow analysis.",
      items: ["Workflow analysis", "Labor alignment", "Inventory and cost control"],
      image: prepImage,
      position: "top-right"
    },
    {
      icon: <FiTarget />,
      title: "Workforce Development",
      focus: "Internal Capability",
      description: "Building internal capability through structured training and AI-assisted course design.",
      items: ["Training system design", "AI-assisted course development", "Internal knowledge frameworks"],
      image: meetingImage1,
      position: "bottom-right"
    },
    {
      icon: <FiCheckCircle />,
      title: "Implementation",
      focus: "Systems in Practice",
      description: "Translating theoretical systems into daily practice through rollout and performance tracking.",
      items: ["Systems rollout", "Integration into operations", "Performance tracking and refinement"],
      image: standardsImage,
      position: "bottom-left"
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-col bg-white selection:bg-accent/20">
      
      {/* 1. OPENING FRAME: The Problem Reframe */}
      <header 
        className="relative pt-32 pb-32 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backOfficeImage})` }}
      >
        {/* Neutral Background Overlay for Max Clarity */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">The Perspective</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.2] lg:leading-[1.05] text-white mb-8 tracking-tighter"
            >
              Performance is not a staffing problem— <br />
              <span className="text-accent italic font-light">it is a systems problem.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed font-body italic border-l-2 border-accent/20 pl-8"
            >
              Most foodservice businesses operate under constant pressure. Without a defined system, performance becomes dependent on effort rather than design.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Structural Realities Cards */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 -mt-12 md:-mt-24 mb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Realities Card 1: White */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-neutral/5 group transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary text-xl mb-8">
                <FiActivity />
              </div>
              <p className="text-primary font-bold text-lg leading-snug mb-4">Inconsistent <br/>Operational Processes</p>
              <p className="text-neutral/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Lack of Standardized Workflow</p>
            </motion.div>

            {/* Realities Card 2: Gold */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(194, 164, 109, 0.3)"
              }}
              className="bg-accent p-10 rounded-[2.5rem] shadow-2xl shadow-accent/20 group transition-all duration-500 text-primary cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-8">
                <FiTrendingUp />
              </div>
              <p className="font-bold text-lg leading-snug mb-4">Unclear Cost & <br/>Resource Drivers</p>
              <p className="text-primary/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Obscured Profit Leaks</p>
            </motion.div>

            {/* Realities Card 3: Deep Blue-Grey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
              }}
              className="bg-[#334E5E] p-10 rounded-[2.5rem] shadow-2xl shadow-black/10 text-white group transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent text-xl mb-8">
                <FiTarget />
              </div>
              <p className="font-bold text-lg leading-snug mb-4">Fragmented & <br/>Reactive Training</p>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">Knowledge Depth Gap</p>
            </motion.div>

          </div>
        </div>

      {/* 2. WHAT WE DO: The Solution Definition */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl font-headline italic text-primary mb-8 tracking-tighter leading-tight">
                We design systems that determine how food businesses operate, train, and perform.
              </h2>
              <p className="text-lg text-neutral/50 font-body leading-relaxed border-l-4 border-accent pl-10 py-2">
                Culinary Provision Group provides structured advisory focused on aligning operations, financial clarity, and workforce capability into a cohesive model.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={trainingImage} 
                alt="Operational Prep" 
                className="relative z-10 rounded-[2rem] shadow-2xl  border-background hover:scale-[1.02] transition-transform duration-700 w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE AREAS: Functional Domains - Redesigned Circular UI */}
      <section className="py-20 bg-[#FBFAF8] relative overflow-hidden hidden lg:block">

        {/* Background Dot Grid */}
        <div 
          className="absolute inset-x-0 top-0 h-full opacity-[0.03] pointer-events-none z-0"
          style={{ 
            backgroundImage: `radial-gradient(circle, #1A1A1A 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Organic Blobs */}
        <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">Core Service Areas</span>
              <span className="w-8 h-[1px] bg-accent"></span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-headline italic text-primary tracking-tighter"
            >
              Functional Domains of Advisory
            </motion.h2>
          </div>

          <div className="relative h-[700px] flex items-center justify-center">

            {/* Central Large Image with Floating Animation */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                scale: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1 }
              }}
              className="relative z-20 w-[500px] h-[500px] rounded-full border-[1rem] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
            >
              <img 
                src={meetingImage2} 
                className="w-full h-full object-cover grayscale-[0.3] scale-110" 
                alt="Advisory Center" 
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </motion.div>

            {/* Service Area Points */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {serviceAreas.map((area, index) => {
                const positions = {
                  "top-left": { 
                    container: "top-[1%] left-[0%]", 
                    flex: "flex-row-reverse", 
                    textAlign: "text-right",
                    line: "right-[-40px] top-1/2 w-32", 
                    dot: "right-0" 
                  },
                  "top-right": { 
                    container: "top-[1%] right-[0%]", 
                    flex: "flex-row", 
                    textAlign: "text-left",
                    line: "left-[-40px] top-1/2 w-32", 
                    dot: "left-0" 
                  },
                  "bottom-right": { 
                    container: "bottom-[1%] right-[0%]", 
                    flex: "flex-row", 
                    textAlign: "text-left",
                    line: "left-[-40px] top-1/2 w-32", 
                    dot: "left-0" 
                  },
                  "bottom-left": { 
                    container: "bottom-[1%] left-[0%]", 
                    flex: "flex-row-reverse", 
                    textAlign: "text-right",
                    line: "right-[-40px] top-1/2 w-32", 
                    dot: "right-0" 
                  }
                };
                const p = positions[area.position];

                return (
                  <div key={index} className={`absolute ${p.container} w-[500px] pointer-events-auto`}>
                    <motion.div 
                      initial={{ opacity: 0, x: area.position.includes('left') ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className={`flex ${p.flex} items-center gap-12 group`}
                    >
                      {/* Node Image */}
                      <div className="relative shrink-0">
                        <div className="w-44 h-44 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 cursor-pointer group-hover:scale-105 transition-all duration-700">
                          <img src={area.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt={area.title} />
                          <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-4xl">
                            {area.icon}
                          </div>
                        </div>
                        {/* Connecting Line */}
                        <div className={`absolute ${p.line} h-[1px] bg-neutral-200 pointer-events-none hidden xl:block z-0 transform -translate-y-1/2`}>
                          <div className={`absolute ${p.dot} top-[-3px] w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(194,164,109,0.5)]`} />
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className={`${p.textAlign} flex-grow max-w-sm`}>
                        <div className="mb-4">
                          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent italic opacity-70 mb-2 block">Domain 0{index + 1}</span>
                          <h3 className="text-3xl font-headline italic text-primary leading-tight mb-1 group-hover:text-accent transition-colors duration-500">{area.title}</h3>
                          <div className={`h-[1px] w-12 bg-accent/20 mb-3 ${area.position.includes('left') ? 'ml-auto' : 'mr-auto'}`} />
                          <p className="text-[9px] font-black uppercase tracking-widest text-primary/40">Focus: {area.focus}</p>
                        </div>
                        
                        <p className="text-base text-neutral/60 font-body leading-relaxed mb-6 italic">
                          "{area.description}"
                        </p>

                        <div className={`flex flex-wrap gap-x-4 gap-y-2 ${area.position.includes('right') ? 'justify-start' : 'justify-end'}`}>
                          {area.items.map((item, idx) => (
                            <span key={idx} className="text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors duration-500">
                              <FiCheckCircle className="text-accent/40 group-hover:text-accent w-2.5 h-2.5" /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Mobile-Friendly Fallback for CORE SERVICE AREAS */}
      <section className="py-24 bg-neutral/5 lg:hidden relative">
        <div className="container mx-auto px-8">
          <div className="space-y-8">
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[2.5rem] border border-neutral/10"
              >
                 <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl text-accent">
                    {area.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase italic text-accent opacity-30">Domain 0{index + 1}</span>
                </div>
                <h3 className="text-3xl mb-1 font-headline italic text-primary">{area.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest mb-6 italic text-accent">Focus: {area.focus}</p>
                <p className="text-neutral/60 text-lg leading-relaxed mb-6 font-body">
                  {area.description}
                </p>
                <div className="pt-6 border-t border-neutral/5 grid grid-cols-1 gap-3">
                  {area.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-primary/70 uppercase tracking-widest">
                      <FiArrowRight className="text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. ENGAGEMENT MODEL: Methodology - Redesigned to Horizontal Process Flow */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-100 -translate-y-12 hidden md:block" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6"
            >
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Engagement Model</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-headline italic text-primary tracking-tighter mb-8"
            >
              Our Engagement <span className="text-accent not-italic font-light">Methodology</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral/50 font-body leading-relaxed italic"
            >
              Every engagement begins with a structured assessment. From there: system design, workforce alignment, and ongoing performance governance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {[
              { label: "Assessment Engagements", type: "Discovery", icon: <FiSearch />, desc: "A 360-degree deep dive into current operational bottlenecks." },
              { label: "Systems Optimization", type: "Architecture", icon: <FiLayers />, desc: "Designing structured workflows and labor alignment models." },
              { label: "Training & Workforce", type: "Scale", icon: <FiTrendingUp />, desc: "Embedding capability through AI-assisted course design." },
              { label: "Ongoing Advisory", type: "Continuity", icon: <FiActivity />, desc: "Continuous refinement and performance tracking." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Step Icon Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center text-primary text-2xl md:text-3xl shadow-xl shadow-accent/20 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 md:w-10 md:h-10 bg-primary text-accent rounded-full border-2 md:border-4 border-white flex items-center justify-center text-[9px] md:text-[10px] font-black italic">
                    0{i+1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[9px] font-black tracking-widest uppercase text-accent mb-1 block group-hover:tracking-[0.3em] transition-all duration-500">Phase: {item.type}</span>
                    <h4 className="text-xl md:text-2xl font-headline italic text-primary leading-tight group-hover:text-accent transition-colors duration-500">{item.label}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-neutral/40 font-body leading-relaxed md:max-w-[220px] mx-auto">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Line (Only for larger tablets and screens) */}
                <div className="absolute top-10 md:top-12 -right-4 lg:-right-6 w-8 md:w-12 h-px bg-neutral-200 hidden lg:block group-last:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. DIFFERENTIATION & TRAINING: Integrated Philosophy - Redesigned to Premium Card UI */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            
            {/* Left: The "Measured Approach" Overlapping Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              {/* Ghost Border Effect */}
              <div className="absolute top-8 left-8 -right-4 -bottom-4 border border-accent/20 rounded-[4rem] z-0" />
              
              {/* Main Card */}
              <div className="relative z-10 p-16 bg-[#F6F3EF] rounded-[4rem] shadow-2xl shadow-black/5 border border-white">
                <div className="mb-12">
                  <span className="text-accent text-5xl font-serif italic absolute top-10 right-14 opacity-20">"</span>
                  <h3 className="text-3xl md:text-4xl font-headline italic text-primary leading-[1.15] tracking-tight">
                    The firm focuses on improving how businesses <span className="text-accent">operate, train, and scale</span> through systems.
                  </h3>
                </div>
                
                <div className="space-y-4 pt-10 border-t border-accent/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-4">Core Alignment Vectors:</p>
                  {[["Operations", <FiActivity />], ["Financial Structure", <FiTrendingUp />], ["Workforce Performance", <FiUsers />]].map(([text, icon], idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                      <span className="text-accent text-lg">{icon}</span> {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Refined Typographic Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div>
                <span className="text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-6 block">Capability Scaling</span>
                <h2 className="text-5xl md:text-7xl font-headline italic text-primary mb-10 tracking-tighter leading-tight">
                  Training is not <br /> an add-on— <span className="text-accent not-italic font-light">it is scale.</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="pl-10 border-l border-neutral-200 py-2">
                  <p className="text-xl text-neutral/60 font-body leading-relaxed italic">
                    Most improvements fail because they are isolated—menu changes or staffing shifts. These are temporary. Consistent results require integrated systems.
                  </p>
                </div>
                
                <p className="text-lg text-neutral/40 leading-relaxed font-body max-w-2xl">
                  Training is integrated into the operational system. Standardisation, consistency, and reduced friction are outputs—not goals. Every decision becomes structural, not situational.
                </p>

                <div className="pt-8">
                  <div className="h-px w-24 bg-accent/30" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 rounded-full blur-[150px] scale-150 z-0" />
        
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Engagement Start</span>
          <h2 className="text-5xl md:text-6xl font-headline italic text-white mb-10 tracking-tighter leading-tight">
            Start with a <br />
            <span className="not-italic text-accent font-light">Structured Assessment.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 italic font-body">
            Every engagement begins with a precise map of where the business stands operationally. From there, the path is structural.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl">
            Request a Consultation
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;