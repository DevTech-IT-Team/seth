import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiCompass, 
  FiCalendar, 
  FiLayers, 
  FiShield, 
  FiUsers, 
  FiTrendingUp, 
  FiClock, 
  FiAward,
  FiStar,
  FiCheck,
  FiX
} from 'react-icons/fi';

import heroImg from '../assets/launch-prep.jpg';
import restaurantImg from '../assets/restaurant-hero.jpg';
import kitchenImg from '../assets/Kitchen Counter 1.jpg';
import teamImg from '../assets/Standards 4.jpg';
import meetingImg from '../assets/Meeting 1.jpg';
import UnifiedInquiryForm from '../components/UnifiedInquiryForm';

const OpeningDoors = () => {
  const phases = [
    {
      num: 'Phase 01',
      title: 'Concept & Financial Feasibility',
      timeframe: 'Weeks 1–4',
      badge: 'Foundation',
      desc: 'We stress-test your culinary vision against real-world economics. We build unit-level financial models, estimate check averages, evaluate lease terms, and establish breakeven occupancy thresholds before capital commitments.',
      checklist: [
        'Pro-forma income statement & cash flow timeline',
        'Check average & seat turnover financial modeling',
        'Lease term review & capital expenditure schedule',
        'Concept positioning & demographic viability check'
      ]
    },
    {
      num: 'Phase 02',
      title: 'Kitchen Engineering & Flow Architecture',
      timeframe: 'Weeks 4–8',
      badge: 'Ergonomics',
      desc: 'We map line geometry, prep station footprints, warewashing cycles, and bar service corridors. We coordinate directly with architects and equipment vendors to prevent costly architectural change orders.',
      checklist: [
        'BOH cook station & pass-through heatlamp geometry',
        'Equipment specification schedule & vendor bidding',
        'Health department, ventilation & grease trap compliance review',
        'Service corridor & dish-return traffic flow mapping'
      ]
    },
    {
      num: 'Phase 03',
      title: 'Backstage Systems & Vendor Infrastructure',
      timeframe: 'Weeks 8–12',
      badge: 'Systems',
      desc: 'We configure prime vendor supply agreements, establish ordering pars, develop standard recipe costing sheets, install inventory counting routines, and program the POS database.',
      checklist: [
        'Turnkey Master Standard Operating Procedures (SOPs)',
        'Standard recipe yield matrices & margin calculators',
        'Prime purveyor credit terms & weekly par order sheets',
        'POS menu programming, modifiers & printer routing'
      ]
    },
    {
      num: 'Phase 04',
      title: 'Workforce Hiring, Culture & Pre-Opening Training',
      timeframe: 'Weeks 12–16',
      badge: 'Culture',
      desc: 'We create tailored job profiles, interview line leads, establish service standards, write front-of-house training manuals, and direct live simulated service runs with friends and family.',
      checklist: [
        'Tailored FOH & BOH hiring profiles and interview rubrics',
        'Service sequence, wine service & allergy protocol manuals',
        'Station prep checklists & opening/closing side-work cards',
        'Full dress rehearsal & mock service dinner execution'
      ]
    },
    {
      num: 'Phase 05',
      title: 'Opening Week Command & 90-Day Stabilization',
      timeframe: 'Launch & Beyond',
      badge: 'Execution',
      desc: 'Our senior operations partners stand on the floor during opening week. We troubleshoot ticket spikes, recalibrate station prep, manage supplier returns, and stay engaged until the operation is self-sustaining.',
      checklist: [
        'Direct on-site operational presence during public launch week',
        'Real-time line pacing & ticket rail bottleneck resolution',
        'Post-opening 30/60/90-day prime cost variance audits',
        'Management coaching for complete operational independence'
      ]
    }
  ];

  const deliverables = [
    { title: 'Turnkey Master SOP Manual', desc: 'Custom documentation covering opening, closing, side-work, line checks, and sanitation.' },
    { title: 'Recipe Costing Architecture', desc: 'Complete ingredient yield matrices and margin calculators for every menu item.' },
    { title: 'Vendor & Inventory Playbook', desc: 'Pre-negotiated purveyor agreements and structured weekly par order sheets.' },
    { title: 'FOH & BOH Training Curriculum', desc: 'Structured onboarding packets, station checklists, and service etiquette guides.' },
    { title: 'Prime Cost Labor Matrix', desc: 'Demand-based scheduling templates to protect opening payroll margins.' },
    { title: 'On-Site Launch Floor Team', desc: 'Direct veteran operational presence during mock rehearsals and public debut.' }
  ];

  return (
    <div className="bg-cream min-h-screen text-espresso selection:bg-rose/15 selection:text-burgundy">
      
      {/* =========================================================================
          HERO SECTION — CPG OPENING DOORS
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-cream via-[#FAF4ED] to-cream border-b border-champagne/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-champagne/80 border border-gold/40 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy shadow-warm-sm">
                <FiStar className="w-3.5 h-3.5 text-rose animate-pulse" />
                <span>Flagship Restaurant Launch Advisory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                CPG Opening Doors
              </h1>

              <p className="text-xl sm:text-2xl font-headline italic text-rose font-light border-l-2 border-gold/60 pl-4 py-0.5">
                Let's open that restaurant only you could imagine.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                Turning a culinary dream into an enduring, profitable restaurant requires more than great recipes. CPG Opening Doors provides the comprehensive operational architecture—from early financial feasibility and kitchen line geometry to backstage systems, team training, and opening-night execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#inquiry"
                  className="btn-primary"
                >
                  <span>Start Your Restaurant Journey</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#roadmap"
                  className="btn-secondary"
                >
                  <span>Explore Launch Roadmap</span>
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="pt-6 border-t border-champagne/80 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block font-headline font-semibold text-burgundy text-sm">End-to-End</span>
                  <span className="text-muted font-light">Concept to First Service</span>
                </div>
                <div>
                  <span className="block font-headline font-semibold text-burgundy text-sm">Line Flow</span>
                  <span className="text-muted font-light">Zero Friction Geometry</span>
                </div>
                <div>
                  <span className="block font-headline font-semibold text-burgundy text-sm">Floor Command</span>
                  <span className="text-muted font-light">Launch Week Presence</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-champagne via-gold/30 to-cream border border-gold/30 -z-10 transform rotate-1 shadow-warm-lg" />
                
                <div className="rounded-2xl overflow-hidden shadow-warm-lg border-2 border-white bg-white">
                  <img
                    src={heroImg}
                    alt="Restaurateur and executive chef reviewing architectural blueprints and opening day prep"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-1">
                      Opening Day Milestone
                    </span>
                    <p className="font-headline text-base italic text-champagne">
                      "When service begins, you should be greeting your guests—not scrambling over a missing vendor order."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          THE CPG ADVANTAGE: WHAT YOU AVOID VS. WHAT YOU BUILD
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">The Opening Reality</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Why Founders Partner With Us
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Opening a restaurant involves hundreds of interdependent decisions. Without experienced guidance, small missteps become costly architectural revisions and chaotic shifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* The Hard Way */}
            <div className="bg-[#FAF4ED] p-8 rounded-3xl border border-champagne space-y-6">
              <div className="flex items-center gap-2 text-rose text-xs font-bold uppercase tracking-wider">
                <FiX className="w-4 h-4" />
                <span>Without Structured Launch Advisory</span>
              </div>
              <h3 className="text-2xl font-headline font-semibold text-burgundy">
                The Costly Guesswork
              </h3>
              <ul className="space-y-4 text-sm text-body font-light">
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-base mt-0.5">&times;</span>
                  <span>Kitchen line designed by equipment salesmen rather than working line cooks, causing severe peak-rush bottlenecks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-base mt-0.5">&times;</span>
                  <span>Opening weeks bleed cash through uncalibrated prep waste, uncontrolled overtime, and missing vendor credit terms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-base mt-0.5">&times;</span>
                  <span>Staff trained on informal notes; high opening turnover due to chaotic, unstructured service shifts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-base mt-0.5">&times;</span>
                  <span>Owner is trapped putting out fires 18 hours a day with no institutional systems to rely on.</span>
                </li>
              </ul>
            </div>

            {/* The CPG Way */}
            <div className="bg-white p-8 rounded-3xl border-2 border-gold/50 shadow-warm space-y-6">
              <div className="flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-wider">
                <FiCheck className="w-4 h-4 text-gold" />
                <span>With CPG Opening Doors</span>
              </div>
              <h3 className="text-2xl font-headline font-semibold text-burgundy">
                The Calm Operational Engine
              </h3>
              <ul className="space-y-4 text-sm text-espresso font-light">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Kitchen line mapped for effortless station ergonomics, synchronized ticket rail pacing, and swift warewashing return.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Real-time recipe costing, ingredient yield matrices, and demand-based labor scheduling installed before day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Comprehensive SOP manuals and mock service rehearsals that build deep team confidence and pride.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Senior CPG operators standing beside you on the floor during opening week to ensure a confident, memorable debut.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          THE 5-PHASE ROADMAP
          ========================================================================= */}
      <section id="roadmap" className="py-20 md:py-28 bg-[#FAF4ED] border-b border-champagne/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Step-by-Step Execution</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              The Restaurant Launch Roadmap
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              A structured, battle-tested progression designed to guide your project smoothly from concept validation to opening-day celebration.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-champagne shadow-warm-sm hover:shadow-warm transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-champagne/60 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose">
                      {phase.num}
                    </span>
                    <span className="text-muted text-xs">/</span>
                    <span className="text-xs text-muted font-medium flex items-center gap-1">
                      <FiClock className="w-3.5 h-3.5 text-gold" />
                      {phase.timeframe}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-champagne/70 text-burgundy px-3 py-1 rounded-full self-start sm:self-auto">
                    {phase.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-headline font-semibold text-2xl text-burgundy">
                    {phase.title}
                  </h3>
                  <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-burgundy mb-2.5">
                      Milestone Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-espresso/90 font-light">
                      {phase.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-cream/60 p-2.5 rounded-xl border border-champagne/70">
                          <FiCheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          TANGIBLE DELIVERABLES
          ========================================================================= */}
      <section id="deliverables" className="py-20 md:py-28 bg-white border-b border-champagne/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Concrete Assets</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              What You Receive
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Every CPG Opening Doors engagement produces durable, operational assets that belong to your restaurant forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliverables.map((d, i) => (
              <div key={i} className="p-7 rounded-3xl bg-[#FAF4ED] border border-champagne flex flex-col justify-between hover:border-gold/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-champagne text-rose flex items-center justify-center font-bold text-xs shadow-sm">
                    0{i + 1}
                  </div>
                  <h4 className="font-headline font-semibold text-burgundy text-lg">
                    {d.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTEGRATED INQUIRY FORM SECTION
          ========================================================================= */}
      <section id="inquiry" className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="badge-editorial">Begin Your Launch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Let's Discuss Your Restaurant
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Tell us about your concept, intended location, and target opening date. We will prepare an initial assessment and review our scope of work together.
            </p>
          </div>

          {/* Unified Inquiry Form with preselected interest */}
          <UnifiedInquiryForm defaultInterest="CPG Opening Doors" />

        </div>
      </section>

    </div>
  );
};

export default OpeningDoors;
