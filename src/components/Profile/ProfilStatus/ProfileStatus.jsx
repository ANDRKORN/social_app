import { useEffect } from "react";
import { React, useState } from "react";
import prof_style from "./Profile.module.css";

const ProfileStatus = (props) => {  
  useEffect( () => {
    setStatus(props.status)
  }, [props])

  let [showInput, setShowInput] = useState(false);
  let [status, setStatus] = useState(props.status);
  return (
    <>
      <div className={prof_style.content}>
        <span
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          {status || "no status"}
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
              setShowInput(!showInput);
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
