import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import s from './PinBar.css';

import { addToPinBar } from '../../actions/pinBarActions';

class PinBar extends Component {
  static propTypes = {
    addToPinBar: PropTypes.func.isRequired,
    getQuesAddedToPinBar: PropTypes.shape({
      postId: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  };

  state = {
    postList: {},
  };

  componentWillReceiveProps(nextProps) {
    const { postList } = this.state;
    const { getQuesAddedToPinBar = {} } = nextProps;
    const pos = postList[getQuesAddedToPinBar.postId];
    if (pos) {
      // post id already present in postlist, remove it
      delete postList[getQuesAddedToPinBar.postId];
      this.setState({
        postList,
      });
    } else {
      // new postId not in postList, add it
      this.setState({
        postList: {
          ...postList,
          [getQuesAddedToPinBar.postId]: getQuesAddedToPinBar.title,
        },
      });
    }
  }

  render() {
    const { postList } = this.state;
    return (
      <div className={s.pinBar}>
        {Object.keys(postList).map(key => {
          const title = postList[key];
          return (
            <div className={s.pinBarItem} key={key}>
              <span className={s.heading}>{title}</span>
              <i className="icon-minus" />
              <i
                className="icon-x"
                onClick={() => this.props.addToPinBar({ postId: key, title })}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(s)(
  connect(
    ({ getQuesAddedToPinBar }) => ({
      getQuesAddedToPinBar,
    }),
    dispatch => ({
      addToPinBar: payload => dispatch(addToPinBar(payload)),
    }),
  )(PinBar),
);
