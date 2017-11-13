import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import PostCard from '../../components/PostCard';
import SuggestedQues from '../../components/SuggestedQues';
import CategoryNav from '../../components/CategoryNav';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Q & A</h1>
          <div className={s.left}>
            <CategoryNav />
          </div>
          <div className={s.mid}>
            <PostCard key={1} />
            <PostCard key={2} />
            <PostCard key={3} />
            <PostCard key={4} />
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
