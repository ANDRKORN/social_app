
import {React, useState} from "react";
import prof_style from "./Profile.module.css";

const ProfileStatus = (props) => {
  let [showInput, setState]=useState(false)
  return (
    <>
      <div className={prof_style.content}>
        <span onClick={()=>{setState(!showInput)}}>{props.status}111</span>
      </div>
      {showInput ?<div>
        <input type="text" autoFocus value={props.status} onBlur={()=>setState(!showInput)}/>
      </div>:''}
    </>
  );
};

export default ProfileStatus;
