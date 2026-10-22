import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiActivity, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiClock, 
  FiLayers, 
  FiDollarSign, 
  FiAlertTriangle,
  FiTarget
} from 'react-icons/fi';

import prepImage from '../assets/Prep 2.jpg';
import counterImage from '../assets/Kitchen Counter 2.jpg';
import paperworkImage from '../assets/Paperwork 3.jpg';

const RestaurantTuneUp = () => {
  const diagnosticAreas = [
    {
      title: 'Cost Structure & Margin Leakage',
      desc: 'We analyze prime cost ratios (food cost + labor cost) against category benchmarks, reviewing vendor invoices, recipe yield deviations, and prep waste.'
    },
    {
      title: 'Labor Scheduling & Shift Geometry',
      desc: 'We map guest arrival curves to kitchen station coverage to eliminate both chaotic understaffed rushes and expensive idle hours during slow windows.'
    },
    {
      title: 'Service Pacing & Ticket Flow',
      desc: 'We identify friction between expo, line cooks, and food runners to reduce ticket wait times, improve table turn cadence, and boost dining room throughput.'
    },
    {
      title: 'Menu Engineering & Plate Economics',
      desc: 'We rank your menu by profitability and popularity, recommending pricing adjustments, ingredient cross-utilization, and trim reduction to protect margins.'
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne/80 border border-gold/40 text-xs font-semibold uppercase tracking-wider text-burgundy">
                <span className="w-2 h-2 rounded-full bg-rose" />
                <span>Operational Diagnostic</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                Restaurant Tune-Up
              </h1>

              <p className="text-xl font-headline italic text-espresso/90 font-light">
                Restore margin defense, team flow, and kitchen consistency.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                When a busy restaurant struggles with shrinking profitability, high team turnover, or erratic shift execution, the root cause is rarely dedication—it is structural friction. CPG Restaurant Tune-Up provides a rapid, high-impact diagnostic and operational realignment to fix margin leaks and stabilize service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact?interest=Restaurant Tune-Up"
                  className="btn-primary"
                >
                  <span>Request an Operational Audit</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#diagnostic"
                  className="btn-secondary"
                >
                  <span>How the Audit Works</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={prepImage}
                  alt="Kitchen line prep and operational optimization"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Symptoms Addressed */}
      <section className="py-20 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Recognizing Operational Friction</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Is your dining room experiencing these pressure points?
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              We frequently partner with operators who have strong guest loyalty but are frustrated by invisible operational leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3">
              <span className="text-rose font-bold text-xs uppercase tracking-wider block">Symptom 01</span>
              <h3 className="font-headline font-semibold text-burgundy text-lg">Sales Are Up, But Profits Are Flat</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Revenues continue to grow, but rising prime costs (ingredient price creep and overtime hours) consume the bottom line before it reaches the owner.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3">
              <span className="text-rose font-bold text-xs uppercase tracking-wider block">Symptom 02</span>
              <h3 className="font-headline font-semibold text-burgundy text-lg">Shift Chaos During Peak Hours</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Tickets pile up at the pass, food runners bottleneck, and kitchen communication deteriorates, resulting in prolonged guest wait times and comped checks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3">
              <span className="text-rose font-bold text-xs uppercase tracking-wider block">Symptom 03</span>
              <h3 className="font-headline font-semibold text-burgundy text-lg">Manager Burnout & High Line Turnover</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                In the absence of clear operational systems, key managers must personally compensate through exhausting 70-hour weeks, leading to inevitable fatigue and turnover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Part Diagnostic */}
      <section id="diagnostic" className="py-20 md:py-28 bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Diagnostic Framework</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              What the Restaurant Tune-Up Evaluates
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              We conduct a comprehensive 360-degree review of your active operation without disrupting ongoing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diagnosticAreas.map((area, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-champagne shadow-warm-sm space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-champagne text-rose flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="font-headline font-semibold text-xl text-burgundy">
                    {area.title}
                  </h3>
                </div>
                <p className="text-sm text-body font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-champagne shadow-warm max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-burgundy">
              The 60-Day Realignment Roadmap
            </h3>
            <p className="text-sm text-body font-light max-w-2xl mx-auto leading-relaxed">
              Following our on-site audit, you receive a concrete, prioritized roadmap outlining immediate margin recoveries for week 1, process updates for week 3, and lasting labor recalibrations for month 2.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?interest=Restaurant Tune-Up"
                className="btn-primary"
              >
                <span>Request Your Audit Consultation</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RestaurantTuneUp;
