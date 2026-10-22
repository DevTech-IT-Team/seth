import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FiArrowUpRight, FiMail, FiMapPin, FiCompass } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream pt-20 pb-12 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Decorative ambient warm glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="lg" showSubtitle={true} showTagline="always" />
            
            <p className="text-sm text-champagne/80 font-light leading-relaxed max-w-sm mt-4">
              Culinary Provision Group partners with culinary visionaries to launch, optimize, and stabilize enduring dining concepts through structured operational design.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-champagne/70 font-light">
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:contact@culinaryprovisiongroup.com" className="hover:text-white transition-colors">
                  contact@culinaryprovisiongroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Culinary Advisory &amp; Operations Practice</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Restaurant Launch (CPG Opening Doors) */}
            <div className="space-y-4">
              <h4 className="text-gold font-headline font-semibold text-sm tracking-wide border-b border-gold/20 pb-2 flex items-center gap-1.5">
                <FiCompass className="w-3.5 h-3.5 text-rose" />
                <span>Opening Doors</span>
              </h4>
              <ul className="space-y-2.5 text-xs font-light text-white/80">
                <li>
                  <Link to="/services/opening-doors" className="text-champagne font-medium hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    <span>CPG Opening Doors</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/opening-doors#roadmap" className="hover:text-gold transition-colors">
                    Launch Roadmap
                  </Link>
                </li>
                <li>
                  <Link to="/services/opening-doors#deliverables" className="hover:text-gold transition-colors">
                    Operational Deliverables
                  </Link>
                </li>
                <li>
                  <Link to="/contact?interest=CPG Opening Doors" className="hover:text-gold transition-colors text-rose font-medium">
                    Start Launch Project &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: For Your Business */}
            <div className="space-y-4">
              <h4 className="text-gold font-headline font-semibold text-sm tracking-wide border-b border-gold/20 pb-2">
                For Your Business
              </h4>
              <ul className="space-y-2.5 text-xs font-light text-white/75">
                <li>
                  <Link to="/services/restaurant-tune-up" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    <span>Restaurant Tune-Up</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/cpg-backstage" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    <span>CPG Backstage</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    All Business Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact?interest=Restaurant Tune-Up" className="hover:text-gold transition-colors">
                    Operational Audit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Learn & Explore */}
            <div className="space-y-4">
              <h4 className="text-gold font-headline font-semibold text-sm tracking-wide border-b border-gold/20 pb-2">
                Learn &amp; Explore
              </h4>
              <ul className="space-y-2.5 text-xs font-light text-white/75">
                <li>
                  <Link to="/learning/cpg-kitchen" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    <span>CPG Kitchen</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/learning/cpg-hospitality-lab" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    <span>Hospitality Lab</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact?interest=CPG Kitchen" className="hover:text-gold transition-colors text-white/60">
                    Express Interest
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company & Legal */}
            <div className="space-y-4">
              <h4 className="text-gold font-headline font-semibold text-sm tracking-wide border-b border-gold/20 pb-2">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs font-light text-white/75">
                <li>
                  <Link to="/about" className="hover:text-gold transition-colors">
                    About CPG
                  </Link>
                </li>
                <li>
                  <Link to="/hospitality-creators" className="hover:text-gold transition-colors text-champagne">
                    Hospitality Creators
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold transition-colors">
                    Contact Advisory
                  </Link>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <Link to="/privacy" className="hover:text-white transition-colors text-white/50 block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors text-white/50 block">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-champagne/60 font-light">
          <p>
            &copy; {new Date().getFullYear()} Culinary Provision Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Hospitality Systems</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose" />
              <span>Restaurant Launch</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Workforce Capability</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
