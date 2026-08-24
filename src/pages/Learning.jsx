import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen, FiDownload, FiLayers, FiCpu } from 'react-icons/fi';

import standardsImage2 from '../assets/standards-2.jpg';

const Learning = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 overflow-x-hidden">
      
      {/* Hero */}
      <header className="relative pt-48 pb-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={standardsImage2} 
            alt="CPG Learning" 
            className="w-full h-full object-cover opacity-25 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary z-10" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">CPG Learning Portal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1] text-white mb-8 tracking-tighter">
              Practical knowledge <br />
              <span className="text-accent font-light italic">for the people shaping hospitality.</span>
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Rigorous, standards-based instruction and resources built for active culinarians and operations leaders.
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

      {/* Featured Learning Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-primary/5 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-accent text-xs font-black uppercase tracking-widest">Featured Course</span>
                  <span className="bg-accent/15 border border-accent/35 text-accent text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Guided Pilot — Opening Soon
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-headline text-primary font-bold">Food Excellence in Practice</h2>
                <p className="text-primary/80 font-body leading-relaxed text-sm md:text-base font-light">
                  A high-fidelity operational curriculum designed for kitchen managers, chefs, and food system leaders. We deliver module-based training focused on food safety engineering, kitchen economics, and labor deployment models.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/learning/food-excellence" 
                    className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    View Course Preview <FiArrowRight />
                  </Link>
                  <Link 
                    to="/contact?reason=learning" 
                    className="bg-background text-primary px-8 py-4 rounded-full font-bold text-sm border border-primary/10 hover:bg-primary/5 transition-all duration-300 text-center"
                  >
                    Request Learning Access
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[300px] overflow-hidden rounded-2xl">
                <img 
                  src={standardsImage2} 
                  alt="Food Excellence in Practice" 
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Resources Gateway (Placeholders/Components) */}
      <section id="resources" className="py-24 bg-white border-t border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Publications & Assets</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">Resource Library</h2>
            <p className="text-primary/70 font-body text-base mt-4 font-light">
              Structured operational publications, toolkits, and guides developed by our advisory team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Resource Type 1: Field Guides */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between group">
              <div>
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-4">Coming Soon</span>
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <FiBookOpen size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Field Guides</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed mb-6 font-light">
                  Step-by-step manuals covering kitchen organization systems, yield optimization models, and standard sanitation design.
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest font-black text-primary/40 block border-t border-primary/5 pt-4">
                Guided Access Only
              </span>
            </div>

            {/* Resource Type 2: Toolkits */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between group">
              <div>
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-4">Coming Soon</span>
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Operational Toolkits</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed mb-6 font-light">
                  Pre-configured inventory calculators, labor alignment templates, and costing sheets designed for unit managers.
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest font-black text-primary/40 block border-t border-primary/5 pt-4">
                Guided Access Only
              </span>
            </div>

            {/* Resource Type 3: Technical Briefings */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between group">
              <div>
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-4">Coming Soon</span>
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <FiCpu size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Technical Briefings</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed mb-6 font-light">
                  Reports detailing technology preparedness requirements, emerging supply-chain protocols, and system audits.
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest font-black text-primary/40 block border-t border-primary/5 pt-4">
                Guided Access Only
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Learning;
