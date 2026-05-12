import { Link } from 'react-router-dom';
import paperwork9 from '../assets/Paperwork 9.jpg';
import {
  FiArrowRight,
  FiUsers,
  FiAward,
  FiBook,
  FiTarget,
} from 'react-icons/fi';

const WorkforceDevelopment = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${paperwork9}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tight font-headline text-white">
              Workforce Development
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
              A strong workforce is not built by hiring alone. It is developed through clear expectations, intentional training, and systems that help people succeed.
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
              Workforce Systems Create <span className="text-accent">Stability</span>
            </h2>

            <div className="space-y-8 text-lg text-neutral/75 leading-[1.9] font-body">
              <p>
                Staffing challenges are among the most visible pressures in foodservice operations. Businesses often feel the impact through turnover, inconsistent performance, uneven training, weak candidate pipelines, scheduling strain, and managers who are stretched too thin to develop their teams effectively.
              </p>

              <p>
                But workforce problems are rarely solved by recruiting alone. Hiring matters, but the deeper question is whether the business has the structure to attract, train, retain, and develop the right people.
              </p>

              <p>
                Workforce Development focuses on the full employee lifecycle: how people are recruited, selected, onboarded, trained, supported, evaluated, and prepared for growth. It connects staffing strategy with operational expectations so the business is not simply filling positions, but building capability.
              </p>

              <p>
                When workforce systems are underdeveloped, every staffing gap becomes urgent. When the workforce structure is clear, hiring becomes more intentional, training becomes more consistent, and employees have a better chance of succeeding in their roles.
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
              Signs Workforce Structure May Be Weak
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'High turnover or difficulty retaining good employees',
                'Inconsistent onboarding between managers or locations',
                'Frequent hiring but limited long-term staffing stability',
                'Training that is informal, rushed, or dependent on individual managers',
                'Employees who are present but not fully prepared for the role',
                'Managers spending too much time correcting preventable performance issues',
                'Unclear role expectations or inconsistent accountability',
                'Difficulty developing team members into stronger performers or future leaders',
                'A weak or reactive recruiting process',
                'Limited learning and development structure for ongoing growth',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-accent/10 shadow-sm flex items-start gap-4"
                >
                  <FiUsers className="text-accent text-xl mt-1 flex-shrink-0" />
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
              Practical Workforce Development
            </h2>

            <div className="space-y-8 text-lg text-neutral/75 leading-[1.9] font-body">
              <p>
                Culinary Provision Group helps foodservice businesses strengthen the systems that support staffing, recruiting, training, and employee development.
              </p>

              <p>
                This may include reviewing hiring practices, clarifying role expectations, improving onboarding processes, developing training structures, strengthening retention strategy, and identifying where managers need better tools to support team performance.
              </p>

              <p>
                The goal is to help businesses move from reactive staffing to intentional workforce development. That means treating people not only as labor coverage, but as a core operational capability.
              </p>

              <p>
                CPG’s work in this area is practical and structure-focused. We look at what employees need to understand, what managers need to reinforce, and what systems need to exist so performance can become more consistent over time.
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
              Operational Workforce Outcomes
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Stronger hiring and candidate evaluation',
                'Clearer onboarding and role expectations',
                'More consistent training outcomes',
                'Improved employee retention',
                'Better manager confidence and accountability',
                'Reduced performance variability between employees and shifts',
                'Stronger internal leadership pipelines',
                'Better alignment between labor deployment and operational demand',
                'A workforce that can support growth instead of simply absorb pressure',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-accent/10"
                >
                  <FiAward className="text-accent text-2xl mb-4 mx-auto" />
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
              Better Workforce Structure Creates <span className="text-accent">Stronger Performance</span>
            </h2>

            <p className="text-lg text-primary/65 leading-relaxed mb-12 max-w-3xl mx-auto">
              If staffing feels like a constant emergency, the issue may not be the labor market alone. The business may need a stronger workforce development system.
              <br /><br />
              Request a consultation to explore how better recruiting, training, and development structures can help your team perform with greater consistency and confidence.
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

export default WorkforceDevelopment;