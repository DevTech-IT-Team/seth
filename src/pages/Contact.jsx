import { useLocation } from 'react-router-dom';
import UnifiedInquiryForm from '../components/UnifiedInquiryForm';
import { FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const location = useLocation();

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Title & Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="badge-editorial">Direct Advisory Consultation</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-burgundy">
            Let's Start the Conversation.
          </h1>
          <p className="text-base sm:text-lg text-body font-light leading-relaxed">
            Whether you are preparing to open a new restaurant or seeking operational clarity for an established hospitality brand, our team is ready to assist.
          </p>
        </div>

        {/* Content Layout: Form + Advisory Reassurance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Inquiry Form Column */}
          <div className="lg:col-span-8">
            <UnifiedInquiryForm />
          </div>

          {/* Sidebar / Advisory Reassurance & Contact Information */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-8 border border-champagne shadow-warm-sm space-y-6">
              <h3 className="font-headline font-semibold text-lg text-burgundy border-b border-champagne/80 pb-3">
                Advisory Office
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-body font-light">
                <div className="flex items-start gap-3">
                  <FiMail className="w-4 h-4 text-rose shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-espresso">Direct Inquiries</span>
                    <a href="mailto:contact@culinaryprovisiongroup.com" className="text-rose hover:underline">
                      contact@culinaryprovisiongroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-espresso">Advisory Response</span>
                    <span className="text-muted">Typically within 1–2 business days</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-espresso">Practice Scope</span>
                    <span className="text-muted">Available for national on-site launch engagements and advisory retainers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Next Card */}
            <div className="bg-champagne/40 rounded-3xl p-8 border border-champagne/80 space-y-4">
              <h4 className="font-headline font-semibold text-burgundy text-base">
                What Happens Next?
              </h4>
              <ul className="space-y-3 text-xs text-espresso/80 font-light">
                <li className="flex items-start gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span><strong>Initial Review:</strong> Our senior advisory team reviews your operational context, concept details, and timeline.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span><strong>Introductory Call:</strong> We schedule a 30-minute discovery conversation to clarify requirements and operational friction.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span><strong>Tailored Scope:</strong> We present a clear, phased proposal suited to your budget and opening milestone.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;