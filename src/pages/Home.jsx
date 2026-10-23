import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiCheckCircle, 
  FiCompass, 
  FiActivity, 
  FiLayers, 
  FiBookOpen, 
  FiCpu, 
  FiUsers, 
  FiChevronRight, 
  FiAward,
  FiTrendingUp,
  FiCheck,
  FiSliders
} from 'react-icons/fi';

// Authentic CPG Assets
import meeting3 from '../assets/Meeting 3.jpg';
import standardsImage2 from '../assets/standards-2.jpg';
import kitchen2 from '../assets/Kitchen Counter 2.jpg';
import backoffice3 from '../assets/Backoffice 3.jpg';
import meetingImage from '../assets/Meeting 1.jpg';
import kitchenImage from '../assets/Kitchen Counter 1.jpg';
import backstageImage from '../assets/Backoffice 1.jpg';
import launchPrepImage from '../assets/launch-prep.jpg';
import heroImage from '../assets/restaurant-hero.jpg';
import neutralArchImage from '../assets/neutral-arch.jpg';

const Home = () => {
  const navigate = useNavigate();

  // Inquiry Pathway State (from culinaryprovisiongroup.com)
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteSelection = (route) => {
    setSelectedRoute(route);
  };

  const executeRoute = () => {
    if (!selectedRoute) return;
    if (selectedRoute === 'launch') {
      navigate('/services/opening-doors');
    } else {
      navigate(`/contact?reason=${selectedRoute}`);
    }
  };

  const routes = [
    {
      id: 'business',
      title: 'I represent a hospitality business',
      description: 'Looking to optimize operations, workforce performance, or system advisory services.',
      actionText: 'Connect with Advisory Team'
    },
    {
      id: 'launch',
      title: 'I am planning to launch a restaurant',
      description: 'Seeking turnkey launch advisory (CPG Opening Doors), kitchen geometry, and opening night command.',
      actionText: 'Explore Restaurant Launch Advisory'
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

  // Stage state for CPG Opening Doors (Launch Restaurant Service) showcase
  const [activeStage, setActiveStage] = useState(0);

  // Concept Estimator State (Launch Framework)
  const [selectedConcept, setSelectedConcept] = useState('bistro');
  const [selectedScale, setSelectedScale] = useState('medium');

  const launchStages = [
    {
      num: '01',
      phase: 'Phase 01',
      title: 'Concept & Financial Feasibility',
      subtitle: 'Feasibility, Lease Review & Unit Economics',
      desc: 'We stress-test your concept against market realities. Before capital is deployed, we model check averages, seat turnover dynamics, food & labor prime targets, and break-even thresholds.',
      deliverables: [
        { label: 'Pro-Forma Financial Model', desc: 'Break-even seat velocity & capital budgeting' },
        { label: 'Target Prime Cost Matrix', desc: 'Menu pricing & controllable margin targets' },
        { label: 'Space & Lease Feasibility Audit', desc: 'Kitchen-to-dining ratios & utility capacity' }
      ],
      milestone: 'De-risk capital before lease execution & construction bidding',
      image: meetingImage,
      timeframe: 'Weeks 1–4',
      tag: 'Pre-Capital Modeling'
    },
    {
      num: '02',
      phase: 'Phase 02',
      title: 'Kitchen & Line Architecture',
      subtitle: 'Line Ergonomics, Flow Corridors & Equipment Sourcing',
      desc: 'Great food fails if cooks collide. We map station footprints, pass-through heatlamps, walk-in par organization, and dish-pit return corridors with architects to prevent expensive rework.',
      deliverables: [
        { label: 'BOH Station Flow Schematic', desc: 'Line ergonomics & pass-through corridor mapping' },
        { label: 'Equipment Sourcing & Bidding', desc: 'Direct manufacturer pricing & spec verification' },
        { label: 'Regulatory & Hood Compliance', desc: 'Health department, egress & mechanical audits' }
      ],
      milestone: 'Architectural sign-off with zero kitchen flow bottlenecks',
      image: kitchenImage,
      timeframe: 'Weeks 4–8',
      tag: 'Line Ergonomics'
    },
    {
      num: '03',
      phase: 'Phase 03',
      title: 'Backstage Systems & Controls',
      subtitle: 'Turnkey SOPs, Recipe Costing & POS Setup',
      desc: 'We install the institutional controls that protect opening cash flow: recipe yield sheets, weekly par order sheets, prime supplier agreements, and complete POS programming.',
      deliverables: [
        { label: 'Master SOP Manual', desc: 'Standard operating procedures for every station' },
        { label: 'Plate Economics & Yield Matrix', desc: 'Batch yields, butcher sheets & portion control' },
        { label: 'Supplier Account Setup', desc: 'Vendor order guides, par levels & payment terms' }
      ],
      milestone: 'Complete backstage operating system installed before staff onboarding',
      image: backstageImage,
      timeframe: 'Weeks 8–12',
      tag: 'BOH Systems'
    },
    {
      num: '04',
      phase: 'Phase 04',
      title: 'Opening Rehearsals & Launch Week',
      subtitle: 'Staff Training, Mock Services & Floor Command',
      desc: 'We train your front and back of house, direct simulated friends & family services to test the line under pressure, and stand shoulder-to-shoulder on the floor during launch week.',
      deliverables: [
        { label: 'FOH & BOH Training Curriculum', desc: 'Sequence of service, floor pacing & brigade drills' },
        { label: 'Simulated Service Dry Runs', desc: 'High-pressure mock services with real tickets' },
        { label: 'On-Floor Launch Command', desc: '90-day stabilization & opening week oversight' }
      ],
      milestone: '100% Launch readiness with opening night floor command',
      image: launchPrepImage,
      timeframe: 'Launch & 90 Days',
      tag: 'Opening Command'
    }
  ];

  const currentStage = launchStages[activeStage];

  // Estimator Calculations — CPG Launch Advisory Model
  const conceptConfigs = {
    bistro: {
      name: 'Chef-Driven Neighborhood Bistro',
      targetPrime: '28.4%',
      stations: '3 Cook Stations · Garde Manger · Beverage Program',
      pacing: '1h 45m Service Cadence',
      rehearsal: '4 Full-Service Dry Runs',
      note: 'Systems-driven independent dining'
    },
    brasserie: {
      name: 'High-Volume Modern Brasserie',
      targetPrime: '29.1%',
      stations: '5 Production Lines · Raw Bar · Dedicated Pass',
      pacing: '1h 30m Dual-Turn Velocity',
      rehearsal: '6 Staged Service Rehearsals',
      note: 'High-capacity systems execution'
    },
    hearth: {
      name: 'Artisanal Wood-Fired Hearth',
      targetPrime: '27.8%',
      stations: 'Wood Hearth Suite · Sauté Station · Pastry Pass',
      pacing: '2h 00m Tasting & À La Carte Pacing',
      rehearsal: '5 Thermal Line Rehearsals',
      note: 'Craft execution with systems discipline'
    }
  };

  const scaleConfigs = {
    intimate: { label: '40–60 Seats', staffEst: '14–18 Total Brigade', timelineEst: '4–6 Months' },
    medium: { label: '70–110 Seats', staffEst: '24–32 Total Brigade', timelineEst: '6–9 Months' },
    grand: { label: '120+ Seats', staffEst: '40–55 Total Brigade', timelineEst: '9–12 Months' }
  };

  const activeEstimator = {
    ...conceptConfigs[selectedConcept],
    ...scaleConfigs[selectedScale]
  };

  return (
    <div className="flex flex-col bg-background selection:bg-rose/15 selection:text-burgundy overflow-x-hidden">

      {/* =========================================================================
          1. HERO SECTION — AUTHENTIC CPG INSTITUTIONAL EDITORIAL HERO
          Rooted in culinaryprovisiongroup.com ("Strengthening Hospitality Through People, Systems & Technology")
          Introducing the newly added Restaurant Launch Service alongside core advisory.
          ========================================================================= */}
      <header
        className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center pt-16 pb-24 sm:pt-20 md:pt-24 md:pb-32 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${meeting3}")` }}
      >
        {/* Backdrop Overlays */}
        <div className="absolute inset-0 bg-primary/75 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/60 to-primary/95 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-5xl -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
            
            {/* Institution Eyebrow Lockup */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.25em]">
                Culinary Provision Group · Institution
              </span>
            </motion.div>

            {/* Core CPG Institutional Headline — Balanced 2-line layout without orphaned words */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] mb-6 leading-[1.14] tracking-tight font-headline text-white"
            >
              Strengthening Hospitality <br className="hidden sm:inline" />
              <span className="text-accent font-light italic opacity-95">Through People, Systems &amp; Technology</span>
            </motion.h1>

            {/* Core CPG Institutional Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mb-8 font-body leading-relaxed font-light"
            >
              A premium hospitality advisory and learning institution. We design and integrate professional resources, operational frameworks, and technology preparedness structures for businesses, culinary leaders, and new restaurant openings.
            </motion.p>

            {/* Action CTAs: Unified heights, aligned padding, and responsive gap */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5"
            >
              <a 
                href="#services" 
                className="bg-accent text-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-white transition-all duration-300 group shadow-lg whitespace-nowrap"
              >
                <span>Explore Business Services</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Added Launch Restaurant Service Spotlight Button */}
              <a 
                href="#launch-service" 
                className="bg-white/15 backdrop-blur-md border border-white/25 text-white inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-md group whitespace-nowrap"
              >
                <FiCompass className="w-4 h-4 text-accent group-hover:text-primary transition-colors shrink-0" />
                <span>New: Restaurant Launch Advisory</span>
              </a>

              <a 
                href="#learning" 
                className="bg-transparent border border-white/25 text-white/90 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                <span>Learning &amp; Resources</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Sculpted Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#FAF4ED"></path>
          </svg>
        </div>
      </header>

      {/* =========================================================================
          2. WHAT CPG IS SECTION — THE CORE NARRATIVE (from culinaryprovisiongroup.com)
          Exact philosophical grounding: "Structure scales; unassisted effort does not."
          ========================================================================= */}
      <section className="py-20 md:py-32 bg-background border-b border-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-rose"></span>
              <span className="text-rose text-xs font-bold uppercase tracking-[0.35em]">The Core Narrative</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline text-burgundy mb-12 leading-[1.15] tracking-tight">
              An institution dedicated to <span className="italic font-light text-rose">operational longevity</span> and workforce performance.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-primary/80 font-body text-base md:text-lg leading-relaxed font-light">
              <p className="border-l-4 border-gold/70 pl-6 py-2 bg-white/50 rounded-r-2xl shadow-sm">
                CPG operates at the intersection of business performance, professional development, and technology preparedness. We reject the premise that operational inconsistency is merely a training problem. Inconsistency is a systems problem. Structure scales; unassisted effort does not.
              </p>
              <p className="flex flex-col justify-center">
                By equipping both growing hospitality businesses and professional culinarians with custom-designed operational frameworks, practical education, and structural tools, we ensure food systems are built to withstand modern pressures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TWO AUDIENCE PATHWAYS (CO-PRIMARY PATHWAYS)
          Modern Architectural Editorial Layout: High-contrast, clean visual frames,
          crystal-clear typography, and zero muddy overlays.
          ========================================================================= */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle decorative ambient radial glow */}
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-rose/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne/60 border border-gold/40 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-burgundy">
                Co-Primary Pathways
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy leading-tight">
              Tailored for Industry Needs
            </h2>
            <p className="text-sm sm:text-base text-body font-light max-w-xl mx-auto mt-3 leading-relaxed">
              Dedicated operational frameworks and practical education designed specifically for individual culinary leaders and growing hospitality organizations.
            </p>
          </div>

          {/* 2 High-End Interactive Image Showcase Cards with Deep Velvet Wine Slide-Up Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
            
            {/* Pathway 1: For Professionals (Individuals) */}
            <div className="relative group overflow-hidden rounded-3xl shadow-warm border border-champagne/80 h-[480px] sm:h-[520px] md:h-[540px] bg-espresso cursor-pointer">
              {/* Full Photographic Stage */}
              <img
                src={standardsImage2}
                alt="Hospitality professional reviewing culinary standards"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Deep Resting Vignette for High-Contrast Default State */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Resting State Bottom Title Bar (Visible before hover) */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-9 z-10 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF7C] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 inline-block mb-3">
                  01 · For Individuals
                </span>
                <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-white leading-tight">
                  Hospitality Professionals
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light mt-2 flex items-center gap-2">
                  <span>Hover to view curriculum &amp; tools</span>
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D4AF7C] transition-transform group-hover:translate-x-1" />
                </p>
              </div>

              {/* SLIDE-UP HOVER PANEL (Guaranteed Rich Deep Velvet Wine Background with 100% Crisp Contrast) */}
              <div 
                style={{ background: 'linear-gradient(to top, #2A0E15 0%, #421720 100%)' }}
                className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t-2 border-[#D4AF7C] shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF7C] font-mono">
                      01 · For Individuals
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#FAF4ED] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      Professional Track
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-white leading-tight">
                      Hospitality Professionals
                    </h3>
                    <p className="text-xs text-[#D4AF7C] font-mono uppercase tracking-wider mt-1.5 font-medium">
                      Culinary Leadership &amp; Kitchen Operations
                    </p>
                  </div>

                  {/* Concise, Grounded Real Phrasing (No AI Buzzwords) */}
                  <p className="text-xs sm:text-sm text-[#FAF4ED] font-light leading-relaxed">
                    Structured kitchen management, food economics, and operational standards for working culinarians advancing into leadership roles.
                  </p>

                  {/* 3 Real-World Focus Points */}
                  <div className="space-y-2.5 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Recipe costing, batch yields &amp; margin control</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Line station flow &amp; food safety architecture</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Brigade mentorship &amp; live service command</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-white/20">
                  <a
                    href="#learning"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#421720] font-bold text-xs sm:text-sm hover:bg-[#D4AF7C] hover:text-white transition-all duration-300 shadow-lg group/btn w-full sm:w-auto"
                  >
                    <span>Explore Learning Options</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pathway 2: For Businesses (Organizations) */}
            <div className="relative group overflow-hidden rounded-3xl shadow-warm border border-champagne/80 h-[480px] sm:h-[520px] md:h-[540px] bg-espresso cursor-pointer">
              {/* Full Photographic Stage */}
              <img
                src={kitchen2}
                alt="Active restaurant dining and culinary kitchen operations"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Deep Resting Vignette for High-Contrast Default State */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Resting State Bottom Title Bar (Visible before hover) */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-9 z-10 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF7C] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 inline-block mb-3">
                  02 · For Organizations
                </span>
                <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-white leading-tight">
                  Hospitality Businesses
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light mt-2 flex items-center gap-2">
                  <span>Hover to view advisory &amp; launch support</span>
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D4AF7C] transition-transform group-hover:translate-x-1" />
                </p>
              </div>

              {/* SLIDE-UP HOVER PANEL (Guaranteed Rich Deep Velvet Wine Background with 100% Crisp Contrast) */}
              <div 
                style={{ background: 'linear-gradient(to top, #2A0E15 0%, #421720 100%)' }}
                className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t-2 border-[#D4AF7C] shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF7C] font-mono">
                      02 · For Organizations
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#FAF4ED] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      Advisory Track
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-white leading-tight">
                      Hospitality Businesses
                    </h3>
                    <p className="text-xs text-[#D4AF7C] font-mono uppercase tracking-wider mt-1.5 font-medium">
                      Advisory, SOPs &amp; Turnkey Launches
                    </p>
                  </div>

                  {/* Concise, Grounded Real Phrasing (No AI Buzzwords) */}
                  <p className="text-xs sm:text-sm text-[#FAF4ED] font-light leading-relaxed">
                    End-to-end operational systems, labor alignment, and launch advisory engineered to eliminate friction and protect profitability.
                  </p>

                  {/* 3 Real-World Focus Points */}
                  <div className="space-y-2.5 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Turnkey restaurant launch advisory (CPG Opening Doors)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Master SOP manuals &amp; backstage inventory pars</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                      <span>Labor scheduling curves &amp; prime cost defense</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-white/20">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#421720] font-bold text-xs sm:text-sm hover:bg-[#D4AF7C] hover:text-white transition-all duration-300 shadow-lg group/btn w-full sm:w-auto"
                  >
                    <span>Explore Business Services</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. THE NEW FLAGSHIP SERVICE: RESTAURANT LAUNCH ADVISORY (CPG OPENING DOORS)
          The added service requested by the user: applying CPG systems to new restaurant openings!
          ========================================================================= */}
      <section id="launch-service" className="py-20 md:py-28 bg-[#FAF4ED] text-espresso relative overflow-hidden border-y border-champagne/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header: Bold Title on Left, Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose font-mono block mb-2">
                New Service Offering · CPG Opening Doors
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-burgundy tracking-tight leading-[1.15]">
                Architecting Your Next{' '}
                <span className="text-gold block sm:inline italic font-serif font-normal">Culinary Institution</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-body font-light leading-relaxed">
                Applying CPG's systems engineering directly to the creation of new dining rooms. We partner with founders and chefs from blank blueprint to packed opening night—aligning pro-forma models, kitchen station geometry, backstage SOPs, and brigade floor command.
              </p>
            </div>
          </div>

          {/* Bento Showcase for Launch Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Active Launch Stage Featured Card */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-warm border border-champagne/80 group min-h-[480px] sm:min-h-[540px] bg-espresso flex flex-col justify-end">
              <img
                key={currentStage.num}
                src={currentStage.image}
                alt={currentStage.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent pointer-events-none" />

              <Link
                to="/services/opening-doors"
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-burgundy hover:bg-gold hover:text-white transition-all duration-300 z-10"
                title="Explore Launch Advisory"
              >
                <FiArrowUpRight className="w-5 h-5" />
              </Link>

              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-champagne/80 text-[11px] font-semibold text-burgundy uppercase tracking-wider shadow-sm z-10">
                <span>Stage {currentStage.num} · {currentStage.timeframe}</span>
              </div>

              {/* Floating Stage Overview Card */}
              <div className="relative z-10 m-4 sm:m-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-warm-lg border border-champagne/90">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="font-headline font-bold text-2xl text-gold block">
                      {currentStage.num === '01' ? '90–120 Days' : currentStage.num === '02' ? 'Zero Stalls' : currentStage.num === '03' ? '100% SOPs' : 'Opening Night'}
                    </span>
                    <span className="text-[11px] text-muted uppercase tracking-wider block font-medium">
                      {currentStage.tag}
                    </span>
                  </div>

                  <Link
                    to="/services/opening-doors"
                    className="w-10 h-10 rounded-full bg-gold hover:bg-burgundy text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 shrink-0"
                  >
                    <FiArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-3 border-t border-champagne/70">
                  <div>
                    <h3 className="font-headline font-semibold text-base sm:text-lg text-burgundy">
                      {currentStage.title}
                    </h3>
                    <p className="text-xs text-muted font-light mt-0.5 max-w-sm">
                      {currentStage.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center text-center text-xs divide-x divide-champagne shrink-0">
                    <div className="pr-3 text-left sm:text-center">
                      <span className="font-bold text-burgundy block text-xs">
                        {currentStage.deliverables[0]?.label || 'Pro-Forma'}
                      </span>
                      <span className="text-[10px] text-muted block">Financials</span>
                    </div>
                    <div className="px-3 text-left sm:text-center">
                      <span className="font-bold text-burgundy block text-xs">
                        {currentStage.num === '01' ? '28.4%' : currentStage.num === '02' ? 'Direct' : currentStage.num === '03' ? 'Yield' : '4 Dry'}
                      </span>
                      <span className="text-[10px] text-muted block">
                        {currentStage.num === '01' ? 'Prime Target' : currentStage.num === '02' ? 'Spec Bids' : currentStage.num === '03' ? 'Matrices' : 'Rehearsals'}
                      </span>
                    </div>
                    <div className="pl-3 text-left sm:text-center">
                      <span className="font-bold text-burgundy block text-xs">
                        {currentStage.num === '01' ? 'Lease' : currentStage.num === '02' ? 'Code' : currentStage.num === '03' ? 'Vendor' : '90-Day'}
                      </span>
                      <span className="text-[10px] text-muted block">
                        {currentStage.num === '01' ? 'Audit' : currentStage.num === '02' ? 'Sign-off' : currentStage.num === '03' ? 'Accounts' : 'Command'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: 3 Complementary Stage Selection Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                
                {/* Stage 02: Kitchen & Line Architecture */}
                <button
                  type="button"
                  onClick={() => setActiveStage(1)}
                  className={`rounded-3xl overflow-hidden relative shadow-warm group min-h-[190px] text-left transition-all duration-300 border bg-espresso block ${
                    activeStage === 1 ? 'ring-2 ring-gold border-gold' : 'border-champagne/80 hover:border-gold/50'
                  }`}
                >
                  <img
                    src={kitchenImage}
                    alt="Kitchen & Line Architecture"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                    <span className="text-[9px] font-mono uppercase text-gold block mb-0.5">Stage 02 · Weeks 4–8</span>
                    <h4 className="font-headline font-semibold text-xs sm:text-sm text-white line-clamp-1">
                      Kitchen Line Architecture
                    </h4>
                  </div>
                </button>

                {/* Stage 03: Backstage Systems & SOPs */}
                <button
                  type="button"
                  onClick={() => setActiveStage(2)}
                  className={`rounded-3xl overflow-hidden relative shadow-warm group min-h-[190px] text-left transition-all duration-300 border bg-espresso block ${
                    activeStage === 2 ? 'ring-2 ring-gold border-gold' : 'border-champagne/80 hover:border-gold/50'
                  }`}
                >
                  <img
                    src={backstageImage}
                    alt="Backstage Systems & Controls"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                    <span className="text-[9px] font-mono uppercase text-gold block mb-0.5">Stage 03 · Weeks 8–12</span>
                    <h4 className="font-headline font-semibold text-xs sm:text-sm text-white line-clamp-1">
                      Backstage SOP Systems
                    </h4>
                  </div>
                </button>

              </div>

              {/* Stage 04: Panoramic Rehearsals & Launch Command */}
              <button
                type="button"
                onClick={() => setActiveStage(3)}
                className={`rounded-3xl overflow-hidden relative shadow-warm group h-[210px] text-left transition-all duration-300 border bg-espresso block ${
                  activeStage === 3 ? 'ring-2 ring-gold border-gold' : 'border-champagne/80 hover:border-gold/50'
                }`}
              >
                <img
                  src={heroImage}
                  alt="Opening Rehearsals & Floor Command"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between gap-3 z-10">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold block mb-0.5">
                      Stage 04 · Launch Week &amp; 90 Days
                    </span>
                    <h4 className="font-headline font-semibold text-sm sm:text-base text-white">
                      Opening Rehearsals &amp; Floor Command
                    </h4>
                    <p className="text-xs text-champagne/80 font-light mt-0.5 hidden sm:block">
                      Simulated dry runs, brigade training &amp; opening night floor oversight.
                    </p>
                  </div>
                  
                  <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] text-champagne font-mono whitespace-nowrap shrink-0">
                    100% Launch Readiness
                  </div>
                </div>
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. LAUNCH SCOPE ESTIMATOR (Light Architectural Studio Suite)
          Generous whitespace, 100% crisp contrast, tactile swatches, and architectural arch.
          ========================================================================= */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#FAF4ED] border-b border-champagne/80 relative overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none select-none">
          <svg width="100%" height="100%">
            <pattern id="grid-pattern-estimator" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6B2E3A" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern-estimator)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header: Spacious, Crisp, High-Contrast */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose/10 border border-rose/20 mb-3.5 shadow-sm">
              <FiSliders className="w-3.5 h-3.5 text-rose" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose">
                Operational Framework Estimator
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-burgundy tracking-tight leading-[1.15]">
              Explore Your Launch Framework
            </h2>
            <p className="text-sm sm:text-base text-body font-light leading-relaxed mt-3 max-w-2xl">
              Select your dining concept and room scale below to preview operational milestones, staffing models, and prime cost targets.
            </p>
          </div>

          {/* 3-Column Architectural Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
            
            {/* COLUMN 1: Concept & Scale Selectors */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              {/* Concept Archetype Swatches */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                    1. Concept Archetype
                  </span>
                  <span className="text-[11px] text-rose font-mono font-semibold bg-rose/10 px-2.5 py-0.5 rounded-full border border-rose/20">
                    {conceptConfigs[selectedConcept]?.targetPrime} Prime Target
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'bistro', title: 'Neighborhood Bistro', sub: '3 Stations · 1h 45m Cadence', tag: '28.4% Prime' },
                    { id: 'brasserie', title: 'Modern Brasserie', sub: '5 Production Lines · High Volume', tag: '29.1% Prime' },
                    { id: 'hearth', title: 'Wood-Fired Hearth', sub: 'Artisanal Suite · Tasting Pacing', tag: '27.8% Prime' }
                  ].map((item) => {
                    const isSelected = selectedConcept === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedConcept(item.id)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                          isSelected
                            ? 'bg-[#421720] text-white border-[#421720] shadow-lg ring-2 ring-gold/40 -translate-y-0.5'
                            : 'bg-white text-espresso border-champagne/80 hover:border-burgundy/40 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                        }`}
                      >
                        <div>
                          <div className={`font-headline font-semibold text-base ${isSelected ? 'text-white' : 'text-burgundy'}`}>
                            {item.title}
                          </div>
                          <div className={`text-xs mt-0.5 font-normal ${isSelected ? 'text-champagne/90' : 'text-body/75'}`}>
                            {item.sub}
                          </div>
                        </div>
                        <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full ${
                          isSelected ? 'bg-white/15 text-white border border-white/20' : 'bg-champagne/50 text-burgundy border border-gold/30'
                        }`}>
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dining Room Scale Selectors */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                    2. Dining Room Scale
                  </span>
                  <span className="text-[11px] text-burgundy/80 font-mono font-semibold">
                    {scaleConfigs[selectedScale]?.label}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'intimate', label: '40–60', unit: 'Seats' },
                    { id: 'medium', label: '70–110', unit: 'Seats' },
                    { id: 'grand', label: '120+', unit: 'Seats' }
                  ].map((scale) => {
                    const isSelected = selectedScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setSelectedScale(scale.id)}
                        className={`py-3.5 px-2 rounded-2xl text-center border transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#421720] text-white border-[#421720] shadow-md ring-2 ring-gold/40'
                            : 'bg-white text-espresso border-champagne/80 hover:border-burgundy/40 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <span className={`block font-headline font-bold text-lg leading-tight ${isSelected ? 'text-white' : 'text-burgundy'}`}>
                          {scale.label}
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider block mt-0.5 font-semibold ${
                          isSelected ? 'text-champagne' : 'text-body/70'
                        }`}>
                          {scale.unit}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* COLUMN 2: Operational Roadmap & Timeline (Crisp White Architectural Dossier) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-champagne/90 rounded-3xl p-6 sm:p-8 shadow-warm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-burgundy via-rose to-gold" />
              
              {/* Active Concept Summary Banner */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-champagne/70">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-rose font-mono font-bold block">
                      Estimated Scope
                    </span>
                    <h3 className="font-headline font-bold text-xl sm:text-2xl text-burgundy mt-1">
                      {activeEstimator.name}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-champagne/50 border border-gold/40 text-burgundy text-xs font-mono font-bold shadow-sm shrink-0">
                    {activeEstimator.label}
                  </span>
                </div>

                {/* Connected Milestone Trajectory */}
                <div className="mt-6 space-y-5">
                  
                  {/* Node 1: Target Prime Cost */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-background/50 border border-champagne/50">
                    <div className="w-10 h-10 rounded-xl bg-champagne/60 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-burgundy shadow-sm">
                      <FiTrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose uppercase tracking-wider">
                          Target Prime Cost
                        </span>
                        <span className="font-mono text-lg font-bold text-burgundy">
                          {activeEstimator.targetPrime}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-body/80 font-light mt-0.5 leading-relaxed">
                        Calculated cost-of-goods &amp; direct kitchen labor margin threshold.
                      </p>
                    </div>
                  </div>

                  {/* Node 2: Timeline from Concept to Service */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-background/50 border border-champagne/50">
                    <div className="w-10 h-10 rounded-xl bg-champagne/60 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-burgundy shadow-sm">
                      <FiCompass className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose uppercase tracking-wider">
                          Concept to First Service
                        </span>
                        <span className="font-mono text-lg font-bold text-burgundy">
                          {activeEstimator.timelineEst}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-body/80 font-light mt-0.5 leading-relaxed">
                        Feasibility modeling, equipment sourcing, line geometry &amp; launch.
                      </p>
                    </div>
                  </div>

                  {/* Node 3: Workforce Sizing */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-background/50 border border-champagne/50">
                    <div className="w-10 h-10 rounded-xl bg-champagne/60 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-burgundy shadow-sm">
                      <FiUsers className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose uppercase tracking-wider">
                          Workforce Sizing
                        </span>
                        <span className="font-mono text-lg font-bold text-burgundy">
                          {activeEstimator.staffEst}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-body/80 font-light mt-0.5 leading-relaxed">
                        FOH service leads, culinary line brigade &amp; shift management.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Live Systems Pacing Bar */}
              <div className="pt-5 mt-5 border-t border-champagne/70">
                <div className="flex items-center justify-between text-xs text-body mb-2">
                  <span className="font-medium">Service Flow Pacing</span>
                  <span className="font-mono text-burgundy font-bold bg-champagne/40 px-2.5 py-0.5 rounded-full border border-gold/30">
                    {activeEstimator.pacing}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-champagne/40 border border-champagne/60 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-burgundy via-rose to-gold rounded-full w-4/5" />
                </div>
                <p className="text-xs text-body/75 font-normal mt-2 flex items-center gap-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-rose shrink-0" />
                  <span>Includes <strong className="font-semibold text-burgundy">{activeEstimator.rehearsal}</strong> during launch week.</span>
                </p>
              </div>

            </div>

            {/* COLUMN 3: Architectural Arched Alcove Window */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-warm border-2 border-champagne/90 bg-champagne/20 group">
                <img
                  src={neutralArchImage}
                  alt="Architectural dining niche"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient strictly at bottom for high-contrast CTA text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E15]/95 via-[#2A0E15]/25 to-transparent pointer-events-none" />
                
                {/* Badge at Top of Arch */}
                <div className="absolute top-7 left-0 right-0 flex justify-center z-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-burgundy bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-champagne shadow-sm font-semibold">
                    CPG Opening Doors
                  </span>
                </div>

                {/* Alcove Footer & Primary CTA */}
                <div className="absolute bottom-6 left-5 right-5 text-center space-y-3 z-10">
                  <span className="text-xs text-champagne font-mono tracking-wider block font-semibold">
                    Turnkey Launch Advisory
                  </span>
                  <Link
                    to={`/contact?interest=CPG Opening Doors&concept=${selectedConcept}&scale=${selectedScale}`}
                    className="w-full py-3.5 px-4 rounded-full bg-white text-[#421720] font-bold text-xs uppercase tracking-wider hover:bg-gold hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Build This Operation</span>
                    <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. BUSINESS SERVICES — CORE INSTITUTIONAL ADVISORY (from culinaryprovisiongroup.com)
          The 4 founding pillars: Systems Advisory, Operational Optimization, Workforce Development, Implementation
          ========================================================================= */}
      <section id="services" className="py-24 md:py-32 bg-background border-t border-b border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-rose text-xs font-bold uppercase tracking-[0.35em] mb-3 block">Institutional Advisory</span>
              <h2 className="text-3xl md:text-5xl font-headline text-burgundy">Business Services</h2>
            </div>
            <p className="text-primary/75 max-w-md font-body text-base leading-relaxed font-light">
              We design robust operational processes that embed structure directly into your daily practices. Clear frameworks. Consistent output. Stable labor structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiLayers className="text-rose text-3xl" />,
                title: 'Systems Advisory',
                subtitle: 'Structural Level',
                description: 'Clarifying operational performance through modeling, cost structure analysis, and process design.',
                link: '/services'
              },
              {
                icon: <FiActivity className="text-rose text-3xl" />,
                title: 'Operational Optimization',
                subtitle: 'Day-to-Day Execution',
                description: 'Improving efficiency through labor alignment models, deep-dive workflow analysis, and cost controls.',
                link: '/services/restaurant-tune-up'
              },
              {
                icon: <FiUsers className="text-rose text-3xl" />,
                title: 'Workforce Development',
                subtitle: 'Internal Capability',
                description: 'Building internal capacity through structured training frameworks and custom education programs.',
                link: '/services'
              },
              {
                icon: <FiCheckCircle className="text-rose text-3xl" />,
                title: 'Implementation Support',
                subtitle: 'Systems in Practice',
                description: 'Translating concepts into execution with rollout management, performance tracking, and support.',
                link: '/services/cpg-backstage'
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6">{service.icon}</div>
                  <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold block mb-2">{service.subtitle}</span>
                  <h3 className="text-xl font-headline text-burgundy mb-4 font-bold">{service.title}</h3>
                  <p className="text-sm text-primary/70 font-body leading-relaxed font-light">{service.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-primary/5">
                  <Link to={service.link} className="text-xs uppercase tracking-widest font-bold text-rose flex items-center gap-2 group-hover:text-burgundy transition-colors">
                    Learn More <FiChevronRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. LEARNING & RESOURCES — FOOD EXCELLENCE IN PRACTICE (from culinaryprovisiongroup.com)
          Institutional education program built specifically for culinarians and food service leaders.
          ========================================================================= */}
      <section id="learning" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%">
            <pattern id="grid-pattern-learning-cpg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern-learning-cpg)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.35em]">Educational Offerings</span>
                <span className="bg-accent/20 border border-accent/40 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Guided Pilot — Opening Soon
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-headline mb-6 text-white">Food Excellence in Practice</h2>
              
              <p className="text-base md:text-lg text-white/80 font-body leading-relaxed mb-8 font-light">
                An institutional education program built specifically for professional culinarians and food service leaders. This is not a generic, self-paced course marketplace. It is a structured, rigorous curriculum focused on kitchen economics, food safety architecture, and operational leadership.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <FiAward className="text-accent text-xl mt-1 shrink-0" />
                  <p className="text-sm text-white/95 font-body font-light">
                    <strong className="font-semibold text-white">Rigorous Standards:</strong> Practical, high-fidelity instructional materials matching modern commercial requirements.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FiBookOpen className="text-accent text-xl mt-1 shrink-0" />
                  <p className="text-sm text-white/95 font-body font-light">
                    <strong className="font-semibold text-white">Systems Focus:</strong> Designed around scalable operational frameworks and organizational structures rather than personal recipes.
                  </p>
                </div>
              </div>

              <a 
                href="#routing-section"
                className="inline-flex bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
              >
                Inquire About Guided Pilot
              </a>
            </div>

            {/* Right: Graphic Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-4">Curriculum Framework</span>
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
                  <span>Technology &amp; Inventory Controls</span>
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

      {/* =========================================================================
          8. TECHNOLOGY PREPAREDNESS — FUTURE-READY HOSPITALITY (from culinaryprovisiongroup.com)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-background border-b border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-rose/10 mb-6">
              <FiCpu className="text-rose text-3xl" />
            </div>
            <span className="text-rose text-xs font-bold uppercase tracking-[0.35em] mb-4 block">Systems Preparedness</span>
            <h2 className="text-3xl md:text-4xl font-headline text-burgundy mb-6">Future-Ready Hospitality</h2>
            <p className="text-base md:text-lg text-primary/80 font-body leading-relaxed max-w-2xl mx-auto font-light">
              The hospitality technology landscape is evolving rapidly. Operational readiness requires adapting to digital workflows, automation, and intelligent inventory without losing the human core of hospitality. We help hospitality systems prepare for responsible innovation, making technology work for your team, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. INSTITUTIONAL/ABOUT PREVIEW — WHY CPG EXISTS (from culinaryprovisiongroup.com)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-rose text-xs font-bold uppercase tracking-[0.35em] mb-4 block">About the Institution</span>
              <h2 className="text-3xl md:text-5xl font-headline text-burgundy mb-6 leading-tight">Why CPG Exists</h2>
              <p className="text-primary/80 font-body leading-relaxed mb-8 font-light text-base">
                We believe hospitality businesses succeed when structural design aligns perfectly with human effort. CPG provides the systems and resources to make consistency normal.
              </p>
              <Link 
                to="/about"
                className="text-rose font-bold hover:text-burgundy transition-all inline-flex items-center gap-2 group tracking-widest text-sm uppercase"
              >
                <span>Learn About CPG</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between border border-primary/5">
                <div>
                  <span className="text-xs font-bold text-rose mb-4 block">01 / WHO</span>
                  <h4 className="text-lg font-headline font-bold text-burgundy mb-3">Who CPG Is</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">An independent, systems-focused advisory institution built by experienced hospitality professionals.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between border border-primary/5">
                <div>
                  <span className="text-xs font-bold text-rose mb-4 block">02 / WHY</span>
                  <h4 className="text-lg font-headline font-bold text-burgundy mb-3">Why We Exist</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">To eliminate systemic instability in food systems, ensuring profitability and career sustainability.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-2xl flex flex-col justify-between border border-primary/5">
                <div>
                  <span className="text-xs font-bold text-rose mb-4 block">03 / HOW</span>
                  <h4 className="text-lg font-headline font-bold text-burgundy mb-3">How It Works</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">We define structural requirements, design operational processes, and support team implementation.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FINAL CTA WITH INTELLIGENT INQUIRY ROUTING (from culinaryprovisiongroup.com)
          Updated to seamlessly include the newly added restaurant launch pathway!
          ========================================================================= */}
      <section 
        id="routing-section"
        className="relative py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backoffice3}")` }}
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-black/60 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 w-full max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.35em] mb-4 block">Inquiry Pathways</span>
            <h2 className="text-3xl md:text-5xl font-headline text-white mb-6">What brings you to CPG?</h2>
            <p className="text-white/75 max-w-lg mx-auto font-body text-sm font-light leading-relaxed">
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
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-accent font-bold">Selected Path:</span>
                <p className="text-white text-sm font-body font-bold">{routes.find(r => r.id === selectedRoute)?.title}</p>
              </div>
              <button
                onClick={executeRoute}
                className="bg-accent text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-primary transition-all duration-300 whitespace-nowrap shadow-lg flex items-center gap-2"
              >
                <span>{routes.find(r => r.id === selectedRoute)?.actionText}</span>
                <FiArrowRight />
              </button>
            </motion.div>
          )}

          {!selectedRoute && (
            <div className="text-center text-white/50 text-xs italic">
              Please choose a path above to proceed to contact advisory services.
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Home;