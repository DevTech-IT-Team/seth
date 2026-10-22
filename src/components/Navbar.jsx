import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiArrowRight, 
  FiCompass, 
  FiActivity, 
  FiLayers, 
  FiBookOpen, 
  FiCpu 
} from 'react-icons/fi';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdownEnter = (label) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileSubmenu = (key) => {
    setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* =========================================================================
          MODERN LUXURY AGENCY NAVBAR
          Full-width, glassmorphic surface, crisp typography, and uncluttered layout.
          ========================================================================= */}
      <header
        ref={headerRef}
        className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#FFF8F2]/98 backdrop-blur-xl shadow-warm-sm border-b border-champagne/80 py-3'
            : 'bg-[#FFF8F2]/90 backdrop-blur-md border-b border-champagne/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-10 flex items-center justify-between gap-4">
          
          {/* Brand Logo Lockup */}
          <Logo size="md" showTagline="responsive" className="shrink-0" />

          {/* Desktop Navigation Links — Never wrap or collapse */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 shrink-0" aria-label="Main Navigation">
            
            {/* Our Services Dropdown — Featuring CPG Opening Doors */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleDropdownEnter('Services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                aria-expanded={activeDropdown === 'Services'}
                className={`inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith('/services')
                    ? 'text-burgundy bg-champagne/50'
                    : 'text-espresso/80 hover:text-burgundy hover:bg-champagne/30'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
              >
                <span className="whitespace-nowrap">Our Services</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-rose bg-rose/10 px-1.5 py-0.5 rounded-full shrink-0">
                  New
                </span>
                <FiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                    activeDropdown === 'Services' ? 'rotate-180 text-rose' : 'text-muted'
                  }`}
                />
              </button>

              {activeDropdown === 'Services' && (
                <div className="absolute top-full left-0 mt-2.5 w-[380px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-champagne p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-2">
                    
                    {/* Featured Flagship Practice: CPG Opening Doors */}
                    <Link
                      to="/services/opening-doors"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3.5 rounded-xl bg-gradient-to-br from-[#FFF5ED] via-[#FAF0E6] to-[#FFF8F2] border border-rose/30 hover:border-rose/60 transition-all flex items-start gap-3.5 group shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-lg bg-rose text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                        <FiCompass className="w-4 h-4 shrink-0" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-headline font-bold text-burgundy text-sm group-hover:text-rose transition-colors whitespace-nowrap">
                            CPG Opening Doors
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-rose px-2 py-0.5 rounded-full shrink-0 shadow-sm">
                            New Practice
                          </span>
                        </div>
                        <p className="text-xs text-muted leading-relaxed mt-1">
                          Turnkey restaurant launch advisory — concept, layout, kitchen geometry &amp; opening night.
                        </p>
                      </div>
                    </Link>

                    {/* Restaurant Tune-Up */}
                    <Link
                      to="/services/restaurant-tune-up"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-xl hover:bg-[#FAF4ED] border border-transparent hover:border-gold/30 transition-all flex items-start gap-3 group bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-champagne/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose group-hover:text-white transition-colors">
                        <FiActivity className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-burgundy text-sm group-hover:text-rose transition-colors whitespace-nowrap">
                          Restaurant Tune-Up
                        </div>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">
                          Operational diagnostic, labor rebalancing &amp; margin recovery.
                        </p>
                      </div>
                    </Link>

                    {/* CPG Backstage */}
                    <Link
                      to="/services/cpg-backstage"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-xl hover:bg-[#FAF4ED] border border-transparent hover:border-gold/30 transition-all flex items-start gap-3 group bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-champagne/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose group-hover:text-white transition-colors">
                        <FiLayers className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-burgundy text-sm group-hover:text-rose transition-colors whitespace-nowrap">
                          CPG Backstage
                        </div>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">
                          Standard Operating Procedures, inventory controls &amp; scorecards.
                        </p>
                      </div>
                    </Link>

                    <div className="pt-2 border-t border-champagne/60 px-2 flex justify-between items-center text-xs">
                      <Link 
                        to="/services" 
                        onClick={() => setActiveDropdown(null)}
                        className="text-muted hover:text-rose font-medium transition-colors whitespace-nowrap"
                      >
                        All Services Overview &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learning Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleDropdownEnter('Learning')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                aria-expanded={activeDropdown === 'Learning'}
                className={`inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith('/learning')
                    ? 'text-burgundy bg-champagne/50'
                    : 'text-espresso/80 hover:text-burgundy hover:bg-champagne/30'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'Learning' ? null : 'Learning')}
              >
                <span className="whitespace-nowrap">Learning &amp; Labs</span>
                <FiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                    activeDropdown === 'Learning' ? 'rotate-180 text-rose' : 'text-muted'
                  }`}
                />
              </button>

              {activeDropdown === 'Learning' && (
                <div className="absolute top-full left-0 mt-2.5 w-[330px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-champagne p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1.5">
                    <Link
                      to="/learning/cpg-kitchen"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-xl hover:bg-[#FAF4ED] border border-transparent hover:border-gold/30 transition-all flex items-start gap-3 group bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-champagne/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose group-hover:text-white transition-colors">
                        <FiBookOpen className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-burgundy text-sm group-hover:text-rose transition-colors whitespace-nowrap">
                          CPG Kitchen
                        </div>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">
                          Culinary standards, line geometry & kitchen yield economics.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/learning/cpg-hospitality-lab"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-xl hover:bg-[#FAF4ED] border border-transparent hover:border-gold/30 transition-all flex items-start gap-3 group bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-champagne/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose group-hover:text-white transition-colors">
                        <FiCpu className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-burgundy text-sm group-hover:text-rose transition-colors whitespace-nowrap">
                          Hospitality Lab
                        </div>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">
                          Practical modern workflows, POS systems & automation.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              to="/hospitality-creators"
              className={`px-2.5 xl:px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 ${
                location.pathname === '/hospitality-creators'
                  ? 'text-rose font-bold bg-rose/5'
                  : 'text-espresso/80 hover:text-burgundy hover:bg-champagne/30'
              }`}
            >
              Creators
            </Link>

            <Link
              to="/about"
              className={`px-2.5 xl:px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 ${
                location.pathname === '/about'
                  ? 'text-rose font-bold bg-rose/5'
                  : 'text-espresso/80 hover:text-burgundy hover:bg-champagne/30'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-2.5 xl:px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 ${
                location.pathname === '/contact'
                  ? 'text-rose font-bold bg-rose/5'
                  : 'text-espresso/80 hover:text-burgundy hover:bg-champagne/30'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Consult / Inquire Pill Button + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-burgundy hover:bg-rose shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Consult Advisory</span>
              <FiArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-burgundy hover:bg-champagne/50 transition-colors shrink-0"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MODERN MOBILE NAVIGATION OVERLAY
          ========================================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[65px] sm:top-[73px] z-40 bg-[#FFF8F2]/98 backdrop-blur-2xl lg:hidden overflow-y-auto px-6 py-6 flex flex-col justify-between border-t border-champagne animate-in fade-in duration-200">
          <div className="space-y-4 max-w-lg mx-auto w-full">
            
            {/* Mobile Featured Announcement: CPG Opening Doors */}
            <Link
              to="/services/opening-doors"
              className="block p-4 rounded-2xl bg-gradient-to-r from-burgundy via-[#5b2732] to-espresso text-white shadow-warm border border-gold/40"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-headline font-bold text-base flex items-center gap-2">
                  <FiCompass className="w-4 h-4 text-gold" />
                  CPG Opening Doors
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/25 text-champagne px-2 py-0.5 rounded-full">
                  New Service
                </span>
              </div>
              <p className="text-xs text-champagne/85 font-light leading-relaxed">
                Turnkey restaurant launch advisory: from concept &amp; kitchen flow to opening night.
              </p>
            </Link>

            {/* Services Accordion */}
            <div className="border border-champagne rounded-2xl overflow-hidden bg-white/80">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('Services')}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-burgundy"
              >
                <span className="text-base">Advisory Services</span>
                <FiChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-200 ${
                    mobileExpanded['Services'] ? 'rotate-180 text-rose' : ''
                  }`}
                />
              </button>

              {mobileExpanded['Services'] && (
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-champagne/40 bg-cream/50">
                  <Link
                    to="/services/restaurant-tune-up"
                    className="block p-3 rounded-xl bg-white border border-champagne/60"
                  >
                    <span className="font-headline font-semibold text-burgundy text-sm block">
                      Restaurant Tune-Up
                    </span>
                    <span className="text-xs text-muted">Operational diagnostic &amp; margin recovery.</span>
                  </Link>
                  <Link
                    to="/services/cpg-backstage"
                    className="block p-3 rounded-xl bg-white border border-champagne/60"
                  >
                    <span className="font-headline font-semibold text-burgundy text-sm block">
                      CPG Backstage
                    </span>
                    <span className="text-xs text-muted">Institutional SOPs &amp; management systems.</span>
                  </Link>
                  <Link
                    to="/services"
                    className="block p-2 text-xs text-rose font-medium text-center"
                  >
                    All Services Overview &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Learn & Explore Accordion */}
            <div className="border border-champagne rounded-2xl overflow-hidden bg-white/80">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('Learning')}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-burgundy"
              >
                <span className="text-base">Learning &amp; Labs</span>
                <FiChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-200 ${
                    mobileExpanded['Learning'] ? 'rotate-180 text-rose' : ''
                  }`}
                />
              </button>

              {mobileExpanded['Learning'] && (
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-champagne/40 bg-cream/50">
                  <Link
                    to="/learning/cpg-kitchen"
                    className="block p-3 rounded-xl bg-white border border-champagne/60"
                  >
                    <span className="font-headline font-semibold text-burgundy text-sm block">
                      CPG Kitchen
                    </span>
                    <span className="text-xs text-muted">Culinary standards &amp; kitchen economics.</span>
                  </Link>
                  <Link
                    to="/learning/cpg-hospitality-lab"
                    className="block p-3 rounded-xl bg-white border border-champagne/60"
                  >
                    <span className="font-headline font-semibold text-burgundy text-sm block">
                      Hospitality Lab
                    </span>
                    <span className="text-xs text-muted">Intelligent systems &amp; modern workflows.</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-1">
              <Link
                to="/hospitality-creators"
                className="block py-3 px-4 rounded-xl text-base font-semibold text-espresso hover:text-burgundy hover:bg-champagne/40"
              >
                Hospitality Creators
              </Link>
              <Link
                to="/about"
                className="block py-3 px-4 rounded-xl text-base font-semibold text-espresso hover:text-burgundy hover:bg-champagne/40"
              >
                About CPG
              </Link>
              <Link
                to="/contact"
                className="block py-3 px-4 rounded-xl text-base font-semibold text-espresso hover:text-burgundy hover:bg-champagne/40"
              >
                Contact Advisory
              </Link>
            </div>

          </div>

          <div className="pt-6 mt-6 border-t border-champagne space-y-3 max-w-lg mx-auto w-full">
            <Link
              to="/contact"
              className="w-full btn-primary text-center justify-center py-3.5 shadow-warm"
            >
              <span>Consult Advisory</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-muted">
              Culinary Provision Group &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
