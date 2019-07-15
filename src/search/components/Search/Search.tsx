import React from 'react';
import { Language } from '../../models/languages'

type SearchPropTypes = {
  label: string,
  placeholder: string,
  languages: Language[],
}

const Search = ({ label, placeholder, languages } : SearchPropTypes) => {
  return (
    <label htmlFor="queryInput">
      { label }
      <input
        type="search"
        list="languagesList"
        id="queryInput"
        placeholder={placeholder} />
      <datalist id="languagesList">
        {languages.map(lang =>
          <option key={lang.code} data-value={lang.code} value={lang.name} />
        )}
      </datalist>
    </label>
  );
};

export default Search;