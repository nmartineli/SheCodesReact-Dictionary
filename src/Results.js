import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3 className="results--word">{props.results.word}</h3>
        <Phonetics phonetics={props.results.phonetics} />
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
