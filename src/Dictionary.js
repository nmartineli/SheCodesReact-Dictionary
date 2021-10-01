import React, { useState } from 'react';

import './Dictionary.css';

export default function Dictionary() {
  const [query, setQuery] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
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
