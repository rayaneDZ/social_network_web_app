import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <form className="browser-default right" id="searchbarform">
        <input id="search-input" placeholder="Search" type="text" className="browser-default search-field"  />
        <label><i className="material-icons search-icon">search</i></label> 
      </form>
    )
  }
}

export default SearchBar
