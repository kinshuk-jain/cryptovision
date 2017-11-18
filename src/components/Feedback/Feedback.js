import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

import Modal from '../Modal';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.modalCloseFn = this.modalCloseFn.bind(this);
    this.state = {
      showYesModal: false,
      showNoModal: false,
    };
  }

  modalCloseFn() {
    this.setState({
      showYesModal: false,
      showNoModal: false,
    });
  }

  render() {
    const { showNoModal, showYesModal } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          Did you find what you were looking for?
          <button
            className={s.feedbackBtn}
            onClick={() =>
              this.setState({ showYesModal: true, showNoModal: false })}
          >
            Yes
          </button>
          <button
            className={s.feedbackBtn}
            onClick={() =>
              this.setState({ showNoModal: true, showYesModal: false })}
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
              Thank you for your feedback! It&apos;s very valuable to us
            </div>
          </Modal>
        )}
        {showNoModal && (
          <Modal overlay closeFn={this.modalCloseFn} showCross>
            <div>
              Your feedback is very valuable to us. Please help us fix this
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
