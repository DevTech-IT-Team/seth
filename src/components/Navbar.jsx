import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import symbolLogo from '../assets/Symbol Final.png';
import textLogo from '../assets/Text Final.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Determine if we should use dark or light text based on scroll and page
  const isDarkHero = ['/', '/services', '/about', '/learning', '/learning/food-excellence', '/technology', '/contact', '/privacy', '/terms'].includes(location.pathname);
  const isTransparent = !isScrolled && isDarkHero && !isMenuOpen;
  
  const navTextColor = isTransparent ? 'text-white' : 'text-primary';
  const navBg = (isScrolled || isMenuOpen) ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-8';

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Learning', path: '/learning' },
    { name: 'Technology', path: '/technology' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ${navBg}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative h-full">
          
          {/* Responsive Stable Logo (Restored Huge Dimensions) */}
          <Link to="/" className="relative flex items-center group w-[220px] md:w-[320px] h-20 -ml-2 md:ml-8">
            <div className="relative flex items-center justify-center w-full h-full text-center">
              <img 
                src={symbolLogo} 
                alt="" 
                className={`absolute top-0.5 left-1/2 -translate-x-1/2 -translate-y-[45%] h-[600px] md:h-[1000px] w-auto object-contain pointer-events-none transition-all duration-1000 ${
                  isTransparent ? 'brightness-0 invert' : ''
                }`} 
              />
              <img 
                src={textLogo} 
                alt="CPG" 
                className={`absolute top-0.5 left-1/2 -translate-x-1/2 -translate-y-[40%] h-[300px] md:h-[500px] w-auto object-contain pointer-events-none transition-all duration-500 z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] ${
                  isTransparent ? 'brightness-0 invert' : ''
                }`} 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-500 ${navTextColor}`}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`whitespace-nowrap transition-all pb-1 border-b hover:text-accent hover:border-accent ${
                    isActive 
                      ? 'text-accent border-accent' 
                      : 'border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link to="/student-login" className={`
              border px-6 py-2.5 transition-all duration-500 tracking-[0.2em] font-black whitespace-nowrap
              ${location.pathname === '/student-login'
                ? 'bg-accent border-accent text-primary'
                : isTransparent
                  ? 'border-white/40 hover:bg-white hover:text-primary hover:border-white' 
                  : 'border-primary/20 hover:bg-primary hover:text-white hover:border-primary'}
            `}>
              Student Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors duration-500 ${navTextColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Sibling to Nav for stability) */}
      <div className={`
        fixed inset-0 bg-white z-[110] flex flex-col items-center justify-start transition-all duration-500 lg:hidden overflow-y-auto
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="flex flex-col items-center gap-10 text-center pt-32 pb-12 w-full px-8">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-headline italic transition-all duration-300 transform ${
                  isActive ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2 opacity-60">0{idx + 1}</span>
                {item.name}
              </Link>
            );
          })}
          <Link 
            to="/student-login" 
            onClick={() => setIsMenuOpen(false)}
            className={`mt-6 w-full max-w-[280px] py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl active:scale-95 transition-transform text-center ${
              location.pathname === '/student-login'
                ? 'bg-accent text-primary'
                : 'bg-primary text-white'
            }`}
          >
            Student Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
