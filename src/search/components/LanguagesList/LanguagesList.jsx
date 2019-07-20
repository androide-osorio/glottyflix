import React from 'react';

const LanguagesList = ({ id, languages, onChange }) => {
  return (
    <datalist id={id} onChange={onChange}>
      {languages.map(lang =>
        <option key={lang.iso_639_1} data-value={lang.iso_639_1} value={lang.english_name} />
      )}
    </datalist>
  );
};

export default LanguagesList;