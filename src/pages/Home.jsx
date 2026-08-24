import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiUsers, 
  FiLayers, 
  FiActivity, 
  FiCheckCircle, 
  FiBookOpen, 
  FiCpu, 
  FiChevronRight,
  FiAward
} from 'react-icons/fi';

import meeting3 from '../assets/Meeting 3.jpg';
import standardsImage2 from '../assets/standards-2.jpg';
import kitchen2 from '../assets/Kitchen Counter 2.jpg';
import backoffice3 from '../assets/Backoffice 3.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteSelection = (route) => {
    setSelectedRoute(route);
  };

  const executeRoute = () => {
    if (!selectedRoute) return;
    navigate(`/contact?reason=${selectedRoute}`);
  };

  const routes = [
    {
      id: 'business',
      title: 'I represent a hospitality business',
      description: 'Looking to optimize operations, workforce performance, or system advisory services.',
      actionText: 'Connect with Advisory Team'
    },
    {
      id: 'professional',
      title: "I'm a hospitality professional",
      description: 'Seeking practical resources, operational education, or training tools.',
      actionText: 'Access Professional Resources'
    },
    {
      id: 'learning',
      title: "I'm interested in learning",
      description: 'Enquiring about the upcoming Food Excellence in Practice guided pilot.',
      actionText: 'Apply for Guided Pilot'
    },
    {
      id: 'other',
      title: 'I have another inquiry',
      description: 'General questions, partnership opportunities, or media requests.',
      actionText: 'Send General Inquiry'
    }
  ];

  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <header
        className="relative min-h-screen w-full flex items-center pt-32 pb-32 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${meeting3}")` }}
      >
        {/* Backdrop Overlay */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-primary/80 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">CPG Institution</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-[4.5rem] mb-8 leading-[1.15] tracking-tight font-headline text-white"
            >
              Strengthening Hospitality <br />
              <span className="text-accent font-light italic opacity-95">Through People, Systems & Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-body leading-relaxed font-light"
            >
              A premium hospitality advisory and learning institution. We design and integrate professional resources, operational frameworks, and technology preparedness structures for businesses and professionals.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href="#services" 
                className="bg-accent text-primary flex items-center justify-center gap-4 px-8 py-5 rounded-full text-base font-bold hover:bg-white transition-all duration-300 group shadow-lg"
              >
                Explore Business Services
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#learning" 
                className="bg-transparent border border-white/30 text-white flex items-center justify-center gap-4 px-8 py-5 rounded-full text-base font-bold hover:bg-white/10 transition-all duration-300"
              >
                Explore Learning & Resources
              </a>
            </motion.div>
          </div>
        </div>

        {/* WHITE WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#F4F1EA"></path>
          </svg>
        </div>
      </header>

      {/* 2. WHAT CPG IS SECTION */}
      <section className="py-24 md:py-32 bg-background border-b border-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">The Core Narrative</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline text-primary mb-12 leading-[1.15] tracking-tight">
              An institution dedicated to <span className="italic font-light">operational longevity</span> and workforce performance.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-primary/80 font-body text-lg md:text-xl leading-relaxed font-light">
              <p className="border-l-4 border-accent/40 pl-6 py-2">
                CPG operates at the intersection of business performance, professional development, and technology preparedness. We reject the premise that operational inconsistency is merely a training problem. Inconsistency is a systems problem. Structure scales; unassisted effort does not.
              </p>
              <p className="flex flex-col justify-center">
                By equipping both growing hospitality businesses and professional culinarians with custom-designed operational frameworks, practical education, and structural tools, we ensure food systems are built to withstand modern pressures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO AUDIENCE PATHWAYS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Co-Primary Pathways</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">Tailored for Industry Needs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pathway 1: Professionals */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[450px] md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${standardsImage2}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-black/20 z-10" />
              
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end items-start text-white">
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">For Individuals</span>
                <h3 className="text-2xl md:text-3xl font-headline mb-4">Hospitality Professionals</h3>
                <p className="text-sm md:text-base text-white/80 mb-8 max-w-md font-body leading-relaxed font-light">
                  Practical education, workforce resources, and structured operational training designed to build your technical competence and advance your professional trajectory.
                </p>
                <a 
                  href="#learning" 
                  className="bg-white text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  Explore Learning Options
                  <FiArrowRight />
                </a>
              </div>
            </div>

            {/* Pathway 2: Businesses */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[450px] md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${kitchen2}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-black/20 z-10" />
              
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end items-start text-white">
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">For Organizations</span>
                <h3 className="text-2xl md:text-3xl font-headline mb-4">Hospitality Businesses</h3>
                <p className="text-sm md:text-base text-white/80 mb-8 max-w-md font-body leading-relaxed font-light">
                  Custom advisory, operational tools, labor models, and structural frameworks designed to align your workforce and maximize unit-level performance.
                </p>
                <a 
                  href="#services" 
                  className="bg-white text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  Explore Business Services
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-background border-t border-b border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Institutional Advisory</span>
              <h2 className="text-3xl md:text-5xl font-headline text-primary">Business Services</h2>
            </div>
            <p className="text-primary/75 max-w-md font-body text-base leading-relaxed font-light">
              We design robust operational processes that embed structure directly into your daily practices. Clear frameworks. Consistent output. Stable labor structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiLayers className="text-accent text-3xl" />,
                title: 'Systems Advisory',
                subtitle: 'Structural Level',
                description: 'Clarifying operational performance through modeling, cost structure analysis, and process design.'
              },
              {
                icon: <FiActivity className="text-accent text-3xl" />,
                title: 'Operational Optimization',
                subtitle: 'Day-to-Day Execution',
                description: 'Improving efficiency through labor alignment models, deep-dive workflow analysis, and cost controls.'
              },
              {
                icon: <FiUsers className="text-accent text-3xl" />,
                title: 'Workforce Development',
                subtitle: 'Internal Capability',
                description: 'Building internal capacity through structured training frameworks and custom education programs.'
              },
              {
                icon: <FiCheckCircle className="text-accent text-3xl" />,
                title: 'Implementation',
                subtitle: 'Systems in Practice',
                description: 'Translating concepts into execution with rollout management, performance tracking, and support.'
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6">{service.icon}</div>
                  <span className="text-[10px] uppercase tracking-widest text-primary/45 font-bold block mb-2">{service.subtitle}</span>
                  <h3 className="text-xl font-headline text-primary mb-4 font-bold">{service.title}</h3>
                  <p className="text-sm text-primary/70 font-body leading-relaxed font-light">{service.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-primary/5">
                  <Link to="/services" className="text-xs uppercase tracking-widest font-black text-accent flex items-center gap-2 group-hover:text-primary transition-colors">
                    Learn More <FiChevronRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEARNING & RESOURCES */}
      <section id="learning" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Decorative subtle texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%">
            <pattern id="grid-pattern-learning" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern-learning)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Educational Offerings</span>
                <span className="bg-accent/20 border border-accent/40 text-accent text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Guided Pilot — Opening Soon
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-headline mb-8 text-white">Food Excellence in Practice</h2>
              
              <p className="text-base md:text-lg text-white/80 font-body leading-relaxed mb-8 font-light">
                An institutional education program built specifically for professional culinarians and food service leaders. This is not a generic, self-paced course marketplace. It is a structured, rigorous curriculum focused on kitchen economics, food safety architecture, and operational leadership.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <FiAward className="text-accent text-xl mt-1 shrink-0" />
                  <p className="text-sm text-white/95 font-body font-light">
                    <strong>Rigorous Standards:</strong> Practical, high-fidelity instructional materials matching modern commercial requirements.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FiBookOpen className="text-accent text-xl mt-1 shrink-0" />
                  <p className="text-sm text-white/95 font-body font-light">
                    <strong>Systems Focus:</strong> Designed around scalable operational frameworks and organizational structures rather than personal recipes.
                  </p>
                </div>
              </div>

              <a 
                href="#routing-section"
                className="inline-flex bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Inquire About Guided Pilot
              </a>
            </div>

            {/* Right: Graphic Card (Not looking like checkout) */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent text-xs font-black uppercase tracking-widest block mb-4">Curriculum Framework</span>
              <h4 className="text-xl font-headline mb-6 text-white italic">Program Focus Areas</h4>
              <ul className="space-y-4 text-sm text-white/85 font-body">
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span>Kitchen Systems Design</span>
                  <span className="text-accent font-bold">Module I</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span>Workforce Integration Models</span>
                  <span className="text-accent font-bold">Module II</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span>Technology & Inventory Controls</span>
                  <span className="text-accent font-bold">Module III</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Operational Leadership Ethics</span>
                  <span className="text-accent font-bold">Module IV</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-white/10 rounded-xl text-center">
                <p className="text-xs text-white/60">Currently open only for institutional invitees and select pilot operators.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY PREPAREDNESS */}
      <section className="py-24 bg-background border-b border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-6">
              <FiCpu className="text-accent text-3xl" />
            </div>
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Systems Preparedness</span>
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6">Future-Ready Hospitality</h2>
            <p className="text-base md:text-lg text-primary/80 font-body leading-relaxed max-w-2xl mx-auto font-light">
              The hospitality technology landscape is evolving rapidly. Operational readiness requires adapting to digital workflows, automation, and intelligent inventory without losing the human core of hospitality. We help hospitality systems prepare for responsible innovation, making technology work for your team, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL/ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block font-bold">About the Institution</span>
              <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6 leading-tight">Why CPG Exists</h2>
              <p className="text-primary/85 font-body leading-relaxed mb-8 font-light">
                We believe hospitality businesses succeed when structural design aligns perfectly with human effort. CPG provides the systems and resources to make consistency normal.
              </p>
              <Link 
                to="/about"
                className="text-accent font-bold hover:text-primary transition-all inline-flex items-center gap-2 group tracking-widest text-sm uppercase font-black"
              >
                Learn About CPG <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-accent mb-4 block">01 / WHO</span>
                  <h4 className="text-lg font-headline font-bold text-primary mb-3">Who CPG Is</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">An independent, systems-focused advisory institution built by experienced hospitality professionals.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-accent mb-4 block">02 / WHY</span>
                  <h4 className="text-lg font-headline font-bold text-primary mb-3">Why We Exist</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">To eliminate systemic instability in food systems, ensuring profitability and career sustainability.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-accent mb-4 block">03 / HOW</span>
                  <h4 className="text-lg font-headline font-bold text-primary mb-3">How It Works</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">We define structural requirements, design operational processes, and support team implementation.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FINAL CTA WITH INTELLIGENT INQUIRY ROUTING */}
      <section 
        id="routing-section" 
        className="relative py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backoffice3}")` }}
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-black/60 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 w-full max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Inquiry Pathways</span>
            <h2 className="text-3xl md:text-5xl font-headline text-white mb-6">What brings you to CPG?</h2>
            <p className="text-white/70 max-w-lg mx-auto font-body text-sm font-light">
              Select the option below that best describes your inquiry. We will route you directly to the appropriate resource pathway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => handleRouteSelection(route.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  selectedRoute === route.id
                    ? 'bg-accent/15 border-accent text-white shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/90'
                }`}
              >
                <div>
                  <h4 className={`font-headline text-lg mb-2 font-bold ${selectedRoute === route.id ? 'text-accent' : 'text-white'}`}>
                    {route.title}
                  </h4>
                  <p className="text-xs text-white/70 font-body leading-relaxed font-light">
                    {route.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${selectedRoute === route.id ? 'text-accent' : 'text-white/40'}`}>
                    Select Pathway
                  </span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedRoute === route.id ? 'border-accent bg-accent' : 'border-white/30'}`}>
                    {selectedRoute === route.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selectedRoute && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-accent font-bold">Selected Path:</span>
                <p className="text-white text-sm font-body font-bold">{routes.find(r => r.id === selectedRoute)?.title}</p>
              </div>
              <button
                onClick={executeRoute}
                className="bg-accent text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-primary transition-all duration-300 whitespace-nowrap shadow-lg flex items-center gap-2"
              >
                {routes.find(r => r.id === selectedRoute)?.actionText} <FiArrowRight />
              </button>
            </motion.div>
          )}

          {!selectedRoute && (
            <div className="text-center text-white/40 text-xs italic">
              Please choose a path above to proceed to contact advisory services.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;