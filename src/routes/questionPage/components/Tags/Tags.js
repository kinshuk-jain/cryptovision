import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tags.css';

class Tags extends React.Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    tags: [],
  };

  render() {
    const { tags } = this.props;
    return !_.isEmpty(tags) ? (
      <ul className={s.tagContainer}>{tags.map((tag, ind) => <li key={ind}>{tag}</li>)}</ul>
    ) : null;
  }
}

export default withStyles(s)(Tags);
