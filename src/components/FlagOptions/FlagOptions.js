import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FlagOptions.css';

import { showFeedbackModal } from '../../actions/feedbackAction';

class FlagOptions extends React.Component {
  static propTypes = {
    showFeedbackModal: PropTypes.func.isRequired,
  };

  state = {
    showHover: false,
  };

  render() {
    const { showHover } = this.state;
    return (
      <div
        onMouseOver={() => {
          clearTimeout(this.timeout);
          this.setState({ showHover: true });
        }}
        onMouseOut={() => {
          this.timeout = setTimeout(() => {
            this.setState({ showHover: false });
          }, 300);
        }}
      >
        <i className="icon-ellipsis_vertical" />
        {showHover ? (
          <ul className={s.flagPin}>
            <li onClick={() => this.props.showFeedbackModal(true)}>
              <i className="icon-flag" />Flag
            </li>
            <li>
              <i className="icon-pin" /> Pin
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default withStyles(s)(
  connect(null, dispatch => ({
    showFeedbackModal: payload => dispatch(showFeedbackModal(payload)),
  }))(FlagOptions),
);
