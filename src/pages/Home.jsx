import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Kitchen Counter 1.jpg';
import trainingImage from '../assets/Prep 1.jpg';
import systemsImage from '../assets/Standards 1.jpg';
import standardsImage2 from '../assets/standards-2.jpg';
import standardsImage3 from '../assets/standards-3.jpg';
import paperworkImage from '../assets/paperwork-5.jpg';
import ingredients3 from '../assets/Ingredients 3.jpg';
import ingredients4 from '../assets/Ingredients 4.jpg';
import ingredients5 from '../assets/Ingredients 5.jpg';
import ingredients6 from '../assets/Ingredients 6.jpg';
import meeting1 from '../assets/Meeting 1.jpg';
import meeting3 from '../assets/Meeting 3.jpg';
import meeting5 from '../assets/Meeting 5.jpg';
import backoffice3 from '../assets/Backoffice 3.jpg';
import symbolLogo from '../assets/Symbol Final.png';
import { FiTarget, FiBarChart2, FiUsers, FiArrowRight, FiAlertCircle, FiTrendingDown, FiMaximize, FiArrowUpRight, FiSearch } from 'react-icons/fi';  

const Home = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      {/* 1. HERO SECTION (FULL SCREEN) */}
      <header 
        className="relative min-h-screen w-full flex items-center pt-32 pb-0 overflow-visible bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${meeting3}")` }}
      >
        {/* Subtle Backdrop Overlay - Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-16 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl mb-8 leading-[1.2] lg:leading-[1.05] tracking-tight font-headline text-white drop-shadow-2xl">
              Operational Clarity <br />
              <span className="text-accent font-light italic opacity-90">for Food Systems</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact" className="bg-white/50 backdrop-blur-xl border border-white/20 text-black flex items-center gap-4 px-10 py-5 rounded-full text-lg md:text-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 group shadow-2xl">
                Request a Consultation
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FiArrowUpRight className="text-black group-hover:text-primary text-2xl" />
                </div>
              </Link>
            </div>

            {/* Re-positioned & Resized Stats Cards */}
            <div className="mt-12 mb-[-30px] mb-[-80px] flex flex-col md:flex-row gap-4 max-w-3xl">
              <div className="bg-accent/100 backdrop-blur-xl px-6 py-7 rounded-2xl flex-1 border border-black/10 shadow-xl transition-all duration-300 hover:bg-white/20">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-black mb-2">Advisory & Systems Design</p>
                <p className="text-black font-bold text-sm">OPERATIONAL STRUCTURE</p>
              </div>
              <div className="bg-primary/100 backdrop-blur-xl px-6 py-7 rounded-2xl flex-[1.4] border border-black/10 shadow-xl transition-all duration-300 hover:bg-white/20">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white mb-2">Operational Alignment</p>
                <p className="text-white font-bold text-sm">FINANCIAL STRUCTURE & WORKFORCE PERFORMANCE</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHITE WAVE DIVIDER */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 -2px 6px rgba(0,0,0,0.08))'}}>
          <path d="M0,20 Q180,50 360,20 T720,20 T1080,20 T1440,20 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </header>

      {/* 2. THE AUDIT SECTION (REDESIGNED) */}
      <section className="pt-12 md:pt-12 pb-6 bg-white relative overflow-hidden">
        {/* Subtle Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] -z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* Centred header block */}
          <div className="text-center max-w-6xl mx-auto mb-12">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="px-4 py-2 rounded-full bg-background text-[10px] font-black uppercase tracking-widest text-primary/40">
                The Audit
              </span>
              <span className="w-10 h-[1px] bg-accent"></span>
            </div>

            <h2 className="text-3xl md:text-6xl font-headline italic leading-[1.1] md:leading-[1.05] tracking-tighter text-primary mb-8">
              Structural failures <br />
              <span className="text-accent not-italic font-bold">READ AS</span> <br />
              operational problems.
            </h2>

            <p className="text-lg md:text-lg text-primary/60 leading-relaxed font-body border-l-4 border-accent/30 pl-8 text-left mb-8">
              Most foodservice businesses address symptoms through individual effort. The underlying problem is on system Inconsistency isn't a talent problem—it's a systems problem. Effort cannot scale; structure can."<span className="text-primary italic font-semibold">organisational architecture</span>.
            </p>

            
          </div>

          {/* 4-column diagnostic cards — screenshot layout */}
          <div className="relative">
            {/* Horizontal connecting line between circles */}
            <div className="absolute top-[55px] left-[14%] right-[14%] h-px bg-neutral-200 hidden lg:block z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { icon: <FiAlertCircle />, phase: 'Structural', title: 'Inconsistent Output',       desc: 'Teams work at capacity, yet output quality and speed vary across shifts.' },
                { icon: <FiTrendingDown />, phase: 'Financial',  title: 'Margin Erosion',            desc: 'Revenue is present. Margin is not. Process leaks go untracked.' },
                { icon: <FiMaximize />,    phase: 'Operational', title: 'Scaling Without Structure', desc: 'Growth is occurring without the structural depth to support it.' },
                { icon: <FiUsers />,       phase: 'Workforce',   title: 'Labor Misalignment',        desc: 'Workforce deployment does not consistently align with operational demand.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">

                  {/* Circle icon with number badge */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-accent/20 flex items-center justify-center text-primary text-2xl shadow-md group-hover:bg-accent group-hover:text-white transition-all duration-500 relative z-10">
                      {item.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-9 h-9 bg-primary text-accent rounded-full border-4 border-white flex items-center justify-center text-[9px] font-black italic z-20 shadow">
                      0{i + 1}
                    </div>
                  </div>

                  <span className="text-[8px] font-black tracking-widest uppercase text-accent mb-2 block group-hover:tracking-[0.35em] transition-all duration-500">
                    Phase: {item.phase}
                  </span>
                  <h4 className="text-lg md:text-xl font-headline italic text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral/50 font-body leading-relaxed max-w-[180px] mx-auto">
                    {item.desc}
                  </p>

                  {/* Hover underline accent */}
                  <div className="mt-4 h-px w-10 bg-accent/0 group-hover:bg-accent group-hover:w-16 transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE DOMAINS */}
      <section className="py-20 bg-[#EDF2EE]" id="domains">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-8">Core Domains</h2>
             <div className="flex justify-center gap-2"> 
              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent/10"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { 
                title: 'Systems Design', 
                desc: 'Operational modeling, financial structure, and process design to clarify functions.', 
                img: ingredients3
              },
              { 
                title: 'Operations Strategy', 
                desc: 'Improving efficiency through labor alignment and workflow analysis.', 
                img: ingredients5
              },
              { 
                title: 'Workforce Development', 
                desc: 'Building internal capability through structured training systems.', 
                img: ingredients6
              },
              { 
                title: 'Implementation Support', 
                desc: 'Translating theoretical systems into daily practice through rollout and performance tracking.', 
                img: ingredients4
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[1.75rem] overflow-hidden shadow-lg shadow-primary/8 hover:shadow-xl hover:shadow-primary/12 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group border border-primary/3">
                <div className="relative h-full overflow-hidden bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="px-7 py-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-3 font-body leading-tight">{item.title}</h3>
                  <p className="text-primary/70 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <button className="bg-accent text-primary w-full py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-primary hover:text-white transition-all duration-300 shadow-lg shadow-accent/20 active:scale-95 border-none">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING SECTION */}
      <section className="py-24 md:py-32 bg-background/50 border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
              <div 
                className="relative z-10 h-[400px] md:h-[550px] bg-center bg-cover rounded-3xl shadow-xl border-4 border-white transition-transform hover:scale-[1.02] duration-700" 
                style={{ backgroundImage: `url(${standardsImage2})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white p-6 bg-white/10 backdrop-blur rounded-xl border border-white/10 max-w-[calc(100%-48px)] md:max-w-sm">
                   <p className="text-xs italic">When training is embedded into the operational system, consistent performance becomes a structural output—not a management effort.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent/50"></span>
                <span className="text-accent text-xs uppercase font-bold tracking-[0.4em] block">THE METHOD</span>
              </div>
              <h2 className="text-4xl md:text-6xl mb-10 font-headline leading-[1.1] tracking-tight">Training is how consistent performance scales.</h2>
              <p className="text-lg text-neutral/80 leading-relaxed font-body mb-12 border-l-4 border-accent pl-8 py-2">
                We build systems where training is embedded into operations—not delivered separately. It is the mechanism through which standards become repeatable and performance stops depending on who is on shift.
              </p>
              <Link to="/approach" className="bg-white text-primary flex items-center gap-3 px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral/10">
                Explore Our Approach
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREDIBILITY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">
            {[
              { title: 'Advisory-focused', label: 'Structural Approach' },
              { title: 'Systems-driven', label: 'Structural Integrity' },
              { title: 'Measurable Outcomes', label: 'Defined Outcomes' },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-3xl font-headline italic mb-3 text-primary tracking-tight">{pillar.title}</h4>
                <div className="w-16 h-px bg-accent/30 mb-4"></div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral/50 font-bold">{pillar.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section 
        className="relative py-32 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backoffice3}")` }}
      >
        {/* Transparent Modern Overlay */}
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
          <span className="text-white text-xs uppercase font-bold tracking-[0.5em] mb-6 block">NEXT STEPS</span>
          <h2 className="text-4xl md:text-7xl mb-12 md:mb-16 max-w-3xl leading-[1.1] md:leading-tight font-headline tracking-tighter text-white">Ready for <br/>Operational Clarity?</h2>
          <Link to="/contact" className="bg-accent text-primary flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:bg-white transition-all duration-300 group">
            Request a Consultation
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="text-xs md:text-sm text-white/50 mt-10 max-w-sm italic">Schedule an initial conversation about where your operational structure stands.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;