import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

import Modal from '../Modal';
import data from './data.json';

import { escapeHTML } from '../../core/utils';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.modalCloseFn = this.modalCloseFn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.comment = '';
    this.state = {
      showYesModal: false,
      showNoModal: false,
      value: 'select',
      commentLength: 0,
      invalidInput: false,
      successSubmit: false,
      invalidText: false,
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

  changeComment(event) {
    this.comment = event.target.value;
    this.setState({ commentLength: this.comment.length });
  }

  formValidate() {
    const desc = escapeHTML(this.comment);
    if (this.issue.selectedIndex === 0) {
      this.setState({
        invalidInput: true,
        successSubmit: false,
        invalidText: false,
      });
      return;
    } else if (
      this.issue.selectedIndex === data.issue.length &&
      this.text.value.length < 30
    ) {
      this.setState({
        invalidText: true,
        invalidInput: false,
        successSubmit: false,
      });
      return;
    }
    // TODO: submit form
    this.setState({
      successSubmit: true,
      invalidInput: false,
      invalidText: false,
    });
  }

  renderForm() {
    const { commentLength, invalidInput, invalidText } = this.state;
    return (
      <form>
        <div className={s.modalTitle}>
          Your feedback is very valuable to us. Please let us know how can can
          we fix this
        </div>
        <div className={s.label}>Issue: </div>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          ref={issue => {
            this.issue = issue;
          }}
        >
          <option value="select" disabled>
            Please select an issue
          </option>
          {data.issue.map((issue, index) => (
            <option key={index} value={issue}>
              {issue}
            </option>
          ))}
        </select>
        {invalidInput && <div className={s.error}>Please select an issue</div>}
        <div className={s.label}>Description: </div>
        <div className={s.textareaContainer}>
          <span className={s.wordCount}>{`${300 - commentLength} / 300`}</span>
          <textarea
            ref={text => {
              this.text = text;
            }}
            maxLength={300}
            className={s.feedbackRow}
            onChange={e => this.changeComment(e)}
            placeholder="Please give us a detailed description"
          />
        </div>
        {invalidText && (
          <div className={s.error}>
            Please enter the reason in minimum 30 words
          </div>
        )}
        <button
          className={s.submit}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            this.formValidate();
          }}
        >
          Submit
        </button>
      </form>
    );
  }

  render() {
    const { showNoModal, showYesModal, successSubmit } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          Did you find what you were looking for?
          <button
            className={s.feedbackBtn}
            onClick={() =>
              this.setState({ showYesModal: true, showNoModal: false })}
            // TODO: Submit success
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
            height={60}
          >
            <div className={s.negativeFeedback}>
              {!successSubmit ? (
                this.renderForm()
              ) : (
                <div>
                  Successfully submitted. We will try to address this issue as
                  soon as possible. Thank you!
                </div>
              )}
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
