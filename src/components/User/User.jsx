import React from "react";
import style_find_users from "./User.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { useState } from "react";

const User = (props) => {
  const [followed, setState] = useState(props.followed)
  return (
    <div className={style_find_users.user_block}>
      <div className={style_find_users.user_block_avatar}>
        <NavLink to={`profile/${props.id}`}>
          <img src={props.avatar} alt="" />
        </NavLink>
        {followed ? (
          <button disabled={props.isFollow.some(el=>el===props.id)}
            onClick={() => {                   
              props.unfollowThunkCretor(props.id)
              setState(false)       
            }}>
            follow
          </button>
        ) : (
          <button disabled={props.isFollow.some(el=>el===props.id)}
            onClick={() => {
              props.followThunkCretor(props.id)
              setState(true)       
            }}
          >
            unfollow
          </button>
        )}
      </div>
      <div className={style_find_users.user_block_info}>
        <div className={style_find_users.nameUser}>
          <span className={style_find_users.nameUser}>{props.nameUser}</span>
        </div>
        <div className={style_find_users.country}>
          <span>{props.country}</span>
          <br />
          <span>{props.city}</span>
        </div>
        <div className={style_find_users.statusUser}>
          <span>{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
