import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import PostCard from '../../components/PostCard';
import SuggestedQues from '../../components/SuggestedQues';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Q & A</h1>
          <div className={s.left}>
            {
              [
                <PostCard />,
                <PostCard />,
                <PostCard />,
                <PostCard />
              ]
            }
          </div>
          <div className={s.right}>
            <SuggestedQues />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
