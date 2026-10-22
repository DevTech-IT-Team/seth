import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiAlertCircle, FiSend } from 'react-icons/fi';

const INTEREST_OPTIONS = [
  'CPG Opening Doors',
  'Restaurant Tune-Up',
  'CPG Backstage',
  'CPG Kitchen',
  'CPG Hospitality Lab',
  'Hospitality Creators',
  'Not sure yet'
];

const UnifiedInquiryForm = ({ preselectedInterest = '', defaultInterest = '', onSubmitted = null }) => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    interest: preselectedInterest || defaultInterest || 'CPG Opening Doors',
    preferredContact: 'Either',
    description: '',
    smsConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  // Parse URL search parameters for preselection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramInterest = params.get('interest');
    const paramReason = params.get('reason');

    let matched = '';

    if (paramInterest && INTEREST_OPTIONS.includes(paramInterest)) {
      matched = paramInterest;
    } else if (paramReason) {
      const lower = paramReason.toLowerCase();
      if (lower.includes('opening') || lower.includes('doors') || lower.includes('launch')) {
        matched = 'CPG Opening Doors';
      } else if (lower.includes('tune') || lower.includes('business')) {
        matched = 'Restaurant Tune-Up';
      } else if (lower.includes('backstage') || lower.includes('system')) {
        matched = 'CPG Backstage';
      } else if (lower.includes('kitchen') || lower.includes('learning')) {
        matched = 'CPG Kitchen';
      } else if (lower.includes('lab') || lower.includes('tech')) {
        matched = 'CPG Hospitality Lab';
      } else if (lower.includes('creator') || lower.includes('expert')) {
        matched = 'Hospitality Creators';
      }
    }

    if (matched) {
      setFormData(prev => ({ ...prev, interest: matched }));
    } else if (preselectedInterest && INTEREST_OPTIONS.includes(preselectedInterest)) {
      setFormData(prev => ({ ...prev, interest: preselectedInterest }));
    } else if (defaultInterest && INTEREST_OPTIONS.includes(defaultInterest)) {
      setFormData(prev => ({ ...prev, interest: defaultInterest }));
    }
  }, [location.search, preselectedInterest, defaultInterest]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest.';
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please share a short description of your restaurant's needs or vision.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Please provide at least a few words so we can prepare thoughtful recommendations.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (!ACCESS_KEY) {
        // Backend not configured - graceful handling
        console.warn('VITE_WEB3FORMS_ACCESS_KEY is not defined in environment variables.');
        setServerError('Inquiry service integration key is pending configuration in the environment. Please contact contact@culinaryprovisiongroup.com directly.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New CPG Inquiry: [${formData.interest}] - ${formData.businessName || formData.name}`,
          name: formData.name,
          email: formData.email,
          business_name: formData.businessName || 'Not specified',
          phone: formData.phone || 'Not provided',
          area_of_interest: formData.interest,
          preferred_contact: formData.preferredContact,
          description: formData.description,
          sms_consent: formData.smsConsent ? 'Yes' : 'No',
          from_name: 'CPG Unified Inquiry Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        if (onSubmitted) onSubmitted(formData);
      } else {
        throw new Error(result.message || 'Submission failed. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setServerError(err.message || 'Unable to submit your inquiry at this time. Please email contact@culinaryprovisiongroup.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-champagne shadow-warm text-center max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-champagne/80 text-rose flex items-center justify-center mx-auto border border-gold/40">
          <FiCheck className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-rose">
            Inquiry Received
          </span>
          <h3 className="text-3xl font-headline text-burgundy">
            Thank you, {formData.name.split(' ')[0]}.
          </h3>
          <p className="text-sm text-body font-light leading-relaxed max-w-md mx-auto">
            Your inquiry regarding <strong className="text-burgundy font-medium">{formData.interest}</strong> has been delivered to our advisory team. We review each inquiry carefully and will follow up via your preferred contact method.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary"
          >
            <span>Return to Homepage</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                businessName: '',
                phone: '',
                interest: preselectedInterest || 'CPG Opening Doors',
                preferredContact: 'Either',
                description: '',
                smsConsent: false
              });
            }}
            className="btn-white text-xs"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-champagne shadow-warm max-w-2xl mx-auto space-y-8"
    >
      <div className="border-b border-champagne/70 pb-6">
        <span className="badge-editorial mb-3">Consultation & Inquiry</span>
        <h3 className="text-2xl sm:text-3xl font-headline text-burgundy">
          Let's discuss your restaurant vision.
        </h3>
        <p className="text-sm text-body font-light mt-2 leading-relaxed">
          Tell us about your upcoming restaurant launch, current operation, or educational interest. We tailor every discussion to your specific stage and requirements.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-rose/10 border border-rose/30 flex items-start gap-3 text-burgundy text-xs">
          <FiAlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
          <p className="leading-relaxed">{serverError}</p>
        </div>
      )}

      {/* Form Fields Grid */}
      <div className="space-y-6">
        
        {/* Row 1: Name & Email (Required) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label htmlFor="inquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-burgundy">
              Full Name <span className="text-rose">*</span>
            </label>
            <input
              id="inquiry-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Elena Vance"
              className={`w-full px-4 py-3 rounded-xl bg-cream/40 border text-sm text-espresso placeholder:text-muted/60 outline-none transition-all ${
                errors.name 
                  ? 'border-rose focus:ring-2 focus:ring-rose/20' 
                  : 'border-champagne/80 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-rose font-medium mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-burgundy">
              Email Address <span className="text-rose">*</span>
            </label>
            <input
              id="inquiry-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. elena@restaurant.com"
              className={`w-full px-4 py-3 rounded-xl bg-cream/40 border text-sm text-espresso placeholder:text-muted/60 outline-none transition-all ${
                errors.email 
                  ? 'border-rose focus:ring-2 focus:ring-rose/20' 
                  : 'border-champagne/80 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-rose font-medium mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Business Name & Phone (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label htmlFor="inquiry-business" className="block text-xs font-semibold uppercase tracking-wider text-espresso/70">
              Business / Concept Name <span className="text-muted font-normal text-[10px]">(Optional)</span>
            </label>
            <input
              id="inquiry-business"
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Hearth & Oak Bistro"
              className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 text-sm text-espresso placeholder:text-muted/60 outline-none focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-espresso/70">
              Phone Number <span className="text-muted font-normal text-[10px]">(Optional)</span>
            </label>
            <input
              id="inquiry-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. (555) 234-5678"
              className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 text-sm text-espresso placeholder:text-muted/60 outline-none focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Area of Interest & Preferred Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label htmlFor="inquiry-interest" className="block text-xs font-semibold uppercase tracking-wider text-burgundy">
              Area of Interest <span className="text-rose">*</span>
            </label>
            <div className="relative">
              <select
                id="inquiry-interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 text-sm text-espresso font-medium outline-none focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10 transition-all appearance-none cursor-pointer"
              >
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.interest && (
              <p className="text-[11px] text-rose font-medium mt-1">{errors.interest}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-contact-pref" className="block text-xs font-semibold uppercase tracking-wider text-espresso/70">
              Preferred Contact Method <span className="text-muted font-normal text-[10px]">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="inquiry-contact-pref"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-champagne/80 text-sm text-espresso outline-none focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10 transition-all appearance-none cursor-pointer"
              >
                <option value="Either">Either Email or Phone</option>
                <option value="Email">Email Only</option>
                <option value="Phone">Phone Only</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Description (Required) */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-description" className="block text-xs font-semibold uppercase tracking-wider text-burgundy">
            Short Description of Your Needs or Vision <span className="text-rose">*</span>
          </label>
          <textarea
            id="inquiry-description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your restaurant concept, current timeline, location, or the operational friction you'd like to address..."
            className={`w-full px-4 py-3 rounded-xl bg-cream/40 border text-sm text-espresso placeholder:text-muted/60 outline-none transition-all resize-y ${
              errors.description 
                ? 'border-rose focus:ring-2 focus:ring-rose/20' 
                : 'border-champagne/80 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/10'
            }`}
          />
          {errors.description && (
            <p className="text-[11px] text-rose font-medium mt-1">{errors.description}</p>
          )}
        </div>

        {/* SMS Consent Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            id="inquiry-sms"
            type="checkbox"
            name="smsConsent"
            checked={formData.smsConsent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-rose accent-rose border-champagne focus:ring-rose/30 cursor-pointer"
          />
          <label htmlFor="inquiry-sms" className="text-xs text-muted leading-relaxed cursor-pointer select-none">
            I consent to receive customer care messages from Culinary Provision Group regarding my inquiry. Message & data rates may apply. Reply STOP to opt-out. View our <Link to="/privacy" className="text-burgundy underline hover:text-rose">Privacy Policy</Link> and <Link to="/terms" className="text-burgundy underline hover:text-rose">Terms of Service</Link>.
          </label>
        </div>

      </div>

      {/* Submit Button */}
      <div className="pt-2 border-t border-champagne/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted order-2 sm:order-1">
          Confidential advisory scoping. No sales pressure.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto order-1 sm:order-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <FiSend className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default UnifiedInquiryForm;
