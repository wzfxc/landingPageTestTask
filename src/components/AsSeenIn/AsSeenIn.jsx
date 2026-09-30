import React from 'react';
import './AsSeenIn.scss';

function AsSeenIn({ data }) {
  return (
    <section className="as-seen-in" aria-label="Featured in media">
      <div className="as-seen-in__container">
        <p className="as-seen-in__label">{data.label}</p>
        <ul className="as-seen-in__logos" role="list">
          {data.logos.map((logo) => (
            <li className="as-seen-in__logo-item" key={logo.id}>
              <img
                className="as-seen-in__logo-image"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AsSeenIn;
