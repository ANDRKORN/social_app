import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Route path='/profile' render={()=>
      <Profile posts={props.state.profilePage.posts}/>}/>
      <Route path='/dialogs' render={()=>
      <Dialogs 
      messegeItems={props.state.dialogsPage.messegeItems}
      dialogItems={props.state.dialogsPage.dialogItems}
      />}/>
    </div>
    </BrowserRouter>);
}

export default App;