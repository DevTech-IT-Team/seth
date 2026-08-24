import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiLayers, 
  FiActivity, 
  FiTarget, 
  FiCheckCircle, 
  FiChevronRight 
} from 'react-icons/fi';

import backOfficeImage from '../assets/backoffice-2.jpg';
import paperworkImage from '../assets/Paperwork 3.jpg';
import prepImage from '../assets/Prep 2.jpg';
import meetingImage1 from '../assets/Meeting 1.jpg';
import standardsImage from '../assets/Standards 4.jpg';

const Services = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 overflow-x-hidden">
      
      {/* 1. HERO */}
      <header 
        className="relative pt-48 pb-32 overflow-hidden bg-primary"
        style={{ backgroundImage: `url(${backOfficeImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primary z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">CPG Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1] text-white mb-8 tracking-tighter">
              Building the systems <br />
              <span className="text-accent font-light italic">behind better hospitality businesses.</span>
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We translate operational requirements into clear financial frameworks, workforce training models, and stable management systems.
            </p>
          </div>
        </div>

        {/* Curve shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C50.3,115.6,117,117.81,173.19,103,235.15,86.67,263.39,64.25,321.39,56.44Z" fill="#F4F1EA"></path>
          </svg>
        </div>
      </header>

      {/* 2. THE 4 CORE B2B SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Service 01 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-sm">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-accent text-xs font-black uppercase tracking-widest block">01 / Structural Level</span>
                <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">Systems Advisory</h3>
                <p className="text-primary/75 font-body leading-relaxed text-sm md:text-base font-light">
                  Clarifying how the business functions at its core through operational modeling and refined process design. We map cost structure thresholds and structural constraints.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-body font-bold text-accent">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Operational modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Cost structure analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Process design
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 h-[250px] overflow-hidden rounded-2xl">
                <img src={paperworkImage} alt="Systems Advisory" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 02 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-sm">
              <div className="lg:col-span-7 space-y-6 lg:order-2">
                <span className="text-accent text-xs font-black uppercase tracking-widest block">02 / Execution Level</span>
                <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">Operational Optimization</h3>
                <p className="text-primary/75 font-body leading-relaxed text-sm md:text-base font-light">
                  Improving efficiency and profitability through deep-dive workflow analysis and precise labor alignment models. We align resource allocation with day-to-day demand constraints.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-body font-bold text-accent">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Workflow analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Labor alignment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Inventory & cost control
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 h-[250px] overflow-hidden rounded-2xl lg:order-1">
                <img src={prepImage} alt="Operational Optimization" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 03 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-sm">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-accent text-xs font-black uppercase tracking-widest block">03 / Capacity Building</span>
                <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">Workforce Development</h3>
                <p className="text-primary/75 font-body leading-relaxed text-sm md:text-base font-light">
                  Building internal operational capability through structured training designs, documentation frameworks, and AI-assisted professional course development.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-body font-bold text-accent">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Training system design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Capability development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> AI-assisted course design
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 h-[250px] overflow-hidden rounded-2xl">
                <img src={meetingImage1} alt="Workforce Development" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 04 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-sm">
              <div className="lg:col-span-7 space-y-6 lg:order-2">
                <span className="text-accent text-xs font-black uppercase tracking-widest block">04 / Systems in Practice</span>
                <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">Implementation Support</h3>
                <p className="text-primary/75 font-body leading-relaxed text-sm md:text-base font-light">
                  Translating theoretical systems design into active daily operations through hands-on rollout management, metrics integration, and performance tracking.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-xs font-body font-bold text-accent">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Systems rollout
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Operational integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Performance tracking
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 h-[250px] overflow-hidden rounded-2xl lg:order-1">
                <img src={standardsImage} alt="Implementation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW ENGAGEMENT WORKS */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Engagement Methodology</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">How Engagement Works</h2>
            <p className="text-primary/75 font-body text-base mt-4 font-light">
              We utilize a structured progression framework to ensure capability is successfully transferred.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep dive operational audit into current financial thresholds, labor planning systems, and bottlenecks.' },
              { num: '02', title: 'Architecture', desc: 'Designing customized blueprints, custom standard procedures documentation, and digital tools.' },
              { num: '03', title: 'Scale', desc: 'Direct rollout support across organization layers, tracking performance metrics against milestones.' },
              { num: '04', title: 'Continuity', desc: 'Follow-up audits, updated learning modules, and optimization adjustments for structural health.' }
            ].map((method, idx) => (
              <div key={idx} className="p-6 bg-background rounded-2xl border border-primary/5 flex flex-col justify-between">
                <div>
                  <span className="text-accent font-headline text-3xl font-bold block mb-4">{method.num}</span>
                  <h4 className="text-lg font-headline font-bold text-primary mb-2">{method.title}</h4>
                  <p className="text-xs text-primary/75 font-body leading-relaxed font-light">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Get Started</span>
          <h2 className="text-3xl md:text-6xl font-headline text-white mb-8">Start with a structured assessment.</h2>
          <p className="text-white/70 max-w-md mx-auto mb-10 font-body text-sm font-light">
            Every partnership begins with a thorough 360-degree review of your operational constraints and business performance parameters.
          </p>
          <Link 
            to="/contact?reason=business" 
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg inline-flex items-center gap-2"
          >
            Start Assessment Engagement <FiArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;