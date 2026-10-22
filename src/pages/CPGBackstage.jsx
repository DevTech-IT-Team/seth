import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiLayers, 
  FiCheckCircle, 
  FiFileText, 
  FiDollarSign, 
  FiBarChart2, 
  FiShield, 
  FiCpu 
} from 'react-icons/fi';

import backstageImg from '../assets/Backoffice 1.jpg';
import paperworkImg from '../assets/Paperwork 4.jpg';
import planningImg from '../assets/Meeting 3.jpg';

const CPGBackstage = () => {
  const pillars = [
    {
      icon: <FiFileText className="w-6 h-6 text-rose" />,
      title: 'Standard Operating Procedures (SOPs)',
      desc: 'Complete documentation for every role—from kitchen prep stations and closing sanitation checklists to front-of-house greeting steps and cash drops.'
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 text-rose" />,
      title: 'Inventory & Purveyor Management',
      desc: 'Structured pars, standardized order schedules, vendor price tracking, and weekly waste audit logs to keep food cost variance below 1.5%.'
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-rose" />,
      title: 'Recipe Costing & Yield Matrices',
      desc: 'Batch recipe cards with exact ounce-by-ounce costing, trim allowances, and selling price targets integrated directly into your POS database.'
    },
    {
      icon: <FiShield className="w-6 h-6 text-rose" />,
      title: 'Manager Scorecards & Oversight',
      desc: 'Weekly executive dashboards that summarize prime costs, guest satisfaction indicators, and shift adherence so owners have instant clarity.'
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
                <span>Operating Infrastructure</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                CPG Backstage
              </h1>

              <p className="text-xl font-headline italic text-espresso/90 font-light">
                The back-office architecture that makes culinary consistency repeatable.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                Front-of-house warmth is built upon backstage precision. When your inventory tracking, recipe cards, scheduling models, and standard operating procedures are systematically documented, your restaurant gains the freedom to grow without losing quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact?interest=CPG Backstage"
                  className="btn-primary"
                >
                  <span>Inquire About CPG Backstage</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#infrastructure"
                  className="btn-secondary"
                >
                  <span>Explore Infrastructure</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={backstageImg}
                  alt="Restaurant back-office operational systems"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infrastructure Pillars */}
      <section id="infrastructure" className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Systems Architecture</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Four Pillars of Operational Stability
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              We design and install durable operational frameworks tailored directly to your team's size and daily workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-4 shadow-warm-sm">
                <div className="w-12 h-12 rounded-xl bg-champagne flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-headline font-semibold text-burgundy text-xl">
                  {p.title}
                </h3>
                <p className="text-sm text-body font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-cream border border-champagne max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-headline font-semibold text-burgundy text-xl mb-1">
                Preparing to Expand to a Second Location?
              </h4>
              <p className="text-sm text-body font-light">
                Document your secret sauce into repeatable systems before taking on the complexity of unit two.
              </p>
            </div>
            <Link
              to="/contact?interest=CPG Backstage"
              className="btn-primary shrink-0"
            >
              <span>Build Your Backstage</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CPGBackstage;
