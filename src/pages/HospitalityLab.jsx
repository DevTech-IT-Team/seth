import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiCpu, 
  FiCheckCircle, 
  FiLayers, 
  FiZap, 
  FiShield, 
  FiBarChart2, 
  FiServer 
} from 'react-icons/fi';

import labImage from '../assets/Kitchen Counter 2.jpg';
import planningImage from '../assets/Meeting 1.jpg';

const HospitalityLab = () => {
  const labTracks = [
    {
      title: 'POS Ecosystems & Kitchen Display Integration',
      desc: 'Evaluating next-generation Point-of-Sale systems, KDS pacing controllers, and table-side ordering tablets for friction-free service throughput.'
    },
    {
      title: 'Intelligent Inventory & Automated Par Replenishment',
      desc: 'Studying digital scale integrations, barcode scanning workflows, and real-time depletion tracking to minimize inventory carrying costs and spoilage.'
    },
    {
      title: 'Guest Data & Reservation Optimization',
      desc: 'Harnessing guest preference tagging, table turnover analytics, and deposit models to maximize dining room yield while preserving genuine warmth.'
    },
    {
      title: 'Human-Centered Automation Ethics',
      desc: 'Setting boundaries so technology assists human hospitality staff rather than creating awkward tablet barriers between diners and servers.'
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
                <span>Innovation & Applied Research</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
                CPG Hospitality Lab
              </h1>

              <p className="text-xl font-headline italic text-espresso/90 font-light">
                Preparing modern dining operations for thoughtful, responsible technology adoption.
              </p>

              <p className="text-base sm:text-lg text-body font-light leading-relaxed max-w-2xl">
                The restaurant technology landscape is crowded with point solutions that often fragment team focus. CPG Hospitality Lab researches, stress-tests, and models modern operational workflows, ensuring emerging digital tools serve your floor team and enhance the guest experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact?interest=CPG Hospitality Lab"
                  className="btn-primary"
                >
                  <span>Express Interest in Lab Research</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#tracks"
                  className="btn-secondary"
                >
                  <span>Explore Research Tracks</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-champagne bg-white p-2">
                <img
                  src={labImage}
                  alt="Modern culinary hospitality technology and systems"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Research Tracks */}
      <section id="tracks" className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="badge-editorial">Focus Areas</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-burgundy">
              Applied Operational Research Tracks
            </h2>
            <p className="text-base text-body font-light leading-relaxed">
              We investigate real-world applications where modern software and automation create verifiable efficiency for hospitality operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {labTracks.map((track, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-cream/40 border border-champagne space-y-3 shadow-warm-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-champagne text-rose flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="font-headline font-semibold text-xl text-burgundy">
                    {track.title}
                  </h3>
                </div>
                <p className="text-sm text-body font-light leading-relaxed">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-16 bg-cream rounded-3xl p-8 sm:p-12 border border-champagne shadow-warm max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-burgundy">
              Interested in Pilot Testing New Hospitality Tools?
            </h3>
            <p className="text-sm text-body font-light max-w-xl mx-auto leading-relaxed">
              We regularly collaborate with forward-thinking restaurants and software developers to pilot digital operational workflows in live commercial environments.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?interest=CPG Hospitality Lab"
                className="btn-primary"
              >
                <span>Connect With Lab Coordinators</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HospitalityLab;
