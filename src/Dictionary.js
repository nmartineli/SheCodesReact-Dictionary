import React, { useState } from 'react';
import axios from 'axios';

import Results from './Results';

import './Dictionary.css';

export default function Dictionary() {
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(res) {
    setResults(res.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="dictionary--title">Dictionary</h1>
      <h2 className="dictionary--text">Search for a word</h2>
      <form onSubmit={search} className="search-form">
        <input
          type="search"
          autoFocus={true}
          onChange={handleQuery}
          className="search-form--input"
          placeholder="Type your word"
        />
        <button type="submit" className="search-form--button">
          <img src="/img/search-icon.svg" alt="search icon" srcset="" />
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
