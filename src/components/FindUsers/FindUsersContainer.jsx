import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorFollow, actionCreatorSetUsers, actionCreatorUnfollow } from '../../redux/findUser-reducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow:(userID)=>{
            dispatch(actionCreatorFollow(userID));
        },
        unFollow:(userID)=>{
            dispatch(actionCreatorUnfollow(userID));
        },
        setUsers:(users)=>{
            dispatch(actionCreatorSetUsers(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);