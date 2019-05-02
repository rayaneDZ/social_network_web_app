import React, { Component } from 'react';
import './search.css';

class SearchBar extends Component {
  render() {
    return (
      <form className="browser-default right" id="searchbarform">
        <input id="search-input" placeholder="Search" type="text" className="browser-default search-field" autocomplete="off" />
        <label for="search-input"><i className="material-icons search-icon">search</i></label> 
      </form>
    )
  }
}

export default SearchBar
