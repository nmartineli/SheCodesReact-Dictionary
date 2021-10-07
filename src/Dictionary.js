import React, { useState } from 'react';
import axios from 'axios';

import Results from './Results';
import Photos from './Photos';

import './Dictionary.css';

export default function Dictionary(props) {
  const [query, setQuery] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState();

  function handleDictionaryResponse(res) {
    setResults(res.data[0]);
  }

  function handlePexelsResponse(res) {
    setPhotos(res.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      '563492ad6f917000010000018e21773e815f4f9eb48b3d99d6017ed6';
    const headers = {
      headers: { Authorization: `Bearer ${pexelsApiKey}` },
    };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=9`;
    axios.get(pexelsApiUrl, headers).then(handlePexelsResponse);
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
                <img src="/img/search-icon.svg" alt="search icon" />
              </button>
            </div>
          </form>
          <div className="search-box--hints">
            suggested words: sunset, wine, cats, plants...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
