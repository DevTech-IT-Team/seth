import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiClock, FiLock, FiInfo, FiCheckCircle } from 'react-icons/fi';
import standardsImage2 from '../assets/standards-2.jpg';

const FoodExcellence = () => {
  const modules = [
    { num: '01', title: 'Kitchen Systems Design & Geometry', desc: 'Analyzing the workflow geometry of commercial kitchens, reducing bottleneck friction, and engineering safety into high-volume lines.' },
    { num: '02', title: 'Workforce Integration Models', desc: 'Structuring onboarding workflows, capability checklists, and sustainable shift schedules that maintain quality consistency.' },
    { num: '03', title: 'Technology & Inventory Controls', desc: 'Developing digital systems for tracking product waste, inventory valuation thresholds, and supply-chain logging.' },
    { num: '04', title: 'Operational Leadership Ethics', desc: 'Establishing transparent standards of accountability, communication structures, and operational team performance management.' },
    { num: '05', title: 'Financial Metrics & Margins', desc: 'Understanding unit-level economics, cost-of-goods-sold analysis, labor-to-revenue ratios, and margin defense.' },
    { num: '06', title: 'Quality Standards & Auditing', desc: 'Building self-auditing schedules, performance metrics feedback loops, and calibration mechanisms.' }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Course Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge-rose">
                  Guided Pilot — Opening Soon
                </span>
                <span className="text-muted text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <FiClock className="w-3.5 h-3.5 text-gold" /> 6 Modules
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                Food Excellence in Practice
              </h1>
              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                An institutional training program for professional culinarians, kitchen leaders, and food system directors who require systematic, high-fidelity operational skills.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/contact?interest=CPG Kitchen" 
                  className="btn-primary"
                >
                  <span>Request Pilot Access</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/learning/cpg-kitchen" 
                  className="btn-secondary"
                >
                  <span>View CPG Kitchen</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img 
                  src={standardsImage2} 
                  alt="Food Excellence in Practice" 
                  className="w-full h-[380px] object-cover rounded-2xl" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-espresso">
            <div className="md:col-span-2 space-y-6">
              <span className="badge-editorial">Curriculum Overview</span>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">Systems Behind the Plates</h2>
              <p className="font-body text-base leading-relaxed font-light text-body">
                This course is not focused on recipe creation. It is a curriculum focused on the <strong>systems that make recipe consistency possible</strong>. We provide learners with structural tools and operational checklists designed to run commercial food operations safely, cost-effectively, and sustainably.
              </p>
              <p className="font-body text-sm leading-relaxed font-light text-muted">
                Cohort users are provisioned manually by Culinary Provision Group to maintain high-quality discussion and tailored advisory feedback.
              </p>
            </div>
            
            <div className="bg-cream/40 p-6 rounded-2xl border border-champagne shadow-warm-sm space-y-4 h-fit">
              <span className="text-rose text-[10px] font-bold uppercase tracking-wider block">Pilot Information</span>
              <div className="text-xs font-body text-body space-y-3">
                <p><strong>Format:</strong> Assisted Online Cohort</p>
                <p><strong>Workload:</strong> 4–6 Hours per Module</p>
                <p><strong>Audience:</strong> Head Chefs, Leads, Operators</p>
                <p><strong>Prerequisite:</strong> Commercial kitchen experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-20 md:py-28 bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Instruction Steps</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">Curriculum Modules</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((m, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-champagne shadow-warm-sm flex flex-col justify-between relative group">
                <div>
                  <span className="text-gold font-headline text-2xl font-bold block mb-3">{m.num}</span>
                  <h4 className="text-lg font-headline font-semibold text-burgundy mb-2">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-body leading-relaxed font-light">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inquiry Callout */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          <span className="badge-editorial">Pilot Onboarding</span>
          <h3 className="text-3xl sm:text-4xl font-headline text-burgundy">Inquire About Cohort Enrollment</h3>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-md mx-auto font-light">
            We manually review prospective pilot participants to ensure cohort alignment. Express your interest and our curriculum team will follow up.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact?interest=CPG Kitchen" 
              className="btn-primary"
            >
              <span>Inquire About Pilot Onboarding</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FoodExcellence;
