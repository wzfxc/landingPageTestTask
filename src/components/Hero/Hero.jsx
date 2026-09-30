import React from 'react';
import './Hero.scss';

function Hero({ data }) {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      <div className="hero__container">
        {/* Left content column */}
        <div className="hero__content">
          <h1 className="hero__title" id="hero-headline">
            {data.headline}
          </h1>

          <ul className="hero__features" role="list">
            {data.features.map((feature) => (
              <li className="hero__feature" key={feature.id}>
                <span className="hero__feature-icon" aria-hidden="true">
                  <img src={feature.icon} alt="" width="32" height="32" />
                </span>
                <span className="hero__feature-text">{feature.text}</span>
              </li>
            ))}
          </ul>

          <a href="#customize" className="hero__cta">
            <span className="hero__cta-label">{data.ctaLabel}</span>
            <span className="hero__cta-arrow" aria-hidden="true">→</span>
          </a>

          {/* Testimonial card */}
          <div className="hero__testimonial">
            <div className="hero__testimonial-header">
              <img
                className="hero__testimonial-avatar"
                src={data.testimonial.avatar}
                alt={`Photo of ${data.testimonial.name}`}
                width="48"
                height="48"
                loading="lazy"
              />
              <div className="hero__testimonial-meta">
                <span className="hero__testimonial-name">
                  {data.testimonial.name}
                </span>
                <div className="hero__testimonial-rating">
                  {Array.from({ length: data.testimonial.rating }).map(
                    (_, i) => (
                      <span
                        className="hero__testimonial-star"
                        key={i}
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    )
                  )}
                </div>
              </div>
              <span className="hero__testimonial-badge">
                {data.testimonial.ratingLabel}
              </span>
            </div>
            <blockquote className="hero__testimonial-quote">
              <p>{data.testimonial.quote}</p>
            </blockquote>
          </div>
        </div>

        {/* Right image gallery */}
        <div className="hero__gallery">
          {data.images.map((img, index) => (
            <div
              className={`hero__gallery-item hero__gallery-item--${index + 1}`}
              key={index}
            >
              <img
                className="hero__gallery-image"
                src={img.src}
                alt={img.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
