import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { fetchConfig } from './tmdb/store';

// stylesheets and assets
import './App.css';
import SearchPage from './search/SearchPage';
import { ResultDetails } from './details';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchConfig({}))
  })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/tv-shows/:id" component={ResultDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
