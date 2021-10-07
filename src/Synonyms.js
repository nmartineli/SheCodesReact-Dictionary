import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="synonyms--list">
          {props.synonyms.map((synonym, index) => {
            return (
              <li className="synonyms--item" key={index}>
                {' '}
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
