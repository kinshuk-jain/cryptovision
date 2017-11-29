import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

import Modal from '../Modal';
import { showFeedbackModal } from '../../actions/feedbackAction';

class Feedback extends React.Component {
  static propTypes = {
    showFeedbackModal: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.modalCloseFn = this.modalCloseFn.bind(this);
    this.state = {
      showYesModal: false,
    };
  }

  modalCloseFn() {
    this.setState({
      showYesModal: false,
    });
  }

  render() {
    const { showYesModal } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          Did you find what you were looking for?
          <button
            className={s.feedbackBtn}
            onClick={() => this.setState({ showYesModal: true })}
            // TODO: Submit success
          >
            Yes
          </button>
          <button
            className={s.feedbackBtn}
            onClick={() => this.props.showFeedbackModal(true)}
          >
            No
          </button>
        </div>
        {showYesModal && (
          <Modal
            overlay
            closeFn={this.modalCloseFn}
            showCross
            width={40}
            height={40}
          >
            <div className={s.positiveFeedback}>
              <i className="icon-ok_sign" /> Thank you for your feedback!
              It&apos;s very valuable to us
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default withStyles(s)(
  connect(null, dispatch => ({
    showFeedbackModal: payload => dispatch(showFeedbackModal(payload)),
  }))(Feedback),
);
