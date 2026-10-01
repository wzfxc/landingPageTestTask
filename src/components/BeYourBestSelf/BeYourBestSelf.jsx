import React from 'react';
import CtaButton from '../ui/CtaButton/CtaButton';
import './BeYourBestSelf.scss';

function BeYourBestSelf({ data }) {
  if (!data) return null;

  return (
    <section className="be-your-best-self" aria-labelledby="best-self-heading">
      <div className="be-your-best-self__container">

        <h2 className="be-your-best-self__title be-your-best-self__title--mobile" id="best-self-heading">
          {data.headline}
        </h2>

        {/* Left column — Image collage */}
        <div className="be-your-best-self__collage" aria-hidden="true">
          {/* Top Left Image (Now uses index 1) */}
          {data.images?.[1] && (
            <div className="be-your-best-self__image-wrapper be-your-best-self__image-wrapper--1">
              <img
                src={data.images[1].src}
                alt={data.images[1].alt}
                loading="lazy"
              />
            </div>
          )}

          {data.images?.[0] && (
            <div className="be-your-best-self__image-wrapper be-your-best-self__image-wrapper--2">
              <img
                src={data.images[0].src}
                alt={data.images[0].alt}
                loading="lazy"
              />
            </div>
          )}

          {/* Bottom Right Image */}
          {data.images?.[2] && (
            <div className="be-your-best-self__image-wrapper be-your-best-self__image-wrapper--3">
              <img
                src={data.images[2].src}
                alt={data.images[2].alt}
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Right column — Content */}
        <div className="be-your-best-self__content">
          <h2 className="be-your-best-self__title be-your-best-self__title--desktop" aria-hidden="true">
            {data.headline}
          </h2>

          <div className="be-your-best-self__paragraphs">
            {data.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="be-your-best-self__cta">
            <CtaButton label={data.ctaLabel} />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BeYourBestSelf;
