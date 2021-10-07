import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ul>
        {props.phonetics.map((phonetic, index) => {
          function playAudio(event) {
            event.preventDefault();
            let playAudio = new Audio(phonetic.audio);
            playAudio.play();
          }

          return (
            <li key={index}>
              {' '}
              <strong>Phonetics:</strong>
              {phonetic.text}{' '}
              <button onClick={playAudio}>
                <img src="/img/audio.svg" alt="audio icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
