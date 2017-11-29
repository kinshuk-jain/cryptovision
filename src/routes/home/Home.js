import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import PostCard from '../../components/PostCard';
import SuggestedQues from '../../components/SuggestedQues';
import CategoryNav from '../../components/CategoryNav';
import AddQuestion from '../../components/AddQuestion';
import NegativeFeedback from '../../components/NegativeFeedback';

class Home extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
  };

  static defaultProps = {
    showSidebar: true,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Q & A</h1>
          <div
            className={cx(s.left, { [s.smallLeft]: !this.props.showSidebar })}
          >
            <CategoryNav />
          </div>
          <div className={cx(s.mid, { [s.bigMid]: !this.props.showSidebar })}>
            <PostCard key={1} />
            <PostCard key={2} />
            <PostCard key={3} />
            <PostCard key={4} />
          </div>
          <div className={s.right}>
            <SuggestedQues />
          </div>
        </div>
        <AddQuestion />
        <NegativeFeedback />
      </div>
    );
  }
}

export default withStyles(s)(
  connect(({ showSidebar }) => ({ showSidebar }), null)(Home),
);
