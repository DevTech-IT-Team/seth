import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', businessName: '', location: '',
    businessType: '', stage: '', revenueRange: '',
    primaryChallenge: '', pressurePoints: [],
    currentSystems: '', readiness: '', assessmentOpen: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = 6;
  const progress = (step / steps) * 100;

  const handleNext = () => { if (step < steps) setStep(step + 1); };
  const handlePrev = () => { if (step > 1) setStep(step - 1); };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleOption = (field, value, multi = false) => {
    if (multi) {
      setFormData(prev => {
        const current = prev[field] || [];
        return { ...prev, [field]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] };
      });
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-accent/10 text-accent rounded-3xl flex items-center justify-center mx-auto rotate-12">
            <Check className="w-12 h-12" />
          </div>
          <h2 className="text-5xl md:text-6xl font-headline italic text-primary leading-tight">Request Received.</h2>
          <p className="text-xl text-neutral/50 font-body max-w-md mx-auto">
            Your profile has been received. Our team will review your operational context and follow up within 24 business hours.
          </p>
          <Link to="/" className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Intelligence
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      
      {/* LEFT PANEL: Context & Progress (Sticky on Desktop) */}
      <div className="lg:w-1/3 bg-primary p-12 lg:p-20 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div className="relative z-10">
           <Link to="/" className=" text-[17px] font-black tracking-[0.5em] uppercase opacity-60 hover:opacity-100 transition-opacity">
            Culinary Provision Group
          </Link> 
          <div className="mt-24 space-y-6">
            <span className="text-4xl md:text-5xl font-headline italic leading-tight">
              Let's define the <br /><span className="text-accent">structural path.</span>
            </span>
            <p className="text-white/80 font-body text-lg leading-relaxed max-w-xs">
              Every engagement begins with a precise read of your operational structure.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 lg:mt-0">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-headline italic text-accent">0{step}</span>
            <span className="text-white/20 text-2xl font-headline italic">/ 0{steps}</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: The Form Interface */}
      <div className="lg:w-2/3 bg-white p-8 md:p-20 lg:p-32 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-2xl w-full mx-auto flex flex-col min-h-[500px]">
          
          <div className="flex-1">
            {/* Step 1: Identity */}
            {step === 1 && (
              <section className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
                <header className="space-y-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Step 01</span>
                  <h2 className="text-4xl font-headline italic text-primary leading-tight">Identify your organization.</h2>
                </header>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {['name', 'email', 'businessName', 'location'].map((field) => (
                    <div key={field} className="group relative">
                      <label className="text-[10px] uppercase font-black tracking-widest text-neutral/60 group-focus-within:text-accent transition-colors">
                        {field.replace(/([A-Z])/g, ' $1')}
                      </label>
                      <input 
                        type={field === 'email' ? 'email' : 'text'} 
                        name={field}
                        required
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder="Enter details..."
                        className="w-full text-xl text-primary bg-transparent border-b-2 border-neutral/30 py-4 outline-none focus:border-accent transition-all font-body placeholder:text-neutral/40"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Step 2: Scale */}
            {step === 2 && (
              <section className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
                <header className="space-y-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Step 02</span>
                  <h2 className="text-4xl font-headline italic text-primary leading-tight">Scale and Domain.</h2>
                </header>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Restaurant', 'Café', 'Catering', 'Hospitality', 'Retail', 'Other'].map(type => (
                      <button key={type} type="button" onClick={() => toggleOption('businessType', type)} 
                        className={`text-[10px] p-5 font-black uppercase tracking-widest border-2 transition-all duration-300 rounded-xl
                        ${formData.businessType === type ? 'border-primary bg-primary text-white shadow-xl translate-y-[-2px]' : 'border-neutral/30 text-neutral/70 hover:border-primary hover:text-primary'}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase font-black tracking-widest text-neutral/60 group-focus-within:text-accent">Estimated Revenue</label>
                    <select name="revenueRange" value={formData.revenueRange} onChange={handleInputChange} className="w-full text-xl text-primary bg-transparent border-b-2 border-neutral/30 py-4 outline-none focus:border-accent transition-all font-body">
                      <option value="">Select Range</option>
                      <option value="<500k">Under $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                  </div>
                </div>
              </section>
            )}

            {/* Step 3: Pain Points */}
            {step === 3 && (
              <section className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
                <header className="space-y-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Step 03</span>
                  <h2 className="text-4xl font-headline italic text-primary">Pinpoint the friction.</h2>
                </header>
                <div className="space-y-8">
                  <textarea name="primaryChallenge" value={formData.primaryChallenge} onChange={handleInputChange} rows="2" placeholder="Describe the core obstruction..." className="w-full text-2xl font-headline italic text-primary bg-transparent border-b-2 border-neutral/30 py-2 outline-none focus:border-accent transition-all resize-none placeholder:text-neutral/40" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Cost control', 'Staffing', 'Operations', 'Growth', 'Structure'].map(opt => (
                      <button key={opt} type="button" onClick={() => toggleOption('pressurePoints', opt, true)} 
                        className={`flex items-center justify-between p-5 border-2 transition-all rounded-xl font-black uppercase tracking-widest text-[10px]
                        ${formData.pressurePoints.includes(opt) ? 'border-accent bg-accent text-white' : 'border-neutral/30 text-neutral/70 hover:border-accent'}`}>
                        {opt} {formData.pressurePoints.includes(opt) && <Check className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Steps 4 & 5 (Awareness & Readiness) - Simplified for brevity in this response */}
            {(step === 4 || step === 5) && (
              <section className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
                <header className="space-y-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Step 0{step}</span>
                  <h2 className="text-4xl font-headline italic text-primary leading-tight">
                    {step === 4 ? "Systems Awareness" : "Implementation Readiness"}
                  </h2>
                </header>
                <div className="space-y-4">
                  {(step === 4 
                    ? ['Yes, well-defined', 'Inconsistent', 'No formal systems'] 
                    : ['Immediately (30 days)', 'Exploring options', 'Not immediately']
                  ).map(opt => (
                    <button 
                      key={opt} 
                      type="button" 
                      onClick={() => toggleOption(step === 4 ? 'currentSystems' : 'readiness', opt)} 
                      className={`w-full p-8 text-left border-2 rounded-2xl transition-all flex justify-between items-center group
                      ${(formData.currentSystems === opt || formData.readiness === opt) ? 'border-primary bg-primary/10' : 'border-neutral/30 hover:border-primary'}`}>
                      <span className={`font-bold uppercase tracking-widest text-xs transition-colors ${(formData.currentSystems === opt || formData.readiness === opt) ? 'text-primary' : 'text-neutral/70 group-hover:text-primary'}`}>
                        {opt}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${(formData.currentSystems === opt || formData.readiness === opt) ? 'border-primary bg-primary' : 'border-neutral/30 group-hover:border-primary'}`}>
                        {(formData.currentSystems === opt || formData.readiness === opt) && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Step 6: Assessment Engagement */}
            {step === 6 && (
              <section className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
                <header className="space-y-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Final Step</span>
                  <h2 className="text-4xl font-headline italic text-primary">Strategic Alignment.</h2>
                </header>
                <div className="bg-neutral/5 p-8 rounded-[2rem] border border-neutral/10 space-y-4">
                  <div className="flex gap-4 text-primary">
                    <ShieldCheck className="w-6 h-6 shrink-0" />
                    <p className="text-sm font-body leading-relaxed opacity-70 italic">
                      We begin with a two-week structured assessment of your operational architecture—before any design decisions are made.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Yes', 'Request Info'].map(opt => (
                    <button key={opt} type="button" onClick={() => toggleOption('assessmentOpen', opt)} 
                      className={`p-6 text-center border-2 transition-all rounded-2xl font-black uppercase tracking-widest text-[10px]
                      ${formData.assessmentOpen === opt ? 'border-primary bg-primary text-white' : 'border-neutral/30 text-neutral/70 hover:border-primary hover:text-primary'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* NAV CONTROLS */}
          <div className="pt-20 flex items-center justify-between">
            {step > 1 ? (
              <button type="button" onClick={handlePrev} className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-neutral/60 hover:text-primary transition-all">
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Previous
              </button>
            ) : <div />}

            <div className="flex gap-4">
              {step < steps ? (
                <button type="button" onClick={handleNext} className="group inline-flex items-center gap-6 bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-all shadow-xl shadow-primary/10">
                  Next Step <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <button type="submit" className="inline-flex items-center gap-6 bg-accent text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-xl shadow-accent/20 animate-bounce-subtle">
                  Request Consultation <Zap className="w-4 h-4 fill-white" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;