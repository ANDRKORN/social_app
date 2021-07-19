import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogsItems_style from './DialogsItems.module.css'


const DialogsItems = (props) => {
  return (
    <div>
      <NavLink to={`/+${props.name}`}>
        {props.name}
      </NavLink>
    </div>
  )
}


export default DialogsItems;