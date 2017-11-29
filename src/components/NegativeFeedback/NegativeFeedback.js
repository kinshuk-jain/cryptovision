import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NegativeFeedback.css';

import { showFeedbackModal } from '../../actions/feedbackAction';
import { escapeHTML } from '../../core/utils';

import Modal from '../Modal';
import data from './data.json';

class NegativeFeedback extends Component {
  static propTypes = {
    showFeedbackModal: PropTypes.func.isRequired,
    showNegativeFeedback: PropTypes.bool,
    postId: PropTypes.string,
  };

  static defaultProps = {
    showNegativeFeedback: false,
    postId: '',
  };

  constructor(props) {
    super(props);
    this.modalCloseFn = this.modalCloseFn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.comment = '';
    this.state = {
      value: 'select',
      commentLength: 0,
      invalidInput: false,
      successSubmit: false,
      invalidText: false,
    };
  }

  modalCloseFn() {
    this.setState({
      value: 'select',
      commentLength: 0,
      invalidInput: false,
      successSubmit: false,
      invalidText: false,
    });
    this.props.showFeedbackModal(false);
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
    const { successSubmit } = this.state;
    return this.props.showNegativeFeedback ? (
      <Modal
        overlay
        closeFn={this.modalCloseFn}
        showCross
        width={40}
        height={70}
      >
        <div className={s.negativeFeedback}>
          {!successSubmit ? (
            this.renderForm()
          ) : (
            <div className={s.successSubmit}>
              <i className="icon-ok_sign" /> Successfully submitted. We will try
              to address this issue as soon as possible. Thank you!
            </div>
          )}
        </div>
      </Modal>
    ) : null;
  }
}

export default withStyles(s)(
  connect(
    ({ showNegativeFeedback }) => ({
      showNegativeFeedback,
    }),
    dispatch => ({
      showFeedbackModal: payload => dispatch(showFeedbackModal(payload)),
    }),
  )(NegativeFeedback),
);
