import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiShare2, 
  FiCheckCircle, 
  FiUsers, 
  FiAward, 
  FiCompass, 
  FiBookOpen, 
  FiMessageSquare 
} from 'react-icons/fi';

import creatorsImg from '../assets/Meeting 1.jpg';
import diningImg from '../assets/restaurant-hero.jpg';

const HospitalityCreators = () => {
  const pathways = [
    {
      title: 'Mentor First-Time Restaurateurs',
      desc: 'Partner alongside founders navigating their first buildout. Share hard-earned wisdom on contractor negotiations, menu scoping, and kitchen line culture.'
    },
    {
      title: 'Author Operational Playbooks',
      desc: 'Collaborate with CPG educational editors to codify your proven station standards, recipe costing frameworks, or beverage cellar systems into published guides.'
    },
    {
      title: 'Participate in Advisory Roundtables',
      desc: 'Join invitation-only discussions exploring industry-wide challenges—such as prime cost inflation, fair wage models, and technology ethics in dining.'
    },
    {
      title: 'Concept Advisory & Specialty Auditing',
      desc: 'Serve as a subject-matter expert on specialized CPG advisory engagements matching your deep domain expertise (e.g., wood-fired baking, omakase logistics, bar craft).'
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne/80 border border-gold/40 text-xs font-semibold uppercase tracking-wider text-burgundy">
                <span className="w-2 h-2 rounded-full bg-rose" />
                <span>Expertise Network</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                Hospitality Creators
              </h1>

              <p className="text-xl font-headline italic text-espresso/90 font-light">
                A collaborative platform for seasoned hospitality professionals to mentor, author, and shape the industry.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                The most valuable hospitality knowledge rarely lives in textbooks—it is forged on Saturday night passes, in walk-in coolers, and across decades of service. Hospitality Creators connects accomplished chefs, general managers, sommelier leaders, and independent operators who are ready to share their expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact?interest=Hospitality Creators"
                  className="btn-primary"
                >
                  <span>Join the Creators Network</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#pathways"
                  className="btn-secondary"
                >
                  <span>How You Can Contribute</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={creatorsImg}
                  alt="Hospitality leaders collaborating and planning"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contribution Pathways */}
      <section id="pathways" className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Collaborative Roles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Ways to Share Your Expertise
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              Whether you are an active operator looking to give back or a retired hospitality executive interested in advisory projects, we offer flexible participation models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pathways.map((path, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3 shadow-warm-sm flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-lg bg-champagne text-rose flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-headline font-semibold text-xl text-burgundy mb-2">
                    {path.title}
                  </h3>
                  <p className="text-sm text-body font-light leading-relaxed">
                    {path.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Invitation Card */}
          <div className="mt-16 bg-cream rounded-3xl p-8 sm:p-12 border border-champagne shadow-warm max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-burgundy">
              Ready to Share What You've Built?
            </h3>
            <p className="text-sm text-body font-light max-w-xl mx-auto leading-relaxed">
              Introduce yourself to our community director. We'd love to learn about your background, signature operational strengths, and the topics you are passionate about advancing.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?interest=Hospitality Creators"
                className="btn-primary"
              >
                <span>Connect With Hospitality Creators</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HospitalityCreators;
