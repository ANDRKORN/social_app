import { React, useState } from "react";
import prof_style from "./Profile.module.css";

const ProfileStatus = (props) => {
  console.log(props);
  let [showInput, setState] = useState(false);
  let [status, setStatus] = useState(props.status || "--");
  return (
    <>
      <div className={prof_style.content}>
        <span
          onClick={() => {
            setState(!showInput);
          }}
        >
          {status}
        </span>
      </div>
      {showInput ? (
        <div>
          <input
            type="text"
            autoFocus
            value={status}
            onChange={(e) => {
              setStatus(e.currentTarget.value);
            }}
            onBlur={() => {
              props.updateUsersStatusThunkCreator(status);
              setState(!showInput);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileStatus;
