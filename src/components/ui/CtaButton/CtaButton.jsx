import React from 'react';
import './CtaButton.scss';

function CtaButton({ label, href, showSnippet = false }) {
  const buttonContent = (
    <>
      {label}
      <span className="cta-button__arrow" aria-hidden="true">→</span>
    </>
  );

  const buttonElement = href ? (
    <a href={href} className="cta-button">
      {buttonContent}
    </a>
  ) : (
    <button className="cta-button" type="button">
      {buttonContent}
    </button>
  );

  if (!showSnippet) {
    return buttonElement;
  }

  return (
    <div className="cta-button-wrapper">
      {buttonElement}
      <div className="cta-snippet" aria-label="5 out of 5 stars">
        <div className="cta-snippet__stars" aria-hidden="true">
          ★★★★★
        </div>
        <span className="cta-snippet__text">Over 500+ 5 Star Reviews Online</span>
      </div>
    </div>
  );
}

export default CtaButton;
