import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorFollow, actionCreatorSetAllUsers, actionCreatorSetCount, actionCreatorSetCountPage, actionCreatorSetUsers, actionCreatorUnfollow } from '../../redux/findUser-reducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        count: state.findUsersPage.count,
        allUsers: state.findUsersPage.allUsers,
        countPage: state.findUsersPage.countPage
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
        setCount:(count)=>{
            dispatch(actionCreatorSetCount(count));
        },
        setCountPage:(countPage)=>{
            dispatch(actionCreatorSetCountPage(countPage));
        },
        setAllUsers:(allUsers)=>{
            dispatch(actionCreatorSetAllUsers(allUsers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);