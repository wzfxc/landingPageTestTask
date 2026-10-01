import React, { useRef, useState, useEffect } from 'react';
import CtaButton from '../ui/CtaButton/CtaButton';
import './Reviews.scss';

function Reviews({ data }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / clientWidth);
        setActiveIndex(index);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    scrollTo(Math.max(activeIndex - 1, 0));
  };

  const scrollRight = () => {
    const total = data?.reviewCards?.length || 0;
    scrollTo(Math.min(activeIndex + 1, total - 1));
  };

  if (!data) return null;

  return (
    <section className="reviews" aria-labelledby="reviews-heading">
      <div className="reviews__header">
        <h2 className="reviews__title" id="reviews-heading">
          {data.title}
        </h2>
        <p className="reviews__description">{data.description}</p>
      </div>

      <div className="reviews__gallery" aria-hidden="true">
        <img 
          className="reviews__gallery-image" 
          src={data.galleryImage} 
          alt="Collage of customers enjoying our products" 
          loading="lazy" 
        />
      </div>

      <div className="reviews__cards-container">
        <button 
          className="reviews__arrow reviews__arrow--left" 
          aria-label="Previous reviews"
          onClick={scrollLeft}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <div className="reviews__cards-scroll" role="list" ref={scrollRef}>
          {data.reviewCards?.map((review) => (
            <article className="reviews__card" key={review.id} role="listitem">
              <div className="reviews__card-header">
                <img 
                  className="reviews__card-avatar" 
                  src={review.avatar} 
                  alt="" 
                  loading="lazy" 
                />
                <div className="reviews__card-meta">
                  <div className="reviews__card-rating" aria-hidden="true">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="reviews__card-name">{review.name}</span>
                </div>
              </div>
              <p className="reviews__card-text">{review.text}</p>
            </article>
          ))}
        </div>

        <button 
          className="reviews__arrow reviews__arrow--right" 
          aria-label="Next reviews"
          onClick={scrollRight}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      {/* Pagination dots (mobile only) */}
      <div className="reviews__pagination">
        {data.reviewCards?.map((_, index) => (
          <button 
            key={index} 
            className={`reviews__dot ${activeIndex === index ? 'reviews__dot--active' : ''}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="reviews__footer">
        <CtaButton label={data.ctaLabel} showSnippet={true} />
      </div>
    </section>
  );
}

export default Reviews;
