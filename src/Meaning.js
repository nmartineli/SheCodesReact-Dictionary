import React from 'react';
import './Meaning.css';

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="meaning--partOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition} <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
