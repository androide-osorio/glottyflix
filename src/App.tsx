import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchConfig } from './tmdb/store';

// stylesheets and assets
import './App.css';
import logo from './logo.svg';

function App() {
  const dispatch = useDispatch()
  const fetchConfigFromApi = useCallback(
    () => dispatch(fetchConfig({})),
    [dispatch]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fetchConfigFromApi}>fetch Config</button>
      </header>
    </div>
  );
}

export default App;
