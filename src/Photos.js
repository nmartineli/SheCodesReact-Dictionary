import React from 'react';
import './Photos.css';

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section className="photos-box">
          {props.photos.map((photo, index) => {
            return (
              <a
                href={photo.src.original}
                target="_blank"
                key={index}
                className="photos-box--item-link"
                rel="noreferrer"
              >
                <img
                  className="photos-box--item-img"
                  src={photo.src.landscape}
                  alt=""
                />
              </a>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
