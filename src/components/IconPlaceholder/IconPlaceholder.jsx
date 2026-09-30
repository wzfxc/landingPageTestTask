import React from 'react';
import './IconPlaceholder.scss';

/**
 * Inline SVG icon placeholders — small, semantic icons that
 * approximate the icons visible in the Figma design.
 * Replace with actual SVG assets or an icon library later.
 */
const icons = {
  sparkle: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leaf: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.16 20C12.79 20 17 15.5 20 10C20 10 20 4 20 4C20 4 17 4 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15C12.37 13.5 14.65 10.07 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  wave: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 12 5 6 8.5 6C12 6 12 18 15.5 18C19 18 22 12 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17C2 17 5 11 8.5 11C12 11 12 23 15.5 23C19 23 22 17 22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2C14.5 4.73 16 8.24 16 12C16 15.76 14.5 19.27 12 22C9.5 19.27 8 15.76 8 12C8 8.24 9.5 4.73 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61C20.33 4.1 19.72 3.71 19.05 3.44C18.38 3.18 17.67 3.04 16.95 3.04C16.23 3.04 15.52 3.18 14.85 3.44C14.18 3.71 13.57 4.1 13.06 4.61L12 5.67L10.94 4.61C9.9 3.57 8.5 2.99 7.05 2.99C5.6 2.99 4.2 3.57 3.16 4.61C2.12 5.65 1.54 7.05 1.54 8.5C1.54 9.95 2.12 11.35 3.16 12.39L12 21.23L20.84 12.39C21.35 11.88 21.75 11.27 22.01 10.6C22.27 9.93 22.41 9.22 22.41 8.5C22.41 7.78 22.27 7.07 22.01 6.4C21.75 5.73 21.35 5.12 20.84 4.61Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  home: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  comfort: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8C4.67 8 7.33 6 10 6C12.67 6 15.33 8 18 8C20.67 8 22 7 22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 13C4.67 13 7.33 11 10 11C12.67 11 15.33 13 18 13C20.67 13 22 12 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 18C4.67 18 7.33 16 10 16C12.67 16 15.33 18 18 18C20.67 18 22 17 22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

function IconPlaceholder({ type }) {
  return (
    <span className="icon-placeholder">
      {icons[type] || icons.sparkle}
    </span>
  );
}

export default IconPlaceholder;
