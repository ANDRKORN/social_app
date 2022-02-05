import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';

const App = (props) => {
  return (<>

    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBarContainer />
      <Switch>
        <Route path='/profile/:userId?'
          render={(locathion) => <ProfileContainer locathion={locathion}/>} />       
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/find_users'
          render={() => <FindUsersContainer />} />
      </Switch>
    </div>

  </>
  );
}

export default App;