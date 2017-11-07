import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PostCard.css';

class PostCard extends React.Component {
  render() {
    return (
      <div className={s.container}>
        Post ... Post ..
      </div>
    );
  }
}

export default withStyles(s)(PostCard);
