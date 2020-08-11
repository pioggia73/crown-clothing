import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// ***** pages ***** //
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
// ***** componnets ***** //
import Header from './components/header/Header';
// ****** firebase ***** //
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props  

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {

    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route path="/shop"  component={ShopPage} />
        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>
        <Route exact path='/signin'>
          { this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage /> )}
        </Route>
      </Switch>
    </div>
  );
}
};

const mapStateToProps = createStructuredSelector => ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
