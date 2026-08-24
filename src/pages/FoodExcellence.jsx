import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiClock, FiLock, FiInfo } from 'react-icons/fi';

import standardsImage2 from '../assets/standards-2.jpg';

const FoodExcellence = () => {
  const modules = [
    { num: '01', title: 'Kitchen Systems Design', desc: 'Analyzing the workflow geometry of commercial kitchens, reducing bottleneck friction, and engineering safety into high-volume lines.' },
    { num: '02', title: 'Workforce Integration Models', desc: 'Structuring onboarding workflows, capability checklists, and sustainable shift schedules that maintain quality consistency.' },
    { num: '03', title: 'Technology & Inventory Controls', desc: 'Developing digital systems for tracking product waste, inventory valuation thresholds, and supply-chain logging.' },
    { num: '04', title: 'Operational Leadership Ethics', desc: 'Establishing transparent standards of accountability, communication structures, and operational team performance management.' },
    { num: '05', title: 'Financial Metrics & Margins', desc: 'Understanding unit-level economics, cost-of-goods-sold analysis, labor-to-revenue ratios, and margin defense.' },
    { num: '06', title: 'Quality Standards & Auditing', desc: 'Building self-auditing schedules, performance metrics feedback loops, and calibration mechanisms. [Under Construction / Guided Pilot Release Staged]' }
  ];

  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 overflow-x-hidden">
      
      {/* Course Hero */}
      <header className="relative pt-48 pb-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={standardsImage2} 
            alt="Food Excellence in Practice" 
            className="w-full h-full object-cover opacity-20 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary to-primary z-10" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-accent/20 border border-accent/40 text-accent text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Guided Pilot — Opening Soon
              </span>
              <span className="text-white/60 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <FiClock /> 6 Modules
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-headline mb-8 leading-tight">
              Food Excellence in Practice
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              An institutional training program for professional culinarians, kitchen leaders, and food system directors who require systematic, high-fidelity operational skills.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/contact?reason=learning" 
                className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                Request Learning Access <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#F4F1EA"></path>
          </svg>
        </div>
      </header>

      {/* Course Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-primary">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-headline font-bold">Curriculum Overview</h2>
              <p className="font-body text-base leading-relaxed font-light text-primary/80">
                This course is not focused on recipe creation. It is a curriculum focused on the **systems that make recipe consistency possible**. We provide learners with structural tools and operational checklists designed to run commercial food operations safely, cost-effectively, and sustainably.
              </p>
              <p className="font-body text-base leading-relaxed font-light text-primary/80">
                LMS users are provisioned manually by Culinary Provision Group. Standard enrollment requires pilot eligibility status.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm space-y-4 h-fit">
              <span className="text-accent text-[10px] uppercase font-bold tracking-widest block">Pilot Details</span>
              <div className="text-xs font-body text-primary/80 space-y-3">
                <p><strong>Format:</strong> Assisted Online Study</p>
                <p><strong>Workload:</strong> 4–6 Hours per Module</p>
                <p><strong>Target Group:</strong> Managers & Leads</p>
                <p><strong>Requirements:</strong> Commercial kitchen experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block font-bold">Instruction Steps</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">Course Modules</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((m, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-primary/5 flex flex-col justify-between relative group">
                {idx === 5 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-accent/25 text-accent text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                    <FiLock /> Staged
                  </div>
                )}
                <div>
                  <span className="text-accent font-headline text-xl font-bold block mb-4">{m.num}</span>
                  <h4 className="text-lg font-headline font-bold text-primary mb-2">{m.title}</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inquiry Callout */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/15 mb-6 text-accent">
            <FiInfo size={24} />
          </div>
          <h3 className="text-2xl md:text-4xl font-headline text-primary mb-6">Guided Pilot Onboarding</h3>
          <p className="text-sm md:text-base text-primary/75 font-body leading-relaxed max-w-md mx-auto font-light mb-10">
            For inquiry validation and onboarding setup, please contact our curriculum coordinator. We provision student accounts manually to maintain high-quality cohort settings.
          </p>
          <Link 
            to="/contact?reason=learning" 
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Inquire About Pilot Onboarding
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FoodExcellence;
