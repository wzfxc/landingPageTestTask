import React from 'react';
import './AnnouncementBar.scss';

function AnnouncementBar({ data }) {
  const parts = data.message.split(/\s+\|\s+/);

  return (
    <div className="announcement-bar" role="banner">
      <div className="announcement-bar__container">
        <p className="announcement-bar__text">
          {parts.length === 3 ? (
            <>
              <span className="announcement-bar__desktop-only">{parts[0]} &nbsp;|&nbsp; </span>
              <span>{parts[1]}</span>
              <span className="announcement-bar__desktop-only"> &nbsp;|&nbsp; {parts[2]}</span>
            </>
          ) : (
            data.message
          )}
        </p>
      </div>
    </div>
  );
}

export default AnnouncementBar;
