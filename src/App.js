import React from 'react';
import  {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

const App = (props) => {
  return (  
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route path='/profile' render={() =>
          <Profile
            posts={props.store.profilePage.posts}
            textPost={props.store.profilePage.textPost}
            addPost={props.addPost}
            updateTextNewPost={props.updateTextNewPost}
          />} />
        <Route path='/dialogs' render={() =>
          <Dialogs
            messegeItems={props.store.dialogsPage.messegeItems}
            dialogItems={props.store.dialogsPage.dialogItems}
          />} />
      </div>
    );
}

export default App;