import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchConfig } from './tmdb/store';

// stylesheets and assets
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchConfig({}))
  })

  return (
    <div className="App">
      <h1>The Polyglot Binge-Watcher</h1>
      <form>
        <label htmlFor="queryInput">
          I am looking for TV-Shows in &nbsp;
          <input
            type="search"
            list="languagesList"
            id="queryInput"
            placeholder="Language I am learning..." />
          <datalist id="languagesList">
            <option data-value="en">English</option>
            <option data-value="es">Spanish</option>
            <option data-value="fr">French</option>
            <option data-value="de">German</option>
          </datalist>
        </label>
        <input type="submit" value="Search!" />
        <input type="submit" value="Surprise me!" />
      </form>
    </div>
  )
}

export default App;
