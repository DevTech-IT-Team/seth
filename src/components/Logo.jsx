import { Link } from 'react-router-dom';
import cpgBurgundy from '../assets/cpg-brand-burgundy.png';
import cpgLight from '../assets/cpg-brand-light.png';
import leafGold from '../assets/leaf-gold.png';
import leafBurgundy from '../assets/leaf-burgundy.png';
import leafLight from '../assets/leaf-light.png';

/**
 * CPG Brand Logo Component — Luxury Hospitality Identity
 * Eliminates awkward redundancy, harmonizes typography and color palettes.
 */
const Logo = ({ 
  variant = 'dark', 
  size = 'md', 
  style = 'monogram', // 'monogram' | 'crest' | 'unified'
  showSubtitle = true, 
  showTagline = 'responsive', // 'always' | 'never' | 'responsive'
  className = '',
  asLink = true 
}) => {
  const isLight = variant === 'light';

  // Sizing tokens for responsive harmony
  const sizes = {
    sm: {
      mark: 'h-7 sm:h-8',
      title: 'text-[11px] sm:text-xs tracking-[0.16em]',
      subtitle: 'text-[7.5px] sm:text-[8px] tracking-[0.22em]',
      divider: 'h-5'
    },
    md: {
      mark: 'h-8 sm:h-9 md:h-10',
      title: 'text-xs sm:text-[13px] tracking-[0.18em]',
      subtitle: 'text-[8px] sm:text-[8.5px] tracking-[0.24em]',
      divider: 'h-6'
    },
    lg: {
      mark: 'h-10 sm:h-12',
      title: 'text-sm sm:text-base tracking-[0.2em]',
      subtitle: 'text-[9px] sm:text-[10px] tracking-[0.26em]',
      divider: 'h-8'
    },
  };

  const currentSize = sizes[size] || sizes.md;

  // Choose asset based on theme and style
  const activeMarkSrc = style === 'crest'
    ? (isLight ? leafLight : leafBurgundy)
    : (isLight ? cpgLight : cpgBurgundy);

  const content = (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 group select-none whitespace-nowrap shrink-0">
      
      {/* 
        The Brand Mark:
        Cohesive, high-resolution vector-quality asset.
        - 'monogram': CPG with subtle gold botanical watermark
        - 'crest': Architectural diamond leaf symbol
      */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={activeMarkSrc}
          alt="CPG - Culinary Provision Group"
          className={`${currentSize.mark} w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 drop-shadow-sm`}
        />
      </div>

      {/* Subtle Luxury Hairline Divider */}
      {showSubtitle && (
        <div 
          className={`w-[1px] ${currentSize.divider} shrink-0 transition-colors duration-300 ${
            isLight ? 'bg-gold/40 group-hover:bg-gold/70' : 'bg-gold/60 group-hover:bg-rose/60'
          }`} 
        />
      )}

      {/* Bespoke Luxury Typographic Identity */}
      {showSubtitle && (
        <div className="flex flex-col justify-center leading-none shrink-0 space-y-1">
          <div className="flex items-center gap-1.5">
            <span 
              className={`font-headline font-semibold uppercase ${currentSize.title} transition-colors duration-300 whitespace-nowrap ${
                isLight 
                  ? 'text-cream group-hover:text-gold' 
                  : 'text-burgundy group-hover:text-rose'
              }`}
            >
              Culinary Provision Group
            </span>
          </div>

          {showTagline !== 'never' && (
            <div className="flex items-center gap-1.5">
              <span 
                className={`font-body font-semibold uppercase ${currentSize.subtitle} transition-colors duration-300 whitespace-nowrap ${
                  showTagline === 'responsive' ? 'hidden sm:inline-block' : 'inline-block'
                } ${
                  isLight ? 'text-champagne/80' : 'text-[#8F6B38] group-hover:text-burgundy'
                }`}
              >
                Hospitality Advisory
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link 
        to="/" 
        className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 rounded-xl transition-opacity hover:opacity-95 shrink-0 ${className}`}
        aria-label="Culinary Provision Group - Home"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      {content}
    </div>
  );
};

export default Logo;

