import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotFound.css';

import Footer from '../../components/Footer';
import SuggestedQues from '../../components/SuggestedQues';
import Link from '../../components/Link';

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.containerLeft}>
          <h1>{this.props.title}</h1>
          <p>Sorry, could not find what you were looking for</p>
          <p>
            Please check if you have misspelt any word or search again with a
            different keyword.
          </p>
          <Link to="/">Go To Home</Link>
        </div>
        <div className={s.containerRight}>
          <SuggestedQues />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
