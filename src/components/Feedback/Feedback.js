import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

import Modal from '../Modal';
import data from './data.json';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.modalCloseFn = this.modalCloseFn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showYesModal: false,
      showNoModal: false,
      value: 'select',
    };
  }

  modalCloseFn() {
    this.setState({
      showYesModal: false,
      showNoModal: false,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
          <Modal
            overlay
            closeFn={this.modalCloseFn}
            showCross
            width={40}
            height={40}
          >
            <div className={s.negativeFeedback}>
              <form>
                <div>
                  Your feedback is very valuable to us. Please let us know how
                  can can we fix this
                </div>
                <div>Issue: </div>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="select">Please select an issue</option>
                  {data.issue.map((issue, index) => (
                    <option key={index} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
                <textarea />
              </form>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
