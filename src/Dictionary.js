import React, { useState } from 'react';
import axios from 'axios';

import './Dictionary.css';

export default function Dictionary() {
  const [query, setQuery] = useState(null);

  function handleResponse(res) {
    console.log(res.data);
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
    </div>
  );
}
