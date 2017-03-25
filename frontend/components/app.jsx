import React from 'react';
import HeaderContainer from './header/header_container';
import FeedContainer from './feed/feed_container';

const App = ({ children, params }) =>{
  let newsfeed;
  if (!params.id) {
    newsfeed = <FeedContainer params={params}/>;
  }
  return (
  <div className="home-page">
    <HeaderContainer/>
    <div className="home-newsfeed-container">
      { newsfeed }
    </div>
    { children }
  </div>
);
};

export default App;
