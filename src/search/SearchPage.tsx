import React, { Component } from 'react';
import Search from './components/Search/Search';

const langs = [
  { code: 'en', name: '🇺🇸 English' },
  { code: 'es', name: '🇪🇸 Spanish' },
  { code: 'fr', name: '🇫🇷 French' },
  { code: 'de', name: '🇩🇪 German' },
]

class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage">
      <h1>The Polyglot Binge-Watcher</h1>
      <form>
        <Search
          label="I am looking for TV-Shows in "
          placeholder="Language I am learning..."
          languages={langs} />
        <input type="submit" value="Search!" />
        <input type="submit" value="Surprise me!" />
      </form>
    </div>
    );
  }
}

export default SearchPage;