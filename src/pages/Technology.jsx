import { Link } from 'react-router-dom';
import { FiArrowRight, FiCpu, FiLayers, FiUsers, FiAward } from 'react-icons/fi';
import backoffice3 from '../assets/Backoffice 3.jpg';

const Technology = () => {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6">
            <span className="badge-editorial">Systems Preparedness</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
              Future-Ready Hospitality Technology.
            </h1>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              Preparing dining operations to adopt emerging digital frameworks, automated inventory systems, and modern workflows responsibly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link to="/learning/cpg-hospitality-lab" className="btn-primary">
                <span>Explore CPG Hospitality Lab</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact?interest=CPG Hospitality Lab" className="btn-secondary">
                <span>Inquire About Tech Review</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="badge-editorial">Perspective</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-burgundy leading-tight">
              Technology should elevate the dining room, not complicate it.
            </h2>
            <div className="space-y-4 text-body font-light text-base leading-relaxed">
              <p>
                The hospitality landscape is shifting quickly. Point-of-sale systems, kitchen display controllers, reservations, and inventory databases must work in concert rather than as disjointed tools.
              </p>
              <p>
                We help hospitality systems prepare for this transformation through responsible innovation, ensuring that software serves floor staff and safeguards the human essence of hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Technology Preparedness */}
      <section className="py-20 md:py-28 bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="badge-editorial">Framework</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-burgundy">Readiness Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border border-champagne shadow-warm-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-champagne text-rose flex items-center justify-center mb-4">
                <FiLayers size={20} />
              </div>
              <h4 className="text-lg font-headline font-semibold text-burgundy">Systems</h4>
              <p className="text-xs text-body leading-relaxed font-light">
                Evaluating database integrity, menu taxonomy, and POS integration boundaries before rolling out updates.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-champagne shadow-warm-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-champagne text-rose flex items-center justify-center mb-4">
                <FiCpu size={20} />
              </div>
              <h4 className="text-lg font-headline font-semibold text-burgundy">Technology</h4>
              <p className="text-xs text-body leading-relaxed font-light">
                Assessing software stack interoperability, hardware durability, and vendor SLAs for scale.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-champagne shadow-warm-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-champagne text-rose flex items-center justify-center mb-4">
                <FiUsers size={20} />
              </div>
              <h4 className="text-lg font-headline font-semibold text-burgundy">People</h4>
              <p className="text-xs text-body leading-relaxed font-light">
                Structuring staff training tutorials, quick-reference cheat sheets, and user adoption feedback loops.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-champagne shadow-warm-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-champagne text-rose flex items-center justify-center mb-4">
                <FiAward size={20} />
              </div>
              <h4 className="text-lg font-headline font-semibold text-burgundy">Preparedness</h4>
              <p className="text-xs text-body leading-relaxed font-light">
                Establishing continuous system audits, fallback recovery protocols, and vendor management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          <span className="badge-editorial">Advisory Review</span>
          <h2 className="text-3xl sm:text-4xl font-headline text-burgundy">Align your technology strategy.</h2>
          <p className="text-body font-light text-base max-w-md mx-auto">
            Set up an assessment with our advisory team to evaluate your current software and operations architecture.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact?interest=CPG Hospitality Lab" 
              className="btn-primary"
            >
              <span>Start Tech Preparedness Review</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technology;
