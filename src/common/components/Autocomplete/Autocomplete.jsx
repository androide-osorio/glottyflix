import React from 'react';

import styles from './Autocomplete.module.css'

const Autocomplete = ({ placeholder, value, name, list, change,  children, ...rest }) => {

  return (
    <>
      <input
        className={styles.Autocomplete}
        type="search"
        name={name}
        list={list}
        placeholder={placeholder}
        value={value}
        onChange={change}
        {...rest} />
      {children}
    </>
  )
}

Autocomplete.List = ({ id, items, onSelect }) => {
  const select = event => {
    const target = event.target
    onSelect(target.dataset.value)
  }

  return (
    <datalist id={id} className={styles.Autocomplete__list} onChange={select}>
      {items.map(item =>
        <option
          key={item.id}
          data-value={item.id}
          value={item.label} />
      )}
    </datalist>
  )
}

export default Autocomplete;