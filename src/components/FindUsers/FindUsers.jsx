import React from 'react';
import User from './User/User';
import * as axios from 'axios'

class FindUsers extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons => {
            this.props.setUsers(respons.data.items);
        });
    }     
    render() {
        let allUsers = this.props.users.map(u => <User follow={this.props.follow}
            unfollow={this.props.unFollow}
            id={u.id}
            followed={u.followed}
            avatar={u.photos.small === null ? 'https://berserkon.com/images/avatar-vector.png' : u.photos.small}
            nameUser={u.name}
            country={'u.location.country'}
            city={'u.location.city'}
            status={u.status} />);
        console.log(this.props)
        return (<div>
            Users
            {allUsers}
            <button>Show more</button>
        </div>)
    }
}





export default FindUsers;