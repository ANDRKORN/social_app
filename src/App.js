import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Route path='/profile' render={() =>
        <Profile
          store={props.store}          
        />}
      />
      <Route path='/dialogs' render={() =>
        <DialogsContainer   store={props.store}/>} />
    </div>
  );
}

export default App;