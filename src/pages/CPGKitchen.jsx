import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiBookOpen, 
  FiCheckCircle, 
  FiAward, 
  FiShield, 
  FiLayers, 
  FiClock, 
  FiUsers 
} from 'react-icons/fi';

import kitchenImg from '../assets/Kitchen Counter 3.jpg';
import prepImg from '../assets/Prep 1.jpg';
import teamImg from '../assets/Standards 1.jpg';

const CPGKitchen = () => {
  const modules = [
    {
      num: '01',
      title: 'Kitchen Systems Design & Geometry',
      desc: 'Analyzing station layout, reducing unnecessary line footsteps, and engineering speed and safety into high-volume prep lines.'
    },
    {
      num: '02',
      title: 'Unit-Level Kitchen Economics',
      desc: 'Yield testing, butcher trim calculations, batch recipe costing, and identifying hidden waste in daily mise-en-place.'
    },
    {
      num: '03',
      title: 'Workforce Onboarding & Capability Checklists',
      desc: 'Structuring progressive training ladders for prep cooks, line cooks, and station leads to build deep kitchen bench strength.'
    },
    {
      num: '04',
      title: 'Food Safety Architecture & Compliance',
      desc: 'HACCP-aligned temperature logging protocols, cross-contamination prevention, allergen controls, and health inspection readiness.'
    },
    {
      num: '05',
      title: 'Operational Kitchen Leadership',
      desc: 'Clear communication at the pass, pre-shift briefings, constructive coaching, and running high-stress services with poise.'
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
                <span>Culinary Education & Standards</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                CPG Kitchen
              </h1>

              <p className="text-xl font-headline italic text-espresso/90 font-light">
                Professional culinary education grounded in kitchen economics and operational standards.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                CPG Kitchen is an institutional learning program created for executive chefs, sous chefs, and aspiring kitchen managers who require rigorous operational competence. This is not a consumer recipe course—it is an applied professional curriculum centered on systems, economics, and leadership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact?interest=CPG Kitchen"
                  className="btn-primary"
                >
                  <span>Express Interest in CPG Kitchen</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#curriculum"
                  className="btn-secondary"
                >
                  <span>Explore Curriculum Focus</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={teamImg}
                  alt="Culinary team mastering kitchen standards"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section id="curriculum" className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Instructional Pillars</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Curriculum Architecture
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Designed around repeatable standards that protect food quality, culinary team culture, and business margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modules.map((m) => (
              <div key={m.num} className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-gold font-headline font-bold text-2xl block mb-2">{m.num}</span>
                  <h3 className="font-headline font-semibold text-burgundy text-lg mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-body font-light leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}

            {/* Interest Card */}
            <div className="p-8 rounded-2xl bg-burgundy text-white flex flex-col justify-between shadow-warm">
              <div className="space-y-3">
                <span className="badge-rose text-white border-white/20">Cohort Inquiries</span>
                <h3 className="font-headline font-semibold text-white text-xl">
                  Upcoming Guided Cohorts
                </h3>
                <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
                  We provision learner cohorts in intimate group sizes to maintain high instructor contact and direct operational review.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/contact?interest=CPG Kitchen"
                  className="btn-white text-xs text-burgundy w-full justify-center"
                >
                  <span>Request Cohort Details</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express Interest Banner */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          <span className="badge-editorial">Future Learning Opportunities</span>
          <h2 className="text-3xl sm:text-4xl font-headline text-burgundy">
            Elevate your kitchen's operational capability.
          </h2>
          <p className="text-sm sm:text-base text-body font-light leading-relaxed">
            Interested in enrolling yourself or developing custom kitchen training for your restaurant group? Contact our educational coordinators to express interest in upcoming sessions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?interest=CPG Kitchen"
              className="btn-primary"
            >
              <span>Express Interest in CPG Kitchen</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CPGKitchen;
