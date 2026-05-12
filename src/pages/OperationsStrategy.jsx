import { Link } from 'react-router-dom';
import kitchen2 from '../assets/Kitchen Counter 2.jpg';
import { FiArrowRight, FiSearch, FiTrendingUp, FiActivity, FiZap } from 'react-icons/fi';

const OperationsStrategy = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${kitchen2}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tight font-headline text-white">
              Operations Strategy
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
              Operational strength begins with knowing where the business is going, how work should be organized, and what must be prioritized to get there.
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
              Strategy Creates <span className="text-accent">Direction</span>
            </h2>

            <div className="space-y-8 text-lg text-neutral/75 leading-[1.9] font-body">
              <p>
                Many foodservice businesses are busy without being strategically aligned. Teams work hard, managers respond to daily pressure, and decisions are made quickly because the operation does not slow down long enough to examine what is actually driving performance.
              </p>

              <p>
                Operations Strategy focuses on the connection between business goals and daily execution. It looks at how the operation is structured, where resources are being spent, which constraints are limiting performance, and whether the current approach supports the next stage of growth.
              </p>

              <p>
                Without clear operational strategy, businesses can become reactive. Problems are addressed as they appear, but the deeper patterns remain unchanged. With stronger strategy, leadership can make better decisions, set clearer priorities, and direct effort toward the areas that matter most.
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
              Signs Strategic Alignment May Be Missing
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Growth without clear operational direction',
                'Managers constantly reacting instead of leading',
                'Conflicting priorities between departments or locations',
                'Decisions being made without reliable operational insight',
                'Strong revenue but weak structure behind execution',
                'Difficulty identifying what should be improved first',
                'New initiatives that lose momentum after launch',
                'Leadership fatigue from carrying too many unresolved issues',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-accent/10 shadow-sm flex items-start gap-4"
                >
                  <FiActivity className="text-accent text-xl mt-1 flex-shrink-0" />
                  <p className="text-primary/70 leading-relaxed text-sm md:text-base">
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
              Practical Operational Strategy
            </h2>

            <div className="space-y-8 text-lg text-neutral/75 leading-[1.9] font-body">
              <p>
                Culinary Provision Group helps operators examine the business from a strategic and operational perspective. We look at how the current structure supports—or limits—the company’s ability to perform, grow, and adapt.
              </p>

              <p>
                This may include reviewing operational priorities, identifying constraints, mapping workflows, assessing leadership capacity, clarifying decision points, and helping determine which improvements should happen first.
              </p>

              <p>
                The goal is to create practical direction. Operations Strategy is not about abstract planning or theoretical recommendations. It is about helping the business understand where effort should be focused so daily action supports the larger objective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS SUPPORTS */}
      <section className="py-24 bg-[#EDF2EE]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">

            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-12 h-px bg-accent/50"></span>
              <span className="text-accent text-xs uppercase font-bold tracking-[0.4em]">
                WHAT THIS SUPPORTS
              </span>
              <span className="w-12 h-px bg-accent/50"></span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-14 font-headline leading-[1.1] tracking-tight text-primary">
              Operational Outcomes
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Clearer leadership priorities',
                'Better use of time, labor, and resources',
                'Improved decision-making',
                'More focused operational improvements',
                'Stronger alignment between goals and execution',
                'Reduced reactive management',
                'A more stable path for growth',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-accent/10"
                >
                  <FiTrendingUp className="text-accent text-2xl mb-4 mx-auto" />
                  <p className="text-primary/70 leading-relaxed text-sm md:text-base">
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
              Clear Strategy Creates <span className="text-accent">Stronger Execution</span>
            </h2>

            <p className="text-lg text-primary/65 leading-relaxed mb-12 max-w-3xl mx-auto">
              If the business is active but not aligned, more effort may not solve the problem. The operation may need clearer strategic direction.
              <br /><br />
              Request a consultation to explore how stronger operations strategy can support better performance, clearer priorities, and more sustainable growth.
            </p>

            <Link
              to="/contact"
              className="bg-accent text-primary inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 group"
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

export default OperationsStrategy;