import React from "react";
import style_find_users from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
 
  return (
    <div className={style_find_users.user_block}>
      <div className={style_find_users.user_block_avatar}>
        <NavLink to={`profile/${props.id}`}>
          <img src={props.avatar} alt="" /> 
          </NavLink>
          {props.followed ? (
            <button
              onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials:true,
                    headers:{'API-KEY':'3f114771-ad14-408c-b89f-34ff425f028f'}
                  }).then(response=>{
                    console.log(response)
                      if(response.data.resultCode===0){
                          props.unfollow(props.id)
                      } else if(response.data.response===1){
                        props.unfollow(props.id)
                      }
                  })                
              }}
            >
              follow
            </button>
          ) : (
            <button
              onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},
                {withCredentials:true,
                headers:{'API-KEY':'3f114771-ad14-408c-b89f-34ff425f028f'}
                }).then(response=>{
                    if(response.data.resultCode===0){
                        props.follow(props.id)
                    }
                })                 
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
