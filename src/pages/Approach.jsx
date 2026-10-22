import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiLayers, FiRefreshCw, FiCompass, FiShield, FiAward } from 'react-icons/fi';
import ingredientsImage2 from '../assets/Ingredients 2.jpg';
import heroBg from '../assets/Kitchen Counter 3.jpg';
import backoffice4 from '../assets/Backoffice 4.jpg';
import meeting4 from '../assets/Meeting 4.jpg';
import prep4 from '../assets/Prep 4.jpg';
import standards4 from '../assets/Standards 4.jpg';

const Approach = () => {
  const processSteps = [
    {
      num: "01",
      title: "Discovery & Operational Review",
      description: "A structured review of your concept, menu parameters, cost thresholds, and space constraints.",
      image: backoffice4
    },
    {
      num: "02",
      title: "Identify Structural Friction",
      description: "Pinpointing where unassisted human effort substitutes for missing operational structure—and what that costs.",
      image: meeting4
    },
    {
      num: "03",
      title: "Design Integrated Architecture",
      description: "Designing workflows where kitchen line flow, purchasing pars, and staff training work in lockstep.",
      image: prep4
    },
    {
      num: "04",
      title: "Execute, Rehearse & Stabilize",
      description: "Simulating live service, training station leads, and standing on the floor during launch to ensure stability.",
      image: standards4
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6">
            <span className="badge-editorial">Our Methodology</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
              Integrated Systems Design for Hospitality.
            </h1>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Most consulting approaches address isolated problems with temporary patches. We design integrated operating systems. Performance is a property of structure—not endless management strain.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link to="/contact?interest=CPG Opening Doors" className="btn-primary">
                <span>Start Your Restaurant Journey</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-20 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiLayers className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Interdependent Systems</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Operations, food costs, and workforce performance are not isolated functions. Changes in station prep directly propagate into dining room pacing and margin defense.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiTarget className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Defined Operating Logic</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Synchronisation is not casual coordination—it is defined operating logic that produces consistent, measurable guest output regardless of who is scheduled on shift.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-4 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-champagne text-rose flex items-center justify-center">
                <FiRefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-semibold text-burgundy text-xl">Structural Capability</h3>
              <p className="text-sm text-body font-light leading-relaxed">
                Output ceilings are structural, not motivational. We redesign the underlying architecture so high standards are an effortless design outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">How It Works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              The Progression Framework
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              We guide founders and culinary operators through four clear phases to ensure lasting operational transfer.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-champagne shadow-warm-sm flex flex-col sm:flex-row items-center gap-6 justify-between"
              >
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose">
                    Step {step.num}
                  </span>
                  <h3 className="font-headline font-semibold text-xl text-burgundy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-body font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-warm border border-champagne shrink-0">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact?interest=CPG Opening Doors" className="btn-primary">
              <span>Begin Your Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Approach;