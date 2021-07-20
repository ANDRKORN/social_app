import React from 'react';
import dialogs_style from './Dialogs.module.css'
import DialogsMessegs from './DialogsMessegs/DialogsMessegs'
import DialogsItems from './DialogsItems/DialogsItems'
import { actionCreatorAddMessage, actionCreatorUpdateTextMessage } from '../../redux/store';


const Dialogs = (props) => {

 let newTextMessege=React.createRef();

 const updateTextMessege=()=>{
  let textMessage=newTextMessege.current.value
   props.dispatch(actionCreatorUpdateTextMessage(textMessage));
 }
const addMessage=()=>{
  props.dispatch(actionCreatorAddMessage());
}

  let arrDialogsItems = props.dialogItems.map((el) => <DialogsItems name={el.name} key={el.id} />);
  let arrMessegeItems = props.messegeItems.map((el) => <DialogsMessegs messege={el.messege} key={el.id} />);

  return <>
    <div className={dialogs_style.dialogs_block}>
      <div className={dialogs_style.dialogs_block__items}>
        {arrDialogsItems}
      </div>
      <div className={dialogs_style.dialogs_messege}>
        {arrMessegeItems}
        <textarea name="" id="" cols="15" rows="1" ref={newTextMessege} onChange={updateTextMessege} value={props.textMessage}></textarea>
        <button onClick={addMessage}>add messege</button>
      </div>
    </div>
  </>
}

export default Dialogs;