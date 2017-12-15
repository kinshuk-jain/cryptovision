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
import PinBar from '../../components/PinBar';

class Home extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
  };

  static defaultProps = {
    showSidebar: true,
  };

  state = {
    show: false,
    sortFilter: 'popular',
  };

  mouseInOut(state) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ show: state }), 200);
  }

  renderSortBy() {
    return (
      <div className={s.sortContainer}>
        <div
          className={s.subHeader}
          onMouseEnter={() => this.mouseInOut(true)}
          onMouseLeave={() => this.mouseInOut(false)}
        >
          Sort by {`${this.state.sortFilter}`}
          <i
            className={cx('icon-chevron-down', { [s.rotate]: this.state.show })}
          />
          {this.state.show && (
            <div className={s.sortDropDown}>
              {['currency', 'latest', 'popular'].map((key, i) => (
                <div
                  key={i}
                  onClick={() => {
                    this.setState({ sortFilter: key });
                    this.mouseInOut(false);
                  }}
                >
                  {key}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Q & A</h1>
          {this.renderSortBy()}
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
        <PinBar />
      </div>
    );
  }
}

export default withStyles(s)(
  connect(({ showSidebar }) => ({ showSidebar }), null)(Home),
);
