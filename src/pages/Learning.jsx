import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiBookOpen, 
  FiCpu, 
  FiAward, 
  FiCheckCircle, 
  FiLayers 
} from 'react-icons/fi';

import kitchenImg from '../assets/Kitchen Counter 3.jpg';
import teamImg from '../assets/Standards 1.jpg';
import prepImg from '../assets/Standards 4.jpg';

const Learning = () => {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6">
            <span className="badge-editorial">Educational Programs</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
              Hospitality Learning & Applied Systems.
            </h1>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Practical, standards-based operational learning for active culinarians, kitchen leads, and dining room operators. We focus on kitchen economics, food safety architecture, and responsible technology workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Learning Offerings */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          
          {/* CPG Kitchen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/40 p-8 sm:p-12 rounded-3xl border border-champagne shadow-warm-sm">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose bg-rose/10 px-3 py-1 rounded-full">
                Culinary Management
              </span>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">
                CPG Kitchen
              </h2>
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                A rigorous operational curriculum for chefs, kitchen leads, and culinary directors. Modules cover kitchen line geometry, batch recipe costing, waste logging routines, station training ladders, and food safety compliance.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link
                  to="/learning/cpg-kitchen"
                  className="btn-primary"
                >
                  <span>Explore CPG Kitchen</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact?interest=CPG Kitchen"
                  className="text-xs text-muted hover:text-rose font-medium transition-colors"
                >
                  Express Interest in Cohort &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-warm border border-white">
              <img
                src={teamImg}
                alt="CPG Kitchen curriculum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CPG Hospitality Lab */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/40 p-8 sm:p-12 rounded-3xl border border-champagne shadow-warm-sm">
            <div className="lg:col-span-7 space-y-5 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-champagne/70 px-3 py-1 rounded-full">
                Innovation & Modern Workflows
              </span>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">
                CPG Hospitality Lab
              </h2>
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                Applied research on modern hospitality technology. Stress-testing next-generation POS, automated inventory replenishment, kitchen display timing, and digital workflows that enhance floor presence without losing human warmth.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link
                  to="/learning/cpg-hospitality-lab"
                  className="btn-primary"
                >
                  <span>Explore The Lab</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact?interest=CPG Hospitality Lab"
                  className="text-xs text-muted hover:text-rose font-medium transition-colors"
                >
                  Connect with Lab Team &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-warm border border-white lg:order-1">
              <img
                src={kitchenImg}
                alt="CPG Hospitality Lab research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Food Excellence in Practice Preview */}
          <div className="p-8 sm:p-12 rounded-3xl bg-cream border border-champagne flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="badge-editorial">Featured Guided Pilot</span>
              <h3 className="text-2xl font-headline font-semibold text-burgundy">
                Food Excellence in Practice
              </h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Our six-module intensive curriculum focusing on high-volume commercial kitchen execution, sanitation engineering, and team accountability.
              </p>
            </div>
            <Link
              to="/learning/food-excellence"
              className="btn-secondary shrink-0"
            >
              <span>View Pilot Preview</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Learning;
