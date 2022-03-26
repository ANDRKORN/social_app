import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';
import Login from './components/Login/LoginContainer';
import { withRouter, BrowserRouter } from 'react-router-dom';
import { SetInitializatedAppThunkCreator } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store'
import Loader from './components/LoaderGif/Loader';
import { AuthRedirectComponent } from './HOC/AuthRedirect';


const App = (props) => {
  useEffect(() => {
    props.SetInitializatedAppThunkCreator()
  })
  if (props.initializated) {
    return (<>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBarContainer />
        <Route path='/profile/:userId?'
          render={(locathion) => <ProfileContainer locathion={locathion} />} />
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/find_users'
          render={() => <FindUsersContainer />} />

      </div>
    </>
    );
  } else return <Loader />
}

const mapStateToPrps = (state) => ({ initializated: state.appPage.initializated })

const AppContainer = compose(
  AuthRedirectComponent,
  withRouter,
  connect(mapStateToPrps, { SetInitializatedAppThunkCreator }),
)(App);

const MainApp = (props) => {
  return <>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path={'/login'}
            render={() => <Login />} />
          <Route path={'/registration'}
            render={() => <h1>registration</h1>} />
          <AppContainer />
        </Switch>
      </Provider>
    </BrowserRouter>
  </>
}

export default MainApp