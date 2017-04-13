import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import App from './app';
import WelcomeContainer from './welcome/welcome_container';
import ProfileContainer from './profile/profile_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={App} />
          <Route path="profile/:id" component={ProfileContainer}
            onEnter={_ensureLoggedIn} />
          <Route path="/welcome" component={WelcomeContainer}
            onEnter={_redirectIfLoggedIn} />
          <Redirect from="/" to="welcome" />
      </Router>
    </Provider>
  );

};

export default Root;
