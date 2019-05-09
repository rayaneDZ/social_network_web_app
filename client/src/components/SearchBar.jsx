import React, { Component } from 'react';
import './css/SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div id="searchbarContainer">
      <form className="browser-default right" id="searchbarform">
        <input id="search-input" placeholder="Search" type="text" className="browser-default search-field"  />
      </form>
      </div>
    )
  }
}

export default SearchBar
