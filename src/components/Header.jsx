import React from 'react';

function Header({ data }) {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" aria-label={data.logoAlt}>
          <img
            className="header__logo-image"
            src={data.logoSrc}
            alt={data.logoAlt}
            width="140"
            height="32"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
