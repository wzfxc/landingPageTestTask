import React from 'react';
import './InfoBanner.scss';

function InfoBanner({ data }) {
  if (!data) return null;

  return (
    <section className="info-banner" aria-labelledby="info-banner-heading">
      <div className="info-banner__container">
        <h2 className="info-banner__title" id="info-banner-heading">
          {data.title}
        </h2>

        <div className="info-banner__stats" role="list">
          {data.stats?.map((stat) => (
            <div className="info-banner__stat" key={stat.id} role="listitem">
              <div className="info-banner__icon-wrapper" aria-hidden="true">
                <img src={stat.icon} alt="" loading="lazy" />
              </div>
              <div className="info-banner__value">{stat.value}</div>
              <div className="info-banner__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoBanner;
