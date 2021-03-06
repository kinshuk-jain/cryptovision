import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TopBar.css';
import { closeTopBar } from '../../actions/topBarActions';

class TopBar extends React.Component {
  static propTypes = {
    hideTopBar: PropTypes.bool.isRequired,
    closeTopBar: PropTypes.func.isRequired,
  };

  render() {
    const { hideTopBar } = this.props;
    return !hideTopBar ? (
      <div className={s.container}>
        For pages with infinite scrolling, what we do will go here along with
        any notifications we might need. For others we will have a footer with
        About section
        <div className={s.cross} onClick={() => this.props.closeTopBar(true)}>
          <i className="icon-x" />
        </div>
      </div>
    ) : null;
  }
}

export default withStyles(s)(
  connect(
    ({ hideTopBar }) => ({
      hideTopBar,
    }),
    dispatch => ({
      closeTopBar: payload => dispatch(closeTopBar(payload)),
    }),
  )(TopBar),
);
