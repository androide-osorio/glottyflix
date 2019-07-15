import React from 'react';
import { Language } from '../../models/languages'

type SearchPropTypes = {
  label: string,
  placeholder: string,
  languages: Language[],
  onChange: any,
  onSubmit: any,
}

const Search = ({ label, placeholder, languages, onChange, onSubmit } : SearchPropTypes) => {
  return (
    <form>
      <label htmlFor="queryInput">
        { label }
        <input
          type="search"
          name="language"
          list="languagesList"
          id="queryInput"
          placeholder={placeholder}
          onChange={onChange} />
        <datalist id="languagesList" onChange={onChange}>
          {languages.map(lang =>
            <option key={lang.code} data-value={lang.code} value={lang.name} />
          )}
        </datalist>
      </label>
      <input type="submit" value="Search!" onClick={onSubmit} />
      <input type="submit" value="Surprise me!" onClick={onSubmit} />
    </form>
  );
};

export default Search;