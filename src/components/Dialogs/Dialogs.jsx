import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogs_style from './Dialogs.module.css'

const DilogsItems = (props) => {
  return (
    <div>
      <NavLink to={`/+${props.name}`}>
        {props.name}
      </NavLink>
    </div>
  )
}
const DialogsMessegs = (props) => {
  return (
    <div className={dialogs_style.messege}>
      <img src="https://pbs.twimg.com/profile_images/438896699541422080/S391-HG7.jpeg" alt="" className={dialogs_style.avatar} />
      <div>
        {props.messege}
      </div>
    </div>
  );
}

const Dialogs = (props) => {
  let arrDialogsItems = props.dialogItems.map((el) => <DilogsItems name={el.name} key={el.id} />);
  let arrMessegeItems = props.messegeItems.map((el) => <DialogsMessegs messege={el.messege} key={el.id} />);
  return <div className={dialogs_style.dialogs_block}>
    <div className={dialogs_style.dialogs_block__items}>
      {arrDialogsItems}
    </div>
    <div className={dialogs_style.dialogs_messege}>
      {arrMessegeItems}
    </div>
  </div>
}

export default Dialogs;