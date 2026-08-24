import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiUsers, 
  FiLayers, 
  FiBookOpen, 
  FiCpu, 
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiActivity
} from 'react-icons/fi';

import heroBg from '../assets/Kitchen Counter 1.jpg';
import bentoImg1 from '../assets/Prep 2.jpg';
import bentoImg2 from '../assets/Standards 1.jpg';
import bentoImg3 from '../assets/Meeting 1.jpg';
import bentoImg4 from '../assets/Standards 6.jpg';
import backoffice1 from '../assets/Backoffice 1.jpg';
import backoffice2 from '../assets/backoffice-2.jpg';

const About = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 overflow-x-hidden">
      
      {/* 1. HERO */}
      <header className="relative min-h-[80vh] flex items-center pt-48 pb-24 overflow-hidden bg-primary">
        {/* Backdrop image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="About CPG" 
            className="w-full h-full object-cover opacity-30 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">About the Institution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1] text-white mb-8 tracking-tighter">
              A structured approach <br />
              <span className="text-accent font-light italic">to operational performance.</span>
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We design the operational, educational, and technology structures that allow food systems to scale, adapt, and consistently perform.
            </p>
          </div>
        </div>

        {/* Curved Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#F4F1EA"></path>
          </svg>
        </div>
      </header>

      {/* 2. WHO WE ARE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">01 / Overview</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-8">Who We Are</h2>
            <div className="space-y-6 text-primary/80 font-body text-base md:text-lg leading-relaxed font-light">
              <p>
                Culinary Provision Group (CPG) is an independent hospitality-focused institution. Founded by a team of hospitality operations veterans, advisory experts, and educational developers, we work side-by-side with culinary organizations and professional practitioners.
              </p>
              <p>
                We do not deliver traditional consulting templates or high-level slideshows. We are builders of operational systems, curriculum designs, and technological preparedness workflows. Our credibility is grounded in years of high-volume kitchen management, corporate supply-chain oversight, and instructional design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">02 / Purpose</span>
              <h2 className="text-3xl md:text-5xl font-headline text-primary mb-8">Our Mission</h2>
              <p className="text-primary/80 font-body text-base md:text-lg leading-relaxed mb-6 font-light">
                To establish operational clarity, career longevity, and resilience across the food systems industry. We achieve this by aligning organizational structure, professional development, and technological tools into unified operating models.
              </p>
              <p className="text-primary/75 font-body text-sm italic border-l-4 border-accent pl-6 py-2">
                "We design repeatable architecture so consistency is a standard operational output—not an exhausting management effort."
              </p>
            </div>
            <div className="relative">
              <img 
                src={bentoImg4} 
                alt="Our Mission in action" 
                className="w-full h-[350px] object-cover rounded-3xl shadow-lg border border-primary/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOSPITALITY IS BOTH HUMAN & COMMERCIAL */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">03 / Perspective</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-8">Hospitality Is Both Human & Commercial</h2>
            <p className="text-primary/80 font-body text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
              We reject the separation between team wellbeing and business performance. True commercial resilience is built on structured human capability, repeatable workflows, and technology that supports—rather than complicates—the day-to-day work of culinary professionals.
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR PILLARS: PEOPLE, SYSTEMS, LEARNING, TECHNOLOGY */}
      <section className="py-24 bg-white border-t border-b border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">04 / Framework</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">The Institutional Pillars</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Pillar 1: People */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">People</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed font-light">
                  Supporting hospitality professionals through career-oriented training, and helping organizations build sustainable staffing and workforce models.
                </p>
              </div>
            </div>

            {/* Pillar 2: Systems */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Systems</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed font-light">
                  Designing custom operational blueprints, production schedules, workflow guidelines, and unit cost controls to stabilize consistency.
                </p>
              </div>
            </div>

            {/* Pillar 3: Learning */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FiBookOpen size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Learning</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed font-light">
                  Publishing high-standard educational modules, field guides, and toolkits for active culinary teams and individual practitioners.
                </p>
              </div>
            </div>

            {/* Pillar 4: Technology */}
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FiCpu size={24} />
                </div>
                <h3 className="text-xl font-headline text-primary mb-4 font-bold">Technology</h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed font-light">
                  Preparing organizations to adopt emerging digital frameworks, intelligent inventory systems, and modern workflows responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (Engagement Methodology) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">05 / Methodology</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">How We Work</h2>
            <p className="text-primary/70 font-body text-base mt-4 font-light">
              We guide businesses and individuals through a structured process designed for stability and capability transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Discovery', desc: 'A 360-degree deep dive into current operational bottlenecks, labor trends, and cost structures.' },
              { step: '02', title: 'Architecture', desc: 'Designing custom systems blueprints, training curricula, and technological recommendations.' },
              { step: '03', title: 'Scale', desc: 'Rolling out the structured solutions across teams and units, measuring performance against milestones.' },
              { step: '04', title: 'Continuity', desc: 'Providing ongoing support resources, audits, and curriculum upgrades for long-term health.' }
            ].map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
                <span className="text-accent font-headline text-2xl font-bold block mb-4">{m.step}</span>
                <h4 className="text-lg font-headline font-bold text-primary mb-2">{m.title}</h4>
                <p className="text-xs text-primary/75 font-body leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PERSPECTIVE */}
      <section className="py-24 bg-white border-t border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px]">
              <img 
                src={backoffice2} 
                alt="Advisory session" 
                className="w-full h-full object-cover rounded-3xl border border-primary/5 shadow-md"
              />
            </div>
            <div>
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">06 / Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-headline text-primary mb-8">Our Perspective</h2>
              <div className="space-y-6 text-primary/80 font-body text-base leading-relaxed font-light">
                <p>
                  Operational performance issues are almost always structural failures. When consistency relies solely on the manager on shift or the effort of individuals, it is unstable.
                </p>
                <p>
                  We believe that operational integrity is built on documented, repeatable standards, optimized labor planning models, and continuous practical education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Ready to Begin?</span>
          <h2 className="text-3xl md:text-6xl font-headline text-white mb-8">Let's build structured performance.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact?reason=business" 
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-md inline-flex items-center gap-2"
            >
              Start With Assessment <FiArrowRight />
            </Link>
            <Link 
              to="/contact?reason=learning" 
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              Inquire About Learning
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;