import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="meaning--partOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="meaning--results" key={index}>
            <div className="meaning--definition">
              • {definition.definition}{' '}
            </div>
            <div className="meaning--example">{definition.example}</div>
            <div className="meaning--synonyms">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
