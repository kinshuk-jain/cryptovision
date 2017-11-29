import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MenuBar.css';

class MenuBar extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <i className="icon-bars" />
        <ul className={s.menu}>
          <li className={s.categoryTitle}>
            <i className="icon-bars" />
            <span> Categories</span>
          </li>
          <li>ICO</li>
          <li>ICO</li>
          <li>ICO</li>
          <li>ICO</li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(MenuBar);
