import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoryNav.css';

class CategoryNav extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>Categories</div>
      </div>
    );
  }
}

export default withStyles(s)(CategoryNav);
