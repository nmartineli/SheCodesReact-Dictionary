import React from 'react';
import './Word.css';

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    let playAudio = new Audio(props.phonetics.audio);
    playAudio.play();
  }
  return (
    <div className="Word">
      <div className="word-result">
        <h3 className="word">{props.word}</h3>

        <img
          src="/img/audio.svg"
          alt="audio icon"
          className="word--audio-icon"
          onClick={playAudio}
        />
      </div>
      <h4 className="word--phonetic">/ {props.phonetics.text} /</h4>
    </div>
  );
}
