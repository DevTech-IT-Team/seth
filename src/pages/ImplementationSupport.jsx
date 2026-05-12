import { Link } from 'react-router-dom';
import prep5 from '../assets/Prep 5.jpg';
import { FiArrowRight } from 'react-icons/fi';

const ImplementationSupport = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${prep5}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tight font-headline text-white">
              Implementation Support
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-10 font-body">
              A good plan only creates value when it becomes part of daily practice.
              Implementation Support helps turn strategy into consistent action.
            </p>

            <Link
              to="/contact"
              className="bg-accent text-primary inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-white transition-all duration-300 group"
            >
              Request a Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-10">
              <span className="w-14 h-px bg-accent/40"></span>
              <span className="text-accent uppercase tracking-[0.35em] text-xs font-bold">
                INTRODUCTION
              </span>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-primary/80 font-body">
                Many foodservice businesses know what needs to improve. The challenge is not always
                identifying the problem—it is carrying the solution through the operation until it becomes
                reliable, visible, and repeatable.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-primary/80 font-body">
                New systems, training materials, procedures, and performance expectations can lose momentum
                when managers are busy, teams are stretched, or daily pressure pulls attention back to urgent
                tasks. Without support during implementation, even strong ideas can remain incomplete.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-primary/80 font-body">
                Implementation Support focuses on the practical transition between planning and execution.
                It helps ensure that improvements are introduced clearly, adopted consistently, and reinforced over time.
              </p>

              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-xl md:text-2xl leading-relaxed text-primary font-medium">
                  The goal is not simply to recommend change. The goal is to help the business make change workable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMON SYMPTOMS */}
      <section className="py-24 bg-[#EDF2EE]">
        <div className="container mx-auto px-6 md:px-12">

          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-10">
              <span className="w-14 h-px bg-accent/40"></span>
              <span className="text-accent uppercase tracking-[0.35em] text-xs font-bold">
                COMMON SYMPTOMS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-headline text-primary leading-tight mb-14">
              Implementation Support may be needed when a business is experiencing:
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Good ideas that fail to become daily habits',
                'New procedures that are introduced but not consistently followed',
                'Training initiatives that lose momentum after launch',
                'Managers who understand the goal but lack time or tools to reinforce it',
                'Employees receiving inconsistent direction during change',
                'Operational improvements that remain partially implemented',
                'Leadership frustration when expectations are clear but adoption is uneven',
                'Difficulty maintaining accountability after new systems are introduced',
                'Change fatigue from too many disconnected initiatives',
                'A gap between what leadership intends and what the team actually practices',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2"></div>
                    <p className="text-primary/75 leading-relaxed text-base">
                      {item}
                    </p>
                  </div>
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

            <div className="flex items-center gap-3 mb-10">
              <span className="w-14 h-px bg-accent/40"></span>
              <span className="text-accent uppercase tracking-[0.35em] text-xs font-bold">
                CPG APPROACH
              </span>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-primary/80">
                Culinary Provision Group helps businesses carry operational improvements from concept into practice.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-primary/80">
                This may include supporting rollout planning, refining communication, helping managers
                prepare teams, creating implementation tools, identifying adoption barriers, and establishing
                practical checkpoints to reinforce progress.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-primary/80">
                CPG’s role is to help make change manageable. Implementation is not treated as a single
                announcement or handoff. It is a process of translation, support, adjustment, and reinforcement.
              </p>

              <div className="bg-[#EDF2EE] border border-accent/10 rounded-3xl p-8">
                <p className="text-xl leading-relaxed text-primary">
                  We help bridge the space between leadership decisions and frontline execution so new systems
                  are not only understood, but used.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT THIS SUPPORTS */}
      <section className="py-24 bg-[#EDF2EE]">
        <div className="container mx-auto px-6 md:px-12">

          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 mb-10">
              <span className="w-14 h-px bg-accent/40"></span>
              <span className="text-accent uppercase tracking-[0.35em] text-xs font-bold">
                WHAT THIS SUPPORTS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-headline text-primary leading-tight mb-14">
              Effective implementation support supports:
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                'Smoother rollout of new systems and procedures',
                'Better adoption across teams and shifts',
                'Clearer communication during operational change',
                'Stronger manager follow-through',
                'Reduced confusion during transitions',
                'More consistent use of training and performance tools',
                'Improved accountability after launch',
                'Greater alignment between planning and daily execution',
                'Longer-lasting operational improvements',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl px-6 py-5 border border-black/5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2"></div>
                    <p className="text-primary/75 text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-6xl leading-[1.1] tracking-tight font-headline text-primary mb-10">
              Ready to Turn Plans Into <span className="text-accent">Practice?</span>
            </h2>

            <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-12">
              If improvement efforts keep losing momentum between planning and practice,
              the business may need stronger implementation support.
            </p>

            <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-14">
              Request a consultation to explore how CPG can help turn operational plans into
              consistent, usable systems.
            </p>

            <Link
              to="/contact"
              className="bg-accent text-primary inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              Request a Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ImplementationSupport;