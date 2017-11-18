import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className={s.searchBar}>
        <i className="icon-search" />
        <input autoComplete="off" type="search" placeholder="search" />
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
