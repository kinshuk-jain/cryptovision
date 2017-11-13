import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SuggestedQues.css';

class SuggestedQues extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>Popular Questions</div>
        <div className={s.question}>question 1</div>
        <div className={s.question}>question 1</div>
        <div className={s.question}>question 1</div>
      </div>
    );
  }
}

export default withStyles(s)(SuggestedQues);
