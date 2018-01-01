import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Comments.css';

const CHAR_LIMIT = 256;

class Comments extends React.Component {
  state = {
    charCount: 0,
    showButton: false,
  };

  changeHandler(e) {
    const text = e.target.value || '';
    this.comment.value = text.substring(0, CHAR_LIMIT);
    this.setState({ charCount: this.comment.value.length });
  }

  render() {
    return (
      <div className={s.comments}>
        <div className={s.addComment}>
          <textarea
            style={{
              width: this.state.showButton ? `80%` : `90%`,
            }}
            onFocus={() => this.setState({ showButton: true })}
            onChange={e => this.changeHandler(e)}
            ref={comment => {
              this.comment = comment;
            }}
            placeholder="Add a comment.."
          />
          <span style={{ right: this.state.showButton ? `20%` : `10%` }}>
            {this.state.charCount}/256
          </span>
          {this.state.showButton && (
            <button className={s.addCommentButton}>Comment</button>
          )}
        </div>
        <div className={s.userComment}>Comment1</div>
        <div className={s.userComment}>Comment2</div>
        <div className={s.userComment}>Comment3</div>
        <div className={s.userComment}>Comment4</div>
        <div className={s.userComment}>Comment5</div>
        <div className={cx(s.userComment, s.loadMore)}>Load more ... </div>
      </div>
    );
  }
}

export default withStyles(s)(Comments);
