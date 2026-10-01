import React from 'react';
import CtaButton from '../ui/CtaButton/CtaButton';
import './FinalCta.scss';

function FinalCta({ data }) {
  if (!data) return null;

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta__container">
        
        {/* Top Text */}
        <header className="final-cta__header">
          <h2 className="final-cta__title" id="final-cta-heading">
            {data.title}
          </h2>
          <p className="final-cta__description">{data.description}</p>
        </header>

        {/* Collage */}
        <div className="final-cta__collage" aria-hidden="true">
          {data.images?.slice(0, 3).map((img, index) => (
            <div 
              className={`final-cta__image-wrapper final-cta__image-wrapper--${index + 1}`} 
              key={index}
            >
              <img 
                className="final-cta__image"
                src={img.src} 
                alt={img.alt} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>

        {/* Action Area */}
        <div className="final-cta__action">
          <CtaButton label={data.ctaLabel} showSnippet={true} />
          
          <div className="final-cta__payments">
            <span className="final-cta__payments-text">
              {data.paymentMethods?.text}
            </span>
            {data.paymentMethods?.image && (
              <div className="final-cta__payments-image-wrapper" aria-label="Accepted payment methods">
                <img src={data.paymentMethods.image} alt="Payment methods" loading="lazy" />
              </div>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="final-cta__trust">
          {data.trustBadges?.map((badge) => (
            <div className="final-cta__trust-badge" key={badge.id}>
              <div className="final-cta__trust-icon" aria-hidden="true">
                <img src={badge.icon} alt="" loading="lazy" />
              </div>
              <span className="final-cta__trust-text">{badge.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FinalCta;
