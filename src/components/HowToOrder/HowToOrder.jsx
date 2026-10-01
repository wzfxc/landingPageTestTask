import React, { useRef, useState, useEffect } from 'react';
import CtaButton from '../ui/CtaButton/CtaButton';
import './HowToOrder.scss';

function HowToOrder({ data }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
      }
    };

    checkScroll();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
    }
    window.addEventListener('resize', checkScroll);
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [data]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth : clientWidth,
        behavior: 'smooth'
      });
    }
  };

  if (!data) return null;

  return (
    <section className="how-to-order" aria-labelledby="how-to-order-heading">
      <div className="how-to-order__container">
        <h2 className="how-to-order__title" id="how-to-order-heading">
          {data.title}
        </h2>

        <div className="how-to-order__carousel-wrapper">
          <button 
            className="how-to-order__nav-arrow how-to-order__nav-arrow--left" 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="how-to-order__grid" ref={scrollRef}>
            {data.steps?.map((step, index) => {
              // Highlight the middle card (index 1)
              const isHighlighted = index === 1;
              
              return (
                <article 
                  key={step.id} 
                  className={`how-to-order__card ${isHighlighted ? 'how-to-order__card--highlighted' : ''}`}
                >
                  <div className="how-to-order__card-icon" aria-hidden="true">
                    <img src={step.icon} alt="" loading="lazy" />
                  </div>
                  <h3 className="how-to-order__card-title">{step.title}</h3>
                  <p className="how-to-order__card-description">{step.description}</p>
                </article>
              );
            })}
          </div>

          <button 
            className="how-to-order__nav-arrow how-to-order__nav-arrow--right" 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="how-to-order__footer">
          <CtaButton label={data.ctaLabel} showSnippet={true} />
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
