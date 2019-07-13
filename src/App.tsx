import React, { useState, useEffect } from 'react';

import { getConfig } from './tmdb/configuration';

// stylesheets and assets
import './App.css';
import logo from './logo.svg';

const  { REACT_APP_TMDB_API_KEY } = process.env

function App() {
  const [, setConfig] = useState({});

  useEffect(() => {
    const fetchConfig = async () => {
      const result = await getConfig(REACT_APP_TMDB_API_KEY as string);
      setConfig(result.data);
    };

    fetchConfig();
  }, []);

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
      </header>
    </div>
  );
}

export default App;
