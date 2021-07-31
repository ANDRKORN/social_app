import React from 'react';
import style_find_users from "./User.module.css"

const User = (props) => {
    return <div className={style_find_users.user_block}>
        <div className={style_find_users.user_block_avatar}>
            <img src={props.avatar} alt="" />
            {props.followed ? <button onClick={()=>{props.follow(props.id)}}>follow</button>:<button onClick={()=>{props.unfollow(props.id)}}>unfollow</button>}
        </div>
        <div className={style_find_users.user_block_info}>
            <div className={style_find_users.nameUser}>
                <span className={style_find_users.nameUser}>{props.nameUser}</span>
            </div>
            <div className={style_find_users.country}>
                <span>{props.country}</span>
                <br/>
                <span>{props.city}</span>
            </div>
            <div className={style_find_users.statusUser}>
                <span>{props.status}</span>
            </div>
        </div>
    </div>
}

export default User;