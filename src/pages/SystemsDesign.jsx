import { Link } from 'react-router-dom';
import ingredients3 from '../assets/Ingredients 3.jpg';
import { FiArrowRight } from 'react-icons/fi';

const SystemsDesign = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${ingredients3}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tight font-headline text-white">
              Systems Design
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-body">
              Strong businesses do not rely on constant intervention. They rely on clear systems
              that make consistent performance repeatable.
            </p>

            <Link
              to="/contact"
              className="bg-accent text-primary flex items-center gap-4 px-10 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:bg-white transition-all duration-300 group mx-auto w-fit"
            >
              Request a Consultation
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-accent/50"></span>
              <span className="text-accent text-xs uppercase font-bold tracking-[0.4em]">
                INTRODUCTION
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-10 font-headline leading-[1.1] tracking-tight text-primary">
              Clear Systems Create <span className="text-accent">Consistent Execution</span>
            </h2>

            <div className="space-y-8">
              <p className="text-lg text-neutral/80 leading-[1.9] font-body border-l-4 border-accent pl-8">
                Many foodservice operations experience the same problems repeatedly:
                inconsistent output, unclear expectations, uneven execution, avoidable
                errors, and leadership fatigue. These problems are often treated as
                employee issues, but in many cases, they are system issues.
              </p>

              <p className="text-lg text-neutral/80 leading-[1.9] font-body">
                Systems Design focuses on the structure underneath daily performance.
                It clarifies how work should happen, how decisions are made, how
                information moves, and how teams execute consistently across shifts,
                roles, and locations.
              </p>

              <p className="text-lg text-neutral/80 leading-[1.9] font-body">
                When the system is unclear, even strong employees are forced to
                improvise. When the system is clear, performance becomes easier to
                manage, train, measure, and improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON SYMPTOMS */}
      <section className="py-24 bg-[#EDF2EE]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-accent/50"></span>
              <span className="text-accent text-xs uppercase font-bold tracking-[0.4em]">
                COMMON SYMPTOMS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-12 font-headline leading-[1.1] tracking-tight text-primary">
              Signs Structure May Need <span className="text-accent">Attention</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Inconsistent execution between shifts or teams',
                'Repeated mistakes despite frequent correction',
                'Managers spending too much time putting out fires',
                'Employees relying on memory instead of process',
                'Standards that exist informally but are not clearly documented',
                'Training that depends too heavily on whoever happens to be available',
                'Growth that creates confusion instead of stability',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-accent/10 shadow-sm"
                >
                  <p className="text-primary/80 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CPG APPROACH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-accent/50"></span>
              <span className="text-accent text-xs uppercase font-bold tracking-[0.4em]">
                CPG APPROACH
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-10 font-headline leading-[1.1] tracking-tight text-primary">
              Building Systems That Support <span className="text-accent">Execution</span>
            </h2>

            <div className="space-y-8">
              <p className="text-lg text-neutral/80 leading-[1.9] font-body">
                Culinary Provision Group helps identify where operational structure is
                missing, unclear, or underdeveloped. We look at the way work is
                actually happening inside the business, then help translate that
                reality into clear systems that support daily execution.
              </p>

              <p className="text-lg text-neutral/80 leading-[1.9] font-body">
                This may include reviewing workflows, clarifying responsibilities,
                improving documentation, identifying process gaps, and helping
                leadership define standards that can be taught, followed, and
                reinforced.
              </p>

              <p className="text-lg text-neutral/80 leading-[1.9] font-body border-l-4 border-accent pl-8">
                The goal is not to make the business more complicated. The goal is to
                reduce unnecessary friction by making the work easier to understand
                and easier to repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS SUPPORTS */}
      <section className="py-24 bg-[#EDF2EE]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-accent/50"></span>
              <span className="text-accent text-xs uppercase font-bold tracking-[0.4em]">
                WHAT THIS SUPPORTS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-12 font-headline leading-[1.1] tracking-tight text-primary">
              Effective Systems Support <span className="text-accent">Long-Term Stability</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'More consistent performance',
                'Clearer training expectations',
                'Better manager oversight',
                'Reduced dependency on individual personalities',
                'Improved accountability',
                'Smoother scaling',
                'A stronger foundation for growth',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-accent/10 shadow-sm"
                >
                  <p className="text-primary/80 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-5xl mb-8 font-headline leading-[1.1] tracking-tight text-primary">
              Performance Problems Are Not Always About <span className="text-accent">Effort</span>
            </h2>

            <p className="text-lg text-primary/70 leading-relaxed mb-12">
              If your team is working hard but performance still feels inconsistent,
              the problem may not be effort. It may be structure.
            </p>

            <p className="text-lg text-primary/70 leading-relaxed mb-14">
              Request a consultation to explore whether stronger systems could
              improve the way your operation performs.
            </p>

            <Link
              to="/contact"
              className="bg-accent text-primary inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              Request a Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemsDesign;