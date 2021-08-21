import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorFollow, actionCreatorSetAllUsers, actionCreatorSetCount, actionCreatorSetCountPage, actionCreatorSetToggleIsFetching, actionCreatorSetUsers, actionCreatorUnfollow } from '../../redux/findUser-reducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    
    return {
        users: state.findUsersPage.users,
        count: state.findUsersPage.count,
        allUsers: state.findUsersPage.allUsers,
        countPage: state.findUsersPage.countPage,
        isFetching: state.findUsersPage.isFetching,
    }
}

export default connect(mapStateToProps,{
    toggleIsFetching:actionCreatorSetToggleIsFetching,
    follow:actionCreatorFollow,
    unFollow:actionCreatorUnfollow,
    setUsers:actionCreatorSetUsers,
    setCount:actionCreatorSetCount,
    setCountPage:actionCreatorSetCountPage,
    setAllUsers:actionCreatorSetAllUsers,
} )(FindUsers);