import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiMail, FiArrowRight, FiInfo } from 'react-icons/fi';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("CPG Learner Portal: Manual cohort provisioning active. Account verification is handled through Culinary Provision Group curriculum coordinators.");
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col justify-center py-20 px-6 md:px-10 relative overflow-hidden">
      
      <div className="max-w-[500px] w-full mx-auto bg-white p-8 md:p-10 rounded-3xl border border-champagne shadow-warm relative z-10">
        <div className="text-center mb-8 space-y-2">
          <span className="badge-editorial">Learner Portal</span>
          <h1 className="text-2xl sm:text-3xl font-headline text-burgundy font-semibold">
            Student Login
          </h1>
          <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
            Enter your cohort credentials to access CPG learning modules.
          </p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Email Address
            </label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 focus-within:border-rose focus-within:bg-white focus-within:ring-2 focus-within:ring-rose/10 transition-all">
              <FiMail className="text-muted mr-3 shrink-0" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full text-sm text-espresso bg-transparent outline-none placeholder:text-muted/60"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Password
            </label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 focus-within:border-rose focus-within:bg-white focus-within:ring-2 focus-within:ring-rose/10 transition-all">
              <FiLock className="text-muted mr-3 shrink-0" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm text-espresso bg-transparent outline-none placeholder:text-muted/60"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full justify-center"
          >
            <span>Authenticate Portal</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-champagne/70 text-center text-xs space-y-3 text-body font-light">
          <p>
            <Link to="/contact?interest=CPG Kitchen" className="text-rose font-medium hover:underline">
              Need learner credentials or assistance?
            </Link>
          </p>
          <div className="p-3 bg-cream/60 rounded-xl text-[11px] leading-relaxed text-muted border border-champagne/60 flex items-start gap-2 text-left">
            <FiInfo className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>Self-registration is inactive. Accounts are provisioned directly for enrolled pilot participants.</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentLogin;
