import { Link } from 'react-router-dom';
import symbolLogo from '../assets/Symbol Final.png';
import textLogo from '../assets/Text Final.png';

const Footer = () => {
  return (
    <footer className="bg-neutral text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Stable Responsive Logo with massive sizing strategy preserved */}
            <Link to="/" className="flex items-center -ml-4 w-[260px] md:w-[320px] h-32 relative z-10">
              <div className="relative flex items-center justify-center w-full h-full">
                <img 
                  src={symbolLogo} 
                  alt="" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] md:h-[1000px] w-auto object-contain brightness-0 invert md:scale-125 pointer-events-none" 
                />
                <img 
                  src={textLogo} 
                  alt="CPG" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] md:h-[500px] w-auto object-contain brightness-0 invert z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]" 
                />
              </div>
            </Link>
            <p className="max-w-[280px] text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed opacity-50 font-bold">
              Structured advisory for food businesses. <br /> Systems, training, and operational performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 border-b border-accent/20 pb-2">Navigation</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-3 font-medium">
                <li><Link to="/" className="hover:text-accent transition-all">Home</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-all">Services</Link></li>
                <li><Link to="/approach" className="hover:text-accent transition-all">Approach</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-all">About</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 border-b border-accent/20 pb-2">Connect</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-3 font-medium">
                <li><Link to="/contact" className="hover:text-accent transition-all">Contact Us</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-all">Consultation</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 border-b border-accent/20 pb-2">Legal</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-3 font-medium">
                <li><Link to="/privacy" className="hover:text-accent transition-all">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-all">Terms & Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] md:text-[10px] opacity-40 uppercase tracking-[0.3em] font-black">
            &copy; {new Date().getFullYear()} CULINARY PROVISION GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 opacity-30 text-[9px] font-black tracking-widest uppercase">
            <span>Sustainably Designed</span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span>Architecturally Sound</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
