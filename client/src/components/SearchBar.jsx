import React, { Component } from 'react';
import axios from 'axios';
import './css/SearchBar.css';

class SearchBar extends Component {
  handleChange = e => {
    console.log(e.target.value);
    axios.get(`/api/user/search/${e.target.value}`).then(response => {
      console.log(response.data);
    }).catch(err => {
        console.log(err)
    })
  }
  render() {
    return (
      <div id="searchbarContainer">
      <form className="browser-default right" id="searchbarform">
        <input id="search-input" placeholder="Search for users" type="text" className="browser-default search-field" onChange={e => this.handleChange(e)}/>
      </form>
      </div>
    )
  }
}

export default SearchBar
