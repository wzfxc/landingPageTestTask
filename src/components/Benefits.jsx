import React, { useState, useCallback } from 'react';

function Benefits({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = data.carousel.images.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const handleThumbnailClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const activeImage = data.carousel.images[activeIndex];

  return (
    <section className="benefits" aria-labelledby="benefits-headline">
      <div className="benefits__container">
        {/* Left column — benefit list */}
        <div className="benefits__content">
          <h2 className="benefits__title" id="benefits-headline">
            {data.headline}
          </h2>

          <ul className="benefits__list" role="list">
            {data.items.map((item) => (
              <li className="benefits__item" key={item.id}>
                <span className="benefits__item-icon" aria-hidden="true">
                  <img src={item.icon} alt="" width="48" height="48" />
                </span>
                <div className="benefits__item-body">
                  <h3 className="benefits__item-title">{item.title}</h3>
                  <p className="benefits__item-description">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — product carousel */}
        <div className="benefits__carousel" aria-roledescription="carousel" aria-label="Product images">
          <div className="benefits__carousel-viewport">
            <img
              className="benefits__carousel-image"
              src={activeImage.src}
              alt={activeImage.alt}
              key={activeImage.id}
            />

            <button
              className="benefits__carousel-btn benefits__carousel-btn--prev"
              onClick={handlePrev}
              aria-label="Previous image"
              type="button"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              className="benefits__carousel-btn benefits__carousel-btn--next"
              onClick={handleNext}
              aria-label="Next image"
              type="button"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="benefits__carousel-thumbnails">
              {data.carousel.images.map((img, index) => (
                <button
                  className={`benefits__carousel-thumb ${
                    index === activeIndex
                      ? 'benefits__carousel-thumb--active'
                      : ''
                  }`}
                  key={img.id}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`View ${img.caption}`}
                  type="button"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="benefits__carousel-footer">
            <p className="benefits__carousel-caption">{activeImage.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
