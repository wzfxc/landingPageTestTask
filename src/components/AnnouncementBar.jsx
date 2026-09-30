import React from 'react';

function AnnouncementBar({ data }) {
  return (
    <div className="announcement-bar" role="banner">
      <div className="announcement-bar__container">
        <p className="announcement-bar__text">{data.message}</p>
      </div>
    </div>
  );
}

export default AnnouncementBar;
