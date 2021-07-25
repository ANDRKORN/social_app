import React from 'react';
import { actionCreatorAddMessage, actionCreatorUpdateTextMessage } from '../../redux/dialogs-reduce';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => { 
console.log(props.store.getState());
  const updateTextMessegeContainer = (textMessage) => {    
  props.store.dispatch(actionCreatorUpdateTextMessage(textMessage));

  }
  const addMessageContainer = () => {
    props.store.dispatch(actionCreatorAddMessage()); 
  }  
  return <Dialogs 
  dialogsPage={props.store.getState().dialogsPage}
  updateTextMessegeContainer={updateTextMessegeContainer}
  addMessageContainer={addMessageContainer}
  />
}

export default DialogsContainer;