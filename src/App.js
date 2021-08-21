import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <Route path='/profile/:userId?'
       render={() =><ProfileContainer/>}
      />
      <Route path='/dialogs' 
      render={() =><DialogsContainer/>}/>
      <Route path='/find_users' 
      render={()=><FindUsersContainer/>}/>
    </div>
  );
}

export default App;