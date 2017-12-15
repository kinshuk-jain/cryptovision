import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuestionPage.css';

import Tags from './components/Tags';
import Feedback from '../../components/Feedback';
import Footer from '../../components/Footer';
import SuggestedQues from '../../components/SuggestedQues';

class QuestionPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.quesContainer}>
        <div className={s.leftContainer}>
          <Tags tags={['bitcoin', 'crypto', 'ico']} />
          <h4>{this.props.title}</h4>
          <hr />
          <p>
            description: lorum ipsum textLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <div className={s.comments}>
            <div className={s.userComment}>Comment1</div>
            <div className={s.userComment}>Comment2</div>
            <div className={s.userComment}>Comment3</div>
            <div className={s.userComment}>Comment4</div>
            <div className={s.userComment}>Comment5</div>
          </div>
          <div className={s.addComment}>Add a comment</div>
          <div>Answers</div>
          <div>Answer Question</div>
        </div>
        <div className={s.rightContainer}>
          <SuggestedQues />
        </div>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(QuestionPage);
