import React, { useState } from 'react';
import axios from 'axios';

import Results from './Results';

import './Dictionary.css';

export default function Dictionary(props) {
  const [query, setQuery] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(res) {
    setResults(res.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="search-box">
          <h1 className="search-box--title">Dictionary</h1>
          <h2 className="search-box--text">
            What word do you want to look up?
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="search-box--form">
              <input
                type="search"
                onChange={handleQuery}
                className="search-box--input"
                placeholder="Type your word"
                defaultValue={props.defaultKeyword}
              />
              <button type="submit" className="search-box--button">
                <img src="/img/search-icon.svg" alt="search icon" srcset="" />
              </button>
            </div>
          </form>
          <div className="search-box--hints">
            suggested words: sunset, wine, cats, plants...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
