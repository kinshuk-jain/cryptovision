import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoryNav.css';

import { showNavBar } from '../../actions/categoryNavActions';

class CategoryNav extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
    showNavBar: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showSidebar: true,
  };

  render() {
    return this.props.showSidebar ? (
      <div className={s.container}>
        <div className={s.title}>Categories</div>
        <div className={s.caret} onClick={() => this.props.showNavBar(false)}>LL</div>
        <ul className={s.catList}>
          <li>Bitcoin</li>
          <li>Bitcoin Cash</li>
          <li>Bitcoin Gold</li>
          <li>Ethereum</li>
          <li>LiteCoin</li>
          <li>Ripple</li>
          <li>OmiseGo</li>
        </ul>
      </div>
    ) : (
      <div className={s.container}>
        <div className={s.caret} onClick={() => this.props.showNavBar(true)}>LL</div>
        <ul className={s.smallList}>
          <li>B</li>
          <li>B</li>
          <li>B</li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(
  connect(
    ({ showSidebar }) => ({
      showSidebar,
    }),
    dispatch => ({
      showNavBar: (payload = true) => dispatch(showNavBar(payload)),
    }),
  )(CategoryNav),
);
