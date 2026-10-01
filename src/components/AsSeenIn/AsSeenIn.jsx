import React, { useState, useRef } from 'react';
import './AsSeenIn.scss';

function AsSeenIn({ data }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      
      if (scrollWidth > clientWidth) {
        const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
        let newIndex = Math.round(scrollPercentage * 2);
        if (isNaN(newIndex)) newIndex = 0;
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="as-seen-in" aria-label="Featured in media">
      <div className="as-seen-in__container">
        <p className="as-seen-in__label">{data.label}</p>
        
        <div className="as-seen-in__slider-wrapper">
          <ul 
            className="as-seen-in__logos" 
            role="list"
            ref={scrollRef}
            onScroll={handleScroll}
          >
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

        <div className="as-seen-in__pagination" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <span 
              key={index} 
              className={`as-seen-in__dot ${index === activeIndex ? 'as-seen-in__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AsSeenIn;
