import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TopBar.css';
import { closeTopBar } from '../../actions/topBarActions';

class TopBar extends React.Component {
  static propTypes = {
    hideTopBar: React.PropTypes.bool.isRequired,
    closeTopBar: React.PropTypes.func.isRequired,
  };

  render() {
    const { hideTopBar } = this.props;
    return !hideTopBar ? (
      <div className={s.container}>
        Notification type message if any
        <div className={s.cross} onClick={() => this.props.closeTopBar(true)}>
          x
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
