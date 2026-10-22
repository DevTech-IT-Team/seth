import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiCompass, 
  FiActivity, 
  FiLayers, 
  FiCheckCircle, 
  FiChevronRight 
} from 'react-icons/fi';

import backOfficeImage from '../assets/backoffice-2.jpg';
import paperworkImage from '../assets/Paperwork 3.jpg';
import prepImage from '../assets/Prep 2.jpg';
import launchPrepImg from '../assets/launch-prep.jpg';
import backstageImg from '../assets/Backoffice 1.jpg';

const Services = () => {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6">
            <span className="badge-editorial">Business & Launch Advisory</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy leading-tight">
              Hospitality Services Built for Operational Longevity.
            </h1>
            <p className="text-base sm:text-lg text-body font-light leading-relaxed">
              We translate culinary concepts and dining room ambitions into solid financial models, resilient kitchen architecture, and repeatable back-office systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          
          {/* Service 01: CPG Opening Doors (Flagship) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/40 p-8 sm:p-12 rounded-3xl border border-champagne shadow-warm-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose bg-rose/10 px-3 py-1 rounded-full">
                  Flagship Offering
                </span>
                <span className="text-xs text-muted font-medium">Concept to Opening Day</span>
              </div>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">
                CPG Opening Doors
              </h2>
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                End-to-end operational advisory for opening a new restaurant. We partner with founders from early feasibility, floorplan layout, and equipment sourcing to backstage systems, team training, and opening-night execution.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-espresso/80 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0" />
                  <span>Feasibility modeling & pro-forma</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0" />
                  <span>Kitchen line layout & vendor setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0" />
                  <span>Pre-opening staff rehearsals</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0" />
                  <span>On-site opening week leadership</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/services/opening-doors"
                  className="btn-primary"
                >
                  <span>Explore Opening Doors</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact?interest=CPG Opening Doors"
                  className="text-xs text-muted hover:text-rose font-medium transition-colors"
                >
                  Schedule Consultation &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-warm border border-white">
              <img
                src={launchPrepImg}
                alt="CPG Opening Doors restaurant launch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service 02: Restaurant Tune-Up */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/40 p-8 sm:p-12 rounded-3xl border border-champagne shadow-warm-sm">
            <div className="lg:col-span-7 space-y-5 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-champagne/70 px-3 py-1 rounded-full">
                  Operational Optimization
                </span>
                <span className="text-xs text-muted font-medium">Existing Dining Operations</span>
              </div>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">
                Restaurant Tune-Up
              </h2>
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                A rapid 360-degree operational diagnostic designed to fix margin leaks, unbalance in labor scheduling, and kitchen service bottlenecks. We produce an actionable 60-day recovery roadmap.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-espresso/80 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Food waste & recipe yield audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Labor curves & shift scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Ticket timing & pass coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Prime cost margin defense</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/services/restaurant-tune-up"
                  className="btn-primary"
                >
                  <span>Explore Restaurant Tune-Up</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact?interest=Restaurant Tune-Up"
                  className="text-xs text-muted hover:text-rose font-medium transition-colors"
                >
                  Request Audit &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-warm border border-white lg:order-1">
              <img
                src={prepImage}
                alt="Restaurant operational optimization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service 03: CPG Backstage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/40 p-8 sm:p-12 rounded-3xl border border-champagne shadow-warm-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-champagne/70 px-3 py-1 rounded-full">
                  Systems Infrastructure
                </span>
                <span className="text-xs text-muted font-medium">Scalable Documentation</span>
              </div>
              <h2 className="text-3xl font-headline font-semibold text-burgundy">
                CPG Backstage
              </h2>
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                Institutional operating manuals, inventory tracking protocols, recipe cards, and manager scorecards that give owners confidence their standards are upheld on every shift.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-espresso/80 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Turnkey Standard Operating Procedures</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Purveyor pars & weekly waste logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Managerial scorecards & KPI checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>Multi-unit expansion readiness</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/services/cpg-backstage"
                  className="btn-primary"
                >
                  <span>Explore CPG Backstage</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact?interest=CPG Backstage"
                  className="text-xs text-muted hover:text-rose font-medium transition-colors"
                >
                  Build Your Backstage &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-warm border border-white">
              <img
                src={backstageImg}
                alt="CPG Backstage systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
          <span className="badge-editorial">Start An Advisory Engagement</span>
          <h2 className="text-3xl sm:text-5xl font-headline text-burgundy leading-tight">
            Let's discuss what your operation needs.
          </h2>
          <p className="text-base text-body font-light max-w-xl mx-auto leading-relaxed">
            Every engagement begins with an open, confidential conversation about your goals, timelines, and operational structure.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary"
            >
              <span>Request Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;