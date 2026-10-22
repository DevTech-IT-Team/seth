import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiCompass, 
  FiActivity, 
  FiLayers, 
  FiBookOpen, 
  FiCpu, 
  FiShare2, 
  FiClock, 
  FiShield, 
  FiAward,
  FiTrendingUp,
  FiCheck,
  FiSliders,
  FiX
} from 'react-icons/fi';

// Authentic Assets
import heroImage from '../assets/restaurant-hero.jpg';
import launchPrepImage from '../assets/launch-prep.jpg';
import kitchenImage from '../assets/Kitchen Counter 1.jpg';
import teamImage from '../assets/Standards 4.jpg';
import meetingImage from '../assets/Meeting 1.jpg';
import backstageImage from '../assets/Backoffice 1.jpg';
import prepImage from '../assets/Prep 1.jpg';

const Home = () => {
  // Hero interactive practice showcase state (Turnkey Launch, Margin Recovery, Backstage SOPs)
  const [activePractice, setActivePractice] = useState(0);

  // Stage state for CPG Opening Doors showcase
  const [activeStage, setActiveStage] = useState(0);

  // Concept Estimator State
  const [selectedConcept, setSelectedConcept] = useState('bistro');
  const [selectedScale, setSelectedScale] = useState('medium');

  const operationalPractices = [
    {
      id: 'launch',
      tabLabel: 'Turnkey Launch',
      isNew: true,
      title: 'CPG Opening Doors',
      category: 'Restaurant Launch Advisory',
      tag: 'New Practice · Turnkey Launch',
      desc: 'Guiding founders from blank canvas to first service — concept feasibility, kitchen ergonomics, and launch command.',
      stat: '90–120 Days to Doors',
      statDetail: '100% Launch Readiness',
      deliverables: ['Financial Pro-Forma', 'Kitchen Line Schematic', 'Rehearsal Services'],
      image: launchPrepImage,
      alt: 'Restaurateur and executive chef planning kitchen blueprints',
      link: '/services/opening-doors',
      actionText: 'Explore Launch Advisory'
    },
    {
      id: 'tuneup',
      tabLabel: 'Margin Recovery',
      isNew: false,
      title: 'Restaurant Tune-Up',
      category: 'Operational Diagnostic & Lift',
      tag: 'Operational Diagnostic',
      desc: 'Restoring profitability through line rebalancing, labor scheduling control, and prime cost discipline.',
      stat: '3%–7% Margin Lift',
      statDetail: '28.4% Prime Cost Target',
      deliverables: ['Prime Cost Audit', 'Table Turn Dynamics', 'Menu Margin Engineering'],
      image: heroImage,
      alt: 'High-volume dining room with synchronized floor flow and guest experience',
      link: '/services/restaurant-tune-up',
      actionText: 'Explore Tune-Up Audit'
    },
    {
      id: 'backstage',
      tabLabel: 'Backstage SOPs',
      isNew: false,
      title: 'CPG Backstage',
      category: 'Institutional SOP Systems',
      tag: 'Systems Architecture',
      desc: 'Standardizing recipe yields, inventory par controls, station ergonomics, and brigade operational manuals.',
      stat: 'Zero Ticket Stalls',
      statDetail: 'Standardized Plate Economics',
      deliverables: ['Master SOP Manual', 'Ingredient Yield Matrix', 'Supplier Order Guides'],
      image: kitchenImage,
      alt: 'Professional culinary kitchen station line ergonomics and mise en place',
      link: '/services/cpg-backstage',
      actionText: 'Explore Backstage Systems'
    }
  ];

  const currentPractice = operationalPractices[activePractice];

  const launchStages = [
    {
      num: '01',
      title: 'Concept & Financial Feasibility',
      subtitle: 'Feasibility, Lease Review & Unit Economics',
      desc: 'We stress-test your concept against market realities. Before capital is deployed, we model check averages, seat turnover dynamics, food & labor prime targets, and break-even thresholds.',
      deliverables: ['Pro-forma unit economic financial model', 'Menu pricing & target cost matrix', 'Lease & space feasibility audit'],
      image: meetingImage,
      timeframe: 'Weeks 1–4'
    },
    {
      num: '02',
      title: 'Kitchen & Line Architecture',
      subtitle: 'Line Ergonomics, Flow Corridors & Equipment Sourcing',
      desc: 'Great food fails if cooks collide. We map station footprints, pass-through heatlamps, walk-in par organization, and dish-pit return corridors with architects to prevent expensive rework.',
      deliverables: ['BOH station flow schematic', 'Equipment specification & vendor bidding', 'Health department & hood compliance check'],
      image: kitchenImage,
      timeframe: 'Weeks 4–8'
    },
    {
      num: '03',
      title: 'Backstage Systems & Controls',
      subtitle: 'Turnkey SOPs, Recipe Costing & POS Setup',
      desc: 'We install the institutional controls that protect opening cash flow: recipe yield sheets, weekly par order sheets, prime supplier agreements, and complete POS programming.',
      deliverables: ['Custom Master SOP manual', 'Ingredient yield & plate costing matrix', 'Supplier accounts & order guide setup'],
      image: backstageImage,
      timeframe: 'Weeks 8–12'
    },
    {
      num: '04',
      title: 'Opening Rehearsals & Launch Week',
      subtitle: 'Staff Training, Mock Services & Floor Command',
      desc: 'We train your front and back of house, direct simulated friends & family services to test the line under pressure, and stand shoulder-to-shoulder on the floor during launch week.',
      deliverables: ['FOH service etiquette curriculum', 'Simulated dinner service rehearsals', 'On-floor launch week execution & 90-day stabilization'],
      image: launchPrepImage,
      timeframe: 'Launch & 90 Days'
    }
  ];

  const currentStage = launchStages[activeStage];

  // Estimator Calculations
  const conceptConfigs = {
    bistro: {
      name: 'Chef-Driven Neighborhood Bistro',
      targetPrime: '28.4%',
      stations: '3 Hot Stations + Cold Garde Manger + Barista Pass',
      pacing: '1h 45m average ticket duration',
      rehearsal: '4 Simulated Service Dry Runs'
    },
    brasserie: {
      name: 'High-Volume Modern Brasserie',
      targetPrime: '29.1%',
      stations: '5 Hot Stations + Raw Bar + Dedicated Expediter Rail',
      pacing: '1h 30m dual-turn table pacing',
      rehearsal: '6 Staged Dinner Simulations'
    },
    hearth: {
      name: 'Artisanal Wood-Fired Hearth',
      targetPrime: '27.8%',
      stations: 'Wood Hearth Line + Sauté Station + Pastry Counter',
      pacing: '2h 00m tasting & à la carte pacing',
      rehearsal: '5 Live Thermal Rehearsals'
    }
  };

  const scaleConfigs = {
    intimate: { label: '40–60 Seats', staffEst: '14–18 Total Staff', timelineEst: '4–6 Months' },
    medium: { label: '70–110 Seats', staffEst: '24–32 Total Staff', timelineEst: '6–9 Months' },
    grand: { label: '120+ Seats', staffEst: '40–55 Total Staff', timelineEst: '9–12 Months' }
  };

  const activeEstimator = {
    ...conceptConfigs[selectedConcept],
    ...scaleConfigs[selectedScale]
  };

  return (
    <div className="flex flex-col bg-[#FFF8F2] text-espresso overflow-x-hidden selection:bg-rose/15 selection:text-burgundy">

      {/* =========================================================================
          HERO SECTION — HIGH-END LUXURY EDITORIAL HOSPITALITY STAGE
          Purposeful, high-impact layout showcasing CPG's core advisory practices.
          ========================================================================= */}
      <section className="relative pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EB] to-[#FFF8F2]">
        {/* Ambient atmospheric radial glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gold/15 rounded-full blur-3xl pointer-events-none -mr-32" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-rose/10 rounded-full blur-3xl pointer-events-none -ml-32" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Brand Thesis & High-Impact CTAs */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              
              {/* Sleek Announcement Pill */}
              <div>
                <Link
                  to="/services/opening-doors"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gold/50 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-burgundy shadow-sm hover:border-gold hover:shadow-warm transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                  <span className="text-rose font-bold">New Practice:</span>
                  <span>CPG Opening Doors — Restaurant Launch Advisory</span>
                  <FiArrowRight className="w-3.5 h-3.5 text-rose group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Main Authority Headline for CPG — High-Impact Editorial Rhythm */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-headline font-normal text-burgundy leading-[1.12] tracking-tight">
                Operational Mastery Behind{' '}
                <span className="italic font-normal text-rose underline decoration-gold/50 decoration-1 underline-offset-8">
                  Extraordinary Dining.
                </span>
              </h1>

              {/* Tagline / Positioning Statement */}
              <p className="text-xs sm:text-sm font-headline italic text-rose font-normal border-l-2 border-gold pl-3.5 py-0.5">
                “Hospitality is an art. Running an enduring restaurant is an operational science.”
              </p>

              {/* Supporting Editorial Description */}
              <p className="text-xs sm:text-sm text-body font-light leading-relaxed max-w-xl">
                Culinary Provision Group partners with independent restaurateurs, executive chefs, and hospitality brands to engineer resilient operations—from turnkey new restaurant launches to institutional backstage systems and margin optimization.
              </p>

              {/* Core CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#services"
                  className="btn-primary py-3 px-6 text-xs sm:text-sm group shadow-warm hover:shadow-warm-lg"
                >
                  <span>Explore Advisory Services</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  to="/services/opening-doors"
                  className="btn-secondary py-3 px-6 text-xs sm:text-sm group flex items-center justify-center gap-2"
                >
                  <FiCompass className="w-4 h-4 text-rose" />
                  <span>Launch a Restaurant (Opening Doors)</span>
                </Link>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-4 border-t border-champagne/80 grid grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/60 border border-champagne/80">
                  <span className="block font-headline font-bold text-burgundy text-xs sm:text-sm">Turnkey Launches</span>
                  <span className="text-muted font-light leading-tight block text-[11px] mt-0.5">Concept to First Service</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/60 border border-champagne/80">
                  <span className="block font-headline font-bold text-burgundy text-xs sm:text-sm">Margin Recovery</span>
                  <span className="text-muted font-light leading-tight block text-[11px] mt-0.5">3%–7% Controllable Lift</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/60 border border-champagne/80">
                  <span className="block font-headline font-bold text-burgundy text-xs sm:text-sm">SOP Systems</span>
                  <span className="text-muted font-light leading-tight block text-[11px] mt-0.5">Institutional Stability</span>
                </div>
              </div>

            </div>

            {/* Right Column: Purpose-Driven CPG Practice Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-3.5 sm:p-4 border-2 border-gold/40 shadow-2xl shadow-burgundy/10 transition-all">
                
                {/* Micro-Header: Purpose Explanation */}
                <div className="flex items-center justify-between px-1 mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F6B38]">
                  <span>Core Advisory Practices</span>
                  <span className="text-rose flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                    Live Solutions
                  </span>
                </div>

                {/* 3 Practice Switcher Tabs: Turnkey Launch | Margin Recovery | Backstage SOPs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#FAF4ED] rounded-xl mb-3 border border-champagne">
                  {operationalPractices.map((practice, pIdx) => {
                    const isSelected = activePractice === pIdx;
                    return (
                      <button
                        key={practice.id}
                        type="button"
                        onClick={() => setActivePractice(pIdx)}
                        className={`py-2 px-2 rounded-lg text-[10px] sm:text-xs font-semibold tracking-wide transition-all relative flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-burgundy text-white shadow-md'
                            : 'text-espresso/75 hover:text-burgundy hover:bg-white/60'
                        }`}
                      >
                        <span className="whitespace-nowrap">{practice.tabLabel}</span>
                        {practice.isNew && (
                          <span className={`text-[8px] font-bold uppercase px-1 py-0.2 rounded-full ${
                            isSelected ? 'bg-rose text-white' : 'bg-rose/15 text-rose'
                          }`}>
                            New
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Active Practice Cinematic Window */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-champagne/80 bg-espresso">
                  <img
                    src={currentPractice.image}
                    alt={currentPractice.alt}
                    className="w-full h-[250px] sm:h-[280px] lg:h-[300px] object-cover object-center transition-all duration-500 hover:scale-105"
                  />
                  
                  {/* Subtle Top Floating Pill */}
                  <div className="absolute top-3 left-3 bg-burgundy/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/40 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span>{currentPractice.tag}</span>
                  </div>

                  {/* Floating Bottom Live KPI Bar */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-espresso/90 backdrop-blur-md rounded-xl p-2.5 border border-gold/30 text-white flex items-center justify-between gap-2 shadow-lg">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                        {currentPractice.stat}
                      </span>
                      <span className="text-[10px] text-champagne/80 font-light block">
                        {currentPractice.statDetail}
                      </span>
                    </div>

                    <Link
                      to={currentPractice.link}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold hover:bg-white text-burgundy text-[10px] font-bold uppercase tracking-wider transition-colors shrink-0"
                    >
                      <span>Explore</span>
                      <FiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Card Drawer: Practice Description & Concrete Deliverables */}
                <div className="mt-3 px-1 pt-2 border-t border-champagne/70 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-headline font-bold text-burgundy text-sm sm:text-base">
                      {currentPractice.title}
                    </h3>
                    <span className="text-[10px] text-muted font-medium uppercase tracking-wider">
                      {currentPractice.category}
                    </span>
                  </div>

                  <p className="text-xs text-body font-light leading-relaxed">
                    {currentPractice.desc}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentPractice.deliverables.map((del, dIdx) => (
                      <span 
                        key={dIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF4ED] border border-champagne text-[10px] font-medium text-espresso/80"
                      >
                        <FiCheck className="w-2.5 h-2.5 text-rose shrink-0" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          GRAND NEW SERVICE ANNOUNCEMENT: CPG OPENING DOORS
          (Dedicated, impressive feature announcing the new restaurant launch service)
          ========================================================================= */}
      <section className="py-20 md:py-32 bg-[#1A1214] text-cream relative overflow-hidden border-y border-gold/30">
        {/* Ambient Warm Luxury Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          
          {/* Announcement Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/40 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              <FiCompass className="w-3.5 h-3.5 text-gold" />
              <span>New Practice Announcement</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white leading-tight">
              Introducing <span className="italic font-normal text-champagne">CPG Opening Doors.</span>
            </h2>
            
            <p className="font-headline text-xl text-champagne/90 font-light italic">
              Turnkey Restaurant Launch Advisory: From Concept Blueprint to Opening Night Command.
            </p>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Opening a restaurant involves hundreds of interdependent operational decisions. Most failures happen before the doors ever open—due to flawed line geometry, runaway pre-opening spending, or chaotic opening-week staffing. CPG Opening Doors is our comprehensive new advisory service built to guide founders from blank canvas to packed dining room.
            </p>
          </div>

          {/* 4-Stage Interactive Showcase Container */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-2xl">
            
            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 pb-6 border-b border-white/10">
              {launchStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`text-left p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                      isActive
                        ? 'bg-champagne text-burgundy shadow-warm scale-[1.02]'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        isActive ? 'text-burgundy' : 'text-gold'
                      }`}>
                        Stage {stage.num}
                      </span>
                      <span className={`text-[10px] ${isActive ? 'text-burgundy/70' : 'text-white/60'}`}>
                        {stage.timeframe}
                      </span>
                    </div>
                    <span className={`font-headline font-semibold text-sm line-clamp-2 ${
                      isActive ? 'text-burgundy' : 'text-white'
                    }`}>
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Narrative & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block text-xs font-semibold uppercase tracking-wider text-gold bg-gold/15 border border-gold/30 px-3 py-1 rounded-full">
                  Stage {currentStage.num} · {currentStage.timeframe}
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-white">
                  {currentStage.title}
                </h3>

                <p className="font-headline italic text-base text-champagne font-light">
                  {currentStage.subtitle}
                </p>

                <p className="text-base text-white/80 font-light leading-relaxed">
                  {currentStage.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-champagne">
                    Tangible Operational Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {currentStage.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-white/90 font-light">
                        <FiCheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/services/opening-doors"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-burgundy bg-champagne hover:bg-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <span>Explore CPG Opening Doors</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact?interest=CPG Opening Doors"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Inquire About Launch Advisory</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Photographic Evidence */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 p-2">
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="w-full h-[340px] sm:h-[400px] object-cover object-center rounded-xl"
                  />
                  <div className="mt-3 px-2 flex items-center justify-between text-xs text-white/70">
                    <span className="font-medium text-champagne">{currentStage.title}</span>
                    <span>{currentStage.timeframe}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LAUNCH BLUEPRINT EXPLORER
          An engaging interactive tool demonstrating operational intelligence.
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAF4ED] border-b border-champagne/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="badge-editorial">Launch Scope Estimator</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Explore Your Launch Framework
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Select your envisioned concept architecture and seating capacity to preview the operational milestones CPG engineers for your venue.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-champagne shadow-warm">
            
            {/* Selection Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-champagne">
              
              {/* Concept Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-burgundy">
                  1. Select Concept Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'bistro', label: 'Bistro / Trattoria' },
                    { id: 'brasserie', label: 'High-Volume Brasserie' },
                    { id: 'hearth', label: 'Wood-Fired Hearth' }
                  ].map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedConcept(c.id)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                        selectedConcept === c.id
                          ? 'bg-burgundy text-white shadow-sm'
                          : 'bg-[#FAF4ED] text-espresso hover:bg-champagne/50 border border-champagne/70'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Capacity Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-burgundy">
                  2. Select Dining Room Capacity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'intimate', label: '40–60 Seats' },
                    { id: 'medium', label: '70–110 Seats' },
                    { id: 'grand', label: '120+ Seats' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedScale(s.id)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                        selectedScale === s.id
                          ? 'bg-burgundy text-white shadow-sm'
                          : 'bg-[#FAF4ED] text-espresso hover:bg-champagne/50 border border-champagne/70'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Dynamic Results Display */}
            <div className="pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-champagne">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted block mb-1">
                    Concept Profile
                  </span>
                  <span className="font-headline font-bold text-base text-burgundy block">
                    {activeEstimator.name}
                  </span>
                </div>

                <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-champagne">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted block mb-1">
                    Target Prime Cost
                  </span>
                  <span className="font-headline font-bold text-2xl text-rose block">
                    {activeEstimator.targetPrime}
                  </span>
                  <span className="text-[11px] text-muted font-light">Food + Beverage + Labor</span>
                </div>

                <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-champagne">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted block mb-1">
                    Estimated Timeline
                  </span>
                  <span className="font-headline font-bold text-2xl text-burgundy block">
                    {activeEstimator.timelineEst}
                  </span>
                  <span className="text-[11px] text-muted font-light">Concept to First Service</span>
                </div>

                <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-champagne">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted block mb-1">
                    Workforce Sizing
                  </span>
                  <span className="font-headline font-bold text-2xl text-burgundy block">
                    {activeEstimator.staffEst}
                  </span>
                  <span className="text-[11px] text-muted font-light">FOH &amp; BOH Core Brigade</span>
                </div>

              </div>

              <div className="mt-6 p-5 rounded-2xl bg-[#FFF8F2] border border-gold/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-burgundy block uppercase tracking-wide">
                    Station Geometry &amp; Pacing Protocol:
                  </span>
                  <p className="text-xs sm:text-sm text-body font-light">
                    {activeEstimator.stations} · {activeEstimator.pacing}
                  </p>
                </div>
                <Link
                  to="/contact?interest=CPG Opening Doors"
                  className="btn-primary text-xs py-3 px-6 whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Build This Operation With Us</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: COMPLETE CPG ADVISORY CAPABILITIES (MAIN CONTEXT)
          ========================================================================= */}
      <section id="services" className="py-20 md:py-32 bg-[#FFF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Comprehensive Capabilities</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Our Advisory Practice
            </h2>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Designed for independent operators, executive chefs, and growing hospitality groups across the entire restaurant lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: CPG Opening Doors (New Launch Advisory) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-rose/30 shadow-warm flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 relative">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose bg-rose/10 px-3 py-1 rounded-full">
                    New Flagship Service
                  </span>
                  <FiCompass className="w-5 h-5 text-rose" />
                </div>
                <h3 className="text-2xl font-headline font-semibold text-burgundy">
                  CPG Opening Doors
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted block -mt-2">
                  Restaurant Launch Advisory
                </span>
                <p className="text-sm text-body font-light leading-relaxed">
                  Turnkey operational guidance for launching new restaurants. We partner with you through feasibility, kitchen line geometry, vendor negotiations, SOP development, and opening-night execution.
                </p>
                <div className="pt-2 space-y-2 text-xs text-espresso/80 font-light border-t border-champagne/60">
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-rose" />
                    <span>Concept modeling & financial pro-forma</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-rose" />
                    <span>Kitchen line geometry & station flow</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-rose" />
                    <span>On-site opening week floor command</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-champagne/60 flex items-center justify-between">
                <Link
                  to="/services/opening-doors"
                  className="text-xs font-semibold uppercase tracking-wider text-rose flex items-center gap-1.5 hover:text-burgundy transition-colors"
                >
                  <span>Explore Opening Doors</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact?interest=CPG Opening Doors"
                  className="text-xs text-muted hover:text-rose transition-colors"
                >
                  Inquire &rarr;
                </Link>
              </div>
            </div>

            {/* Service 2: Restaurant Tune-Up */}
            <div className="bg-white rounded-3xl p-8 border border-champagne shadow-warm-sm flex flex-col justify-between hover:shadow-warm transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy bg-champagne/60 px-3 py-1 rounded-full">
                    Active Operations
                  </span>
                  <FiActivity className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-headline font-semibold text-burgundy">
                  Restaurant Tune-Up
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted block -mt-2">
                  Operational Diagnostic & Margin Recovery
                </span>
                <p className="text-sm text-body font-light leading-relaxed">
                  A high-impact operational diagnostic for active dining rooms. We pinpoint margin leaks, labor scheduling misalignment, and kitchen bottlenecks to restore profitability and team flow.
                </p>
                <div className="pt-2 space-y-2 text-xs text-espresso/80 font-light border-t border-champagne/60">
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Controllable cost & prime margin audit</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Labor deployment & shift balance</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Actionable 60-day operational roadmap</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-champagne/60 flex items-center justify-between">
                <Link
                  to="/services/restaurant-tune-up"
                  className="text-xs font-semibold uppercase tracking-wider text-burgundy flex items-center gap-1.5 hover:text-rose transition-colors"
                >
                  <span>Explore Tune-Up</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact?interest=Restaurant Tune-Up"
                  className="text-xs text-muted hover:text-rose transition-colors"
                >
                  Request Audit &rarr;
                </Link>
              </div>
            </div>

            {/* Service 3: CPG Backstage */}
            <div className="bg-white rounded-3xl p-8 border border-champagne shadow-warm-sm flex flex-col justify-between hover:shadow-warm transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy bg-champagne/60 px-3 py-1 rounded-full">
                    Infrastructure
                  </span>
                  <FiLayers className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-headline font-semibold text-burgundy">
                  CPG Backstage
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted block -mt-2">
                  Institutional SOPs & Management Systems
                </span>
                <p className="text-sm text-body font-light leading-relaxed">
                  Institutional systems architecture designed for restaurant owners who want repeatable back-office clarity. We establish SOPs, financial reporting, and inventory par controls.
                </p>
                <div className="pt-2 space-y-2 text-xs text-espresso/80 font-light border-t border-champagne/60">
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Custom Master Standard Operating Procedures</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Cost-of-goods & purchasing tracking sheets</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Management accountability scorecards</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-champagne/60 flex items-center justify-between">
                <Link
                  to="/services/cpg-backstage"
                  className="text-xs font-semibold uppercase tracking-wider text-burgundy flex items-center gap-1.5 hover:text-rose transition-colors"
                >
                  <span>Explore Backstage</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact?interest=CPG Backstage"
                  className="text-xs text-muted hover:text-rose transition-colors"
                >
                  Inquire &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: CPG KITCHEN & HOSPITALITY LAB (LEARNING & APPLIED INNOVATION)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-y border-champagne/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Education &amp; Innovation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Learning &amp; Applied Research
            </h2>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Open educational modules and applied technology research for active culinarians and managers—free from paywalls or enrollment fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* CPG Kitchen */}
            <div className="bg-[#FAF4ED] rounded-3xl p-8 sm:p-10 border border-champagne flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose">
                  <FiBookOpen className="w-4 h-4" />
                  <span>Culinary Standards</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-burgundy">
                  CPG Kitchen
                </h3>
                <p className="text-sm text-body font-light leading-relaxed">
                  Moving beyond recipe books into true culinary management. CPG Kitchen equips cooks, sous chefs, and kitchen directors with practical tools for food safety architecture, line station ergonomics, recipe yield costing, and team mentorship.
                </p>
                <div className="space-y-2.5 text-xs text-espresso/90 font-light">
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Module 01: Kitchen Systems &amp; Line Geometry</span>
                    <span className="text-muted font-medium">Core Focus</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Module 02: Unit Economics &amp; Yield Calculations</span>
                    <span className="text-muted font-medium">Core Focus</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Module 03: Food Safety &amp; Sanitation Architecture</span>
                    <span className="text-muted font-medium">Core Focus</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 mt-6 border-t border-champagne/60 flex items-center justify-between">
                <Link
                  to="/learning/cpg-kitchen"
                  className="btn-secondary"
                >
                  <span>Explore Curriculum</span>
                </Link>
                <Link
                  to="/contact?interest=CPG Kitchen"
                  className="text-xs text-rose font-medium hover:underline"
                >
                  Express Interest &rarr;
                </Link>
              </div>
            </div>

            {/* CPG Hospitality Lab */}
            <div className="bg-[#FAF4ED] rounded-3xl p-8 sm:p-10 border border-champagne flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                  <FiCpu className="w-4 h-4 text-gold" />
                  <span>Modern Workflows</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-burgundy">
                  Hospitality Lab
                </h3>
                <p className="text-sm text-body font-light leading-relaxed">
                  Modern technology moves fast, but without thoughtful execution, it isolates guests and frustrates servers. Hospitality Lab evaluates POS ecosystems, automated inventory pars, and digital workflows that enhance rather than replace human hospitality.
                </p>
                <div className="space-y-2.5 text-xs text-espresso/90 font-light">
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Lab Study 01: Kitchen Display System (KDS) Pacing</span>
                    <span className="text-muted font-medium">Applied Study</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Lab Study 02: Automated Pars &amp; Inventory Replenishment</span>
                    <span className="text-muted font-medium">Applied Study</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/70 flex items-center justify-between">
                    <span>Lab Study 03: Human-Centered Guest Touchpoints</span>
                    <span className="text-muted font-medium">Applied Study</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 mt-6 border-t border-champagne/60 flex items-center justify-between">
                <Link
                  to="/learning/cpg-hospitality-lab"
                  className="btn-secondary"
                >
                  <span>Explore Lab Insights</span>
                </Link>
                <Link
                  to="/contact?interest=CPG Hospitality Lab"
                  className="text-xs text-rose font-medium hover:underline"
                >
                  Express Interest &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CLOSING HEROIC CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 md:py-32 bg-[#FFF8F2] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 space-y-8 relative z-10">
          
          <span className="badge-editorial">Begin Your Partnership</span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
            Ready to build an enduring operation? <br className="hidden sm:inline" />
            <span className="italic font-light text-rose">Let's discuss your dining room.</span>
          </h2>

          <p className="text-base sm:text-lg text-body font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are preparing to open a new restaurant or seeking operational clarity for an active concept, Culinary Provision Group is ready to partner with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              <span>Consult Our Advisory Team</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services/opening-doors"
              className="btn-white w-full sm:w-auto"
            >
              <span>Explore CPG Opening Doors</span>
            </Link>
          </div>

          <div className="pt-8 text-xs text-muted flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>Direct Advisory Retainers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold hidden sm:inline" />
            <span>Turnkey Launch Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold hidden sm:inline" />
            <span>Confidential Project Scoping</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;