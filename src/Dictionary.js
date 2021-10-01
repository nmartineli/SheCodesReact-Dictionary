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
      <h2>Search for a word</h2>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleQuery} />
      </form>
      <Results results={results} />
    </div>
  );
}
