import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBar.css';

import { addItemToLS, fetchAndParseLSItem } from '../../core/utils';

class SearchBar extends Component {
  state = {
    expand: false,
  };

  componentDidMount() {
    this.recentSearches = fetchAndParseLSItem('recentSearches') || [];
  }

  setRecentSearches(query) {
    /* Maximum 3 queries can be saved */

    const { recentSearches } = this;
    const queryIndex = recentSearches.indexOf(query);

    /* If query is already present in recentSearches remove it */
    if (queryIndex !== -1) {
      recentSearches.splice(queryIndex, 1);
    }

    /* If query is not present in recentSearches
       and recentSearches length is >= 3 then remove the last element */
    if (recentSearches.length >= 3 && queryIndex === -1) {
      recentSearches.pop();
    }
    recentSearches.unshift(query);

    /* Save recentSearches in localstorage */
    addItemToLS('recentSearches', JSON.stringify(recentSearches));
  }

  handleChange(e) {
    const searchString = e.target.value.trim();
    // get key pressed by user
    const key = e.which || e.keyCode;
    switch (key) {
      case 38: // up arrow
        break;
      case 40: // down arrow
        break;
      case 13: // enter key
        if (searchString !== '') {
          // TODO: retrieve search results
          // user pressed enter after selecting a value in drop down
          /* on enter click save query in localStorage */
          this.setRecentSearches(searchString);
        }
        this.search.blur();
        break;
      default:
        // user typed something into search box
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
          /* TODO: fetch search results */
        }, 200);
    }
  }

  render() {
    const { expand } = this.state;
    return (
      <div className={s.searchBar}>
        <i className="icon-search" />
        <input
          ref={el => {
            this.search = el;
          }}
          onClick={() => this.setState({ expand: true })}
          onBlur={() => this.setState({ expand: false })}
          onKeyUp={e => this.handleChange(e)}
          autoComplete="off"
          type="search"
          placeholder="search"
        />
        {expand && (
          <div className={s.suggestedSearch}>
            {this.recentSearches.length ? (
              <ul>
                <div className={s.popProd}>Recent Searches</div>
                {this.recentSearches.map((data, index) => (
                  <li key={index}>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
