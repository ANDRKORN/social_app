import React from 'react';
import User from './User/User';

const FindUsers = (props) => {
    let allUsers = props.users.map(u => <User follow={props.follow}
        unfollow={props.unFollow}
            id={u.id}
            followed={u.followed}
            avatar={u.avatarUser}
            nameUser={u.nameUser}
            country={u.location.country}
            city={u.location.city}
            status={u.status} />)
    return <div>
        Users
        {allUsers}
        <button>Show more</button>
    </div>
}

export default FindUsers;