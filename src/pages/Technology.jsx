import { Link } from 'react-router-dom';
import { FiArrowRight, FiCpu, FiLayers, FiUsers, FiAward } from 'react-icons/fi';

import backoffice3 from '../assets/Backoffice 3.jpg';

const Technology = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 overflow-x-hidden">
      
      {/* Hero */}
      <header 
        className="relative pt-48 pb-32 overflow-hidden bg-primary"
        style={{ backgroundImage: `url(${backoffice3})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primary z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">Systems Preparedness</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1] text-white mb-8 tracking-tighter">
              Future-Ready <br />
              <span className="text-accent font-light italic">Hospitality Technology.</span>
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Preparing hospitality organizations to adopt emerging digital frameworks, automated inventory systems, and modern workflows responsibly.
            </p>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#F4F1EA"></path>
          </svg>
        </div>
      </header>

      {/* Main Narrative */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Perspective</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary leading-tight">
              Technology is changing how hospitality operates.
            </h2>
            <div className="space-y-6 text-primary/80 font-body text-base md:text-lg leading-relaxed font-light">
              <p>
                The hospitality landscape is shifting. Legacy operational models must adapt to digital ordering, automated supply chains, intelligent scheduling, and modern enterprise management.
              </p>
              <p>
                We help hospitality systems prepare for this transformation through responsible innovation, ensuring that emerging systems support—rather than complicate—the human elements of hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Technology Preparedness */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block font-bold">Framework</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">Readiness Framework</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Systems */}
            <div className="p-6 bg-background rounded-2xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <FiLayers size={20} />
              </div>
              <h4 className="text-lg font-headline font-bold text-primary mb-2">Systems</h4>
              <p className="text-xs text-primary/75 font-body leading-relaxed font-light">
                Evaluating structural capacity, legacy bottlenecks, and database integrity before rolling out upgrades.
              </p>
            </div>

            {/* Technology */}
            <div className="p-6 bg-background rounded-2xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <FiCpu size={20} />
              </div>
              <h4 className="text-lg font-headline font-bold text-primary mb-2">Technology</h4>
              <p className="text-xs text-primary/75 font-body leading-relaxed font-light">
                Assessing integration boundaries, vendor credentials, and API interfaces for compatibility and scale.
              </p>
            </div>

            {/* People */}
            <div className="p-6 bg-background rounded-2xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <FiUsers size={20} />
              </div>
              <h4 className="text-lg font-headline font-bold text-primary mb-2">People</h4>
              <p className="text-xs text-primary/75 font-body leading-relaxed font-light">
                Structuring technical capability programs, onboarding tutorials, and adoption feedback systems for operators.
              </p>
            </div>

            {/* Preparedness */}
            <div className="p-6 bg-background rounded-2xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <FiAward size={20} />
              </div>
              <h4 className="text-lg font-headline font-bold text-primary mb-2">Preparedness</h4>
              <p className="text-xs text-primary/75 font-body leading-relaxed font-light">
                Establishing continuous system audits, recovery plans, and calibration standards for technological longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block font-bold">Advisory</span>
          <h2 className="text-3xl md:text-6xl font-headline text-white mb-8">Align your technology strategy.</h2>
          <p className="text-white/70 max-w-md mx-auto mb-10 font-body text-sm font-light">
            Set up an assessment callback with our systems advisory team to evaluate your current software and operations architecture.
          </p>
          <Link 
            to="/contact?reason=business" 
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg inline-flex items-center gap-2"
          >
            Start Tech Preparedness Review <FiArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Technology;
