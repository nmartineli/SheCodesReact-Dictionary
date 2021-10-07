import React from 'react';
import Meaning from './Meaning';
import Word from './Word';
import './Results.css';

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="results--word">
          <Word
            word={props.results.word}
            phonetics={props.results.phonetics[0]}
          />
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section className="results--meanings" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
