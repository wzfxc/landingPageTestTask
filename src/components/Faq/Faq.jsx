import React, { useState } from 'react';
import './Faq.scss';

function Faq({ data }) {
  // Set first question to be open by default (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  if (!data) return null;

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="faq__container">
        
        {/* Left column — Accordion */}
        <div className="faq__content">
          <h2 className="faq__title" id="faq-heading">
            {data.title}
          </h2>

          <div className="faq__accordion">
            {data.questions?.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <article className="faq__item" key={item.id}>
                  <button
                    className="faq__question"
                    aria-expanded={isOpen}
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                    <span 
                      className={`faq__icon ${isOpen ? 'faq__icon--active' : ''}`} 
                      aria-hidden="true"
                    />
                  </button>
                  <div 
                    className={`faq__answer-wrapper ${isOpen ? 'faq__answer-wrapper--open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq__answer">
                      <p className="faq__answer-text">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right column — Image collage */}
        <div className="faq__collage" aria-hidden="true">
          {data.collageImages?.map((img, index) => {
            // Index 0: Top right, Index 1: Center, Index 2: Bottom left
            return (
              <div 
                className={`faq__image-wrapper faq__image-wrapper--${index + 1}`} 
                key={index}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" 
                />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

export default Faq;
