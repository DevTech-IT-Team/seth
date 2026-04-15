import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiSearch, FiLayers, FiRefreshCw } from 'react-icons/fi';
import ingredientsImage2 from '../assets/Ingredients 2.jpg';
import heroBg from '../assets/Kitchen Counter 3.jpg';
import backoffice4 from '../assets/Backoffice 4.jpg';
import meeting4 from '../assets/Meeting 4.jpg';
import prep4 from '../assets/Prep 4.jpg';
import standards4 from '../assets/Standards 4.jpg';


const Approach = () => {
  const processSteps = [
    {
      num: "01",
      title: "Understand the business",
      description: "A structured review of current state: team dynamics, financial position, and operational design.",
      image: backoffice4,
      side: "right"
    },
    {
      num: "02",
      title: "Identify structural gaps",
      description: "Identifying precisely where effort substitutes for structure—and what that costs.",
      image: meeting4,
      side: "left"
    },
    {
      num: "03",
      title: "Design integrated systems",
      description: "Designing an operational model where systems, operations, and workforce are structurally aligned.",
      image: prep4,
      side: "right"
    },
    {
      num: "04",
      title: "Implement and refine",
      description: "Applying the design. Tracking performance. Refining where the system requires it.",
      image: standards4,
      side: "left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col bg-white selection:bg-accent/20">
      
      {/* 1. HERO: Full Width Background Hero */}
      <header className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden">
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Professional Overlay */}
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        </div>
        
        {/* Background Decorative Grid */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none z-10">
          <svg width="100%" height="100%"><pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-hero)" /></svg>
        </div>
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-4xl">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              {/* <span className="w-12 h-[1px] bg-accent"></span>
              <span className=" text-accent text-[10px] uppercase font-black tracking-[0.5em]">Method & Differentiation</span> */}
            </motion.div>
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-8xl font-headline leading-[1.2] lg:leading-[1.1] text-white mb-10 tracking-tighter italic"
            >
              Integrated <br />
              <span className="text-accent not-italic font-bold">Systems Design</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-body mb-12"
            >
              Most consulting approaches address isolated problems. We design integrated systems. <span className="text-accent font-bold">Performance is a result of structure—not effort.</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="group inline-flex items-center gap-6 bg-accent text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-500 shadow-3xl shadow-black/30">
                Begin the assessment
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wave Shape Divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </header>

      {/* 2. PHILOSOPHY: Colored Icon Cards (Inspired by Screenshot) */}
      <section className="py-10 bg-white relative -mt-[2px]">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
            
                d: "Operations, finance, and workforce performance are not separate functions. Changes in one propagate through all three. We design for that interdependency.",
                icon: <FiLayers className="text-2xl" />,
                color: "bg-primary" // Deep Green
              },
              { 
              
                d: "Synchronisation is not coordination—it is defined operating logic that produces consistent, measurable output across the entire organisation.",
                icon: <FiTarget className="text-2xl" />,
                color: "bg-accent" // Muted Gold
              },
              { 
            
                d: "Output ceilings are structural, not motivational. We redesign the underlying architecture so performance is a design property, not a management effort.",
                icon: <FiRefreshCw className="text-2xl" />,
                color: "bg-neutral" // Charcoal
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`${item.color} p-12 rounded-[2.5rem] flex flex-col items-center text-center text-white shadow-xl transition-colors duration-500 cursor-pointer border-2 border-transparent hover:border-white/20 group`}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-headline italic mb-6">{item.t}</h3>
                <p className="text-sm font-body leading-[1.8] opacity-80 group-hover:opacity-100 transition-opacity">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS FLOW: "HOW IT WORKS" (IMAGE-INSPIRED LAYOUT) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-[11px] font-black uppercase tracking-[0.6em] mb-4"
            >
              How It Works
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-accent mb-12"
            />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Dotted Line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0 border-r-2 border-dotted border-neutral/20 hidden lg:block" />

            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Half */}
                  <div className="w-full lg:w-[42%] text-center lg:text-left">
                    <h3 className="text-2xl font-headline italic text-primary mb-4">{step.title}</h3>
                    <p className="text-base text-neutral/50 font-body leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex justify-center lg:justify-start gap-2 opacity-20">
                       {[...Array(12)].map((_, i) => (
                         <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral" />
                       ))}
                    </div>
                  </div>

                  {/* Center Number Block */}
                  <div className="relative flex flex-col items-center justify-center z-10 py-4 lg:py-0 px-4">
                    <span className="text-[10px] font-black text-neutral/30 uppercase tracking-[0.4em] mb-1">Step</span>
                    <span className="text-3xl font-headline font-black text-primary leading-none transition-transform group-hover:scale-110">
                      {step.num}
                    </span>
                    
                    {/* Dots below number (mobile only or decorative) */}
                    <div className="flex flex-col gap-2 mt-4 opacity-20">
                         {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral mx-auto" />
                         ))}
                    </div>
                  </div>

                  {/* Image Half */}
                  <div className="w-full lg:w-[40%] flex justify-center">
                    <div className="relative w-full max-w-[240px] aspect-square rounded-full overflow-hidden border-4 border-neutral/5 shadow-2xl p-0 transition-transform duration-700 hover:scale-[1.03]">
                       <div className="absolute inset-0 bg-accent/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                       <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                       />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFFERENTIATION: Split Layout (Inspired by Screenshot) */}
      <section className="pt-24 pb-0 bg-white relative overflow-hidden border-t border-neutral/5">
        <div className="container-fluid mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
            
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-8 lg:px-20 lg:pr-16">
              <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                Differentiation
              </div>
              <h2 className="text-3xl md:text-5xl mb-6 font-headline italic text-primary tracking-tight leading-tight">
                Designed for <span className="text-accent not-italic">long-term</span> capability <br />not temporary fixes.
              </h2>
              <p className="text-lg text-neutral/40 font-body leading-relaxed max-w-xl mb-10">
                The outcome is internal capability: systems that scale performance without requiring ongoing external input. We provide the <span className="text-primary font-bold">structure</span> that makes that possible.
              </p>
              
              <div className="flex">
                <Link to="/contact" className="group flex items-center gap-6 bg-accent text-white px-8 py-5 rounded-2xl font-bold hover:bg-primary transition-all duration-500 shadow-3xl shadow-accent/40 active:scale-95">
                  <span className="text-lg">Start the process</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <FiArrowRight />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right: Image with Gradient Fade (No Rounding) */}
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              {/* Fade Overlay (Only on desktop to transition from white text area) */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/20 to-transparent hidden lg:block" />
              
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={ingredientsImage2} 
                  alt="Ingredients & Differentiation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Approach;