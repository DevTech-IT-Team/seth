import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Student Login is a placeholder in Phase 1 as onboarding is manually managed via CPG coordinators.
    alert("CPG Student Portal: Manual provisioning active. Account validation is managed through Culinary Provision Group administrators.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <svg width="100%" height="100%">
          <pattern id="grid-pattern-login" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="black" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern-login)" />
        </svg>
      </div>

      <div className="max-w-[560px] w-full mx-auto bg-white p-6 md:p-8 rounded-[2.5rem] border border-primary/5 shadow-md relative z-10">
        <div className="text-center mb-5">
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">CPG Learners</span>
          <h2 className="text-2xl font-headline text-primary font-bold">Student Login</h2>
          <p className="text-xs text-primary/60 font-body mt-1 leading-relaxed font-light">
            Enter your credentials to access the Food Excellence learning portal.
          </p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="group relative">
            <label className="text-[10px] uppercase font-black tracking-widest text-neutral/60 group-focus-within:text-accent transition-colors">
              Email Address
            </label>
            <div className="flex items-center border-b border-neutral/30 group-focus-within:border-accent transition-colors">
              <FiMail className="text-primary/40 mr-3" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full text-base text-primary bg-transparent py-2.5 outline-none font-body placeholder:text-neutral/30"
              />
            </div>
          </div>

          <div className="group relative">
            <label className="text-[10px] uppercase font-black tracking-widest text-neutral/60 group-focus-within:text-accent transition-colors">
              Password
            </label>
            <div className="flex items-center border-b border-neutral/30 group-focus-within:border-accent transition-colors">
              <FiLock className="text-primary/40 mr-3" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-base text-primary bg-transparent py-2.5 outline-none font-body placeholder:text-neutral/30"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white py-3 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-md mt-6"
          >
            Authenticate Portal <FiArrowRight />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-primary/5 text-center text-xs space-y-2 font-body text-primary/60 font-light">
          <p>
            <Link to="/contact?reason=learning" className="text-accent font-bold hover:underline">
              Request login credentials?
            </Link>
          </p>
          <div className="p-3 bg-background rounded-xl text-[10px] leading-relaxed text-primary/70">
            <strong>System Notice:</strong> Self-registration is inactive. CPG accounts are manually provisioned by curriculum administrators.
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentLogin;
