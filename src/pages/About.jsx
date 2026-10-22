import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiUsers, 
  FiLayers, 
  FiBookOpen, 
  FiCpu, 
  FiShield, 
  FiCheckCircle, 
  FiAward 
} from 'react-icons/fi';

import heroBg from '../assets/Kitchen Counter 1.jpg';
import planningImg from '../assets/Meeting 1.jpg';
import teamImg from '../assets/Standards 4.jpg';
import launchImg from '../assets/restaurant-hero.jpg';

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6">
            <span className="badge-editorial">About the Institution</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
              A structured approach to <span className="italic font-normal text-rose">hospitality excellence.</span>
            </h1>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Culinary Provision Group was founded on a simple principle: memorable dining experiences are sustained by thoughtful operational systems. We build the operational, educational, and backstage frameworks that empower culinary teams to consistently thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Perspective */}
      <section className="py-20 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-editorial">Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-headline text-burgundy">
                Why Culinary Provision Group Exists
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-body font-light leading-relaxed">
                <p>
                  Every year, visionary restaurateurs and passionate chefs pour their life savings and creative energy into opening dining rooms. Yet too many struggle with avoidable operational friction—confusing kitchen line geometry, unmonitored food waste, erratic scheduling, or missing standard operating procedures.
                </p>
                <p>
                  We reject the myth that hospitality inconsistency is an inevitable personality trait of restaurant life. Operational inconsistency is a systems problem. When standards are documented, workflows are engineered for human flow, and managers have clear metrics, consistency becomes the effortless baseline.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={launchImg}
                  alt="Thriving restaurant dining room supported by CPG operational systems"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-20 md:py-28 bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Foundational Pillars</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              The Four CPG Pillars
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              How our multidisciplinary advisory practice balances human artistry with commercial rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">People</h3>
              <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                Building respectful, career-sustaining kitchen and dining room cultures through clear capability ladders, fair scheduling, and empathetic leadership.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiLayers className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Systems</h3>
              <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                Documenting customized Standard Operating Procedures, inventory control pars, recipe cards, and station prep guides that ensure predictable output.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Learning</h3>
              <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                Publishing high-fidelity operational curricula (CPG Kitchen) and guided cohorts focused on kitchen economics, sanitation, and team coaching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiCpu className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Technology</h3>
              <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                Preparing dining operations to adopt emerging software, intelligent inventory tools, and POS workflows without diminishing the human core of hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          <span className="badge-editorial">Partner With CPG</span>
          <h2 className="text-3xl sm:text-5xl font-headline text-burgundy leading-tight">
            Let's build lasting operational stability.
          </h2>
          <p className="text-base text-body font-light max-w-xl mx-auto leading-relaxed">
            Whether you are planning an opening or looking to tune your active dining room, our advisory team is ready to assist.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact?interest=CPG Opening Doors"
              className="btn-primary"
            >
              <span>Start Your Restaurant Journey</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;