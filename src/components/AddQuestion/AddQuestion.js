import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Addquestion.css';

import { showAdditionalQuestion } from '../../actions/additionalQuestion';

import Modal from '../Modal';

class AddQuestion extends Component {
  static propTypes = {
    showAddQuestion: PropTypes.bool,
    showAdditionalQuestion: PropTypes.func,
  };

  static defaultProps = {
    showAddQuestion: false,
    showAdditionalQuestion: () => {},
  };

  closeModalFunction() {
    this.props.showAdditionalQuestion(false);
  }

  formValidate() {
    // check validity of inputs
  }

  render() {
    return this.props.showAddQuestion ? (
      <Modal
        showCross
        closeFn={() => this.closeModalFunction()}
        height={60}
        width={50}
      >
        <input
          type="text"
          placeholder="Question title"
          className={s.quesTitle}
        />
        <input
          type="text"
          placeholder="add comma separated list of tags such as (bitcoin, ico)"
          className={s.quesCategory}
        />
        <textarea placeholder="Question description" className={s.quesDesc} />
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
      </Modal>
    ) : null;
  }
}

export default withStyles(s)(
  connect(
    ({ showAddQuestion }) => ({
      showAddQuestion,
    }),
    dispatch => ({
      showAdditionalQuestion: payload =>
        dispatch(showAdditionalQuestion(payload)),
    }),
  )(AddQuestion),
);
