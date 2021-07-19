import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogs_style from './Dialogs.module.css'
import DialogsMessegs from './DialogsMessegs/DialogsMessegs'
import DialogsItems from './DialogsItems/DialogsItems'


const Dialogs = (props) => {
 let newMessege=React.createRef();
 const alertMessege=()=>{
    alert(newMessege.current.value);
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
        <textarea name="" id="" cols="15" rows="1" ref={newMessege}></textarea>
        <button onClick={alertMessege}>add messege</button>
      </div>
    </div>
  </>
}

export default Dialogs;