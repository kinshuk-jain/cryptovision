import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

import Link from '../Link';
import SearchBar from '../SearchBar';

class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <Link className={s.logoInfo} target="_self" to="/">
          knowyourcrypto
        </Link>
        <SearchBar />
        <div className={s.askQuestion}>Answer Question</div>
        <div className={s.askQuestion}>Ask Question</div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
