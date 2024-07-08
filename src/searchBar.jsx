import { useState } from 'react';
import icon from './images/search.png';

import './styles.css';
function capitalize(sentence) {
  const words = sentence.split(/[\s,]+/);

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}
function SearchBar({ getSearchText }) {
  var [searchText, setST] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof getSearchText);
    if(!searchText) alert('Enter any city');
    else{
    getSearchText(searchText);
    setST('');
    }
  };
  const handleChange = (e) => {
    var s = e.target.value;
    setST(capitalize(s));
  };
  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <input
          class="textbar"
          onChange={handleChange}
          placeholder="search any city"
          value={searchText}
          type="text"
        />
      </form>
      <img
        className="searchIcon"
        src={icon}
        alt="not found"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default SearchBar;
