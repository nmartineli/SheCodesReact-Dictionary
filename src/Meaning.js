import React from 'react';
import Synonyms from './Synonyms';
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
              <strong>Definition:</strong> {definition.definition} <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
