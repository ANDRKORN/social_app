import React from 'react';
import dialogsMessegs_style from './DialogsMessegs.module.css'

const DialogsMasseges = (props) => {
  return (
    <div className={dialogsMessegs_style.messege}>
      <img src="https://pbs.twimg.com/profile_images/438896699541422080/S391-HG7.jpeg" alt="" className={dialogsMessegs_style.avatar} />
      <div>
        {props.massege}
      </div>
    </div>
  );
}


export default DialogsMasseges;