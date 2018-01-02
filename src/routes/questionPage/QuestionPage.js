import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuestionPage.css';

import Tags from './components/Tags';
import Comments from './components/Comments';
import Feedback from '../../components/Feedback';
import Footer from '../../components/Footer';
import SuggestedQues from '../../components/SuggestedQues';
import NegativeFeedback from '../../components/NegativeFeedback';

// TODO: add a comment with escape html

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
          <div className={s.options}>
            <ul className={s.quesStats}>
              <li>123 Anwers</li>
              <li>13.4k Upvotes</li>
              <li>456 Downvotes</li>
            </ul>
            <ul className={s.shareOptions}>
              <li>
                <i className="icon-facebook-official" />
              </li>
              <li>
                <i className="icon-twitter-square" />
              </li>
              <li>
                <i className="icon-flag" />
              </li>
            </ul>
          </div>
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
          <Comments />
          <div className={s.answerContainer}>
            <hr />
            <div className={s.answerCaption}>
              Written by abcd@gmail.com on 23rd June, 2017
            </div>
            <ul className={s.shareOptions}>
              <li>
                <i className="icon-facebook-official" />
              </li>
              <li>
                <i className="icon-twitter-square" />
              </li>
              <li>
                <i className="icon-flag" />
              </li>
            </ul>
            <div className={s.answerTitle}>It is a cryptocurrency</div>
            <div className={s.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <Comments />
          </div>
          <div>Answer Question</div>
        </div>
        <div className={s.rightContainer}>
          <SuggestedQues />
          <div className={s.topPadding}>
            <SuggestedQues title="Related Questions" />
          </div>
        </div>
        <NegativeFeedback />
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(QuestionPage);
