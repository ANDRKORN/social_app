
import { connect } from 'react-redux';
import { actionCreatorSetToggleIsFollow, actionCreatorFollow, actionCreatorSetAllUsers, actionCreatorSetCount, actionCreatorSetCountPage, actionCreatorSetToggleIsFetching, actionCreatorSetUsers, actionCreatorUnfollow } from '../../redux/findUser-reducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    
    return {
        users: state.findUsersPage.users,
        count: state.findUsersPage.count,
        allUsers: state.findUsersPage.allUsers,
        countPage: state.findUsersPage.countPage,
        isFetching: state.findUsersPage.isFetching,
        isFollow: state.findUsersPage.isToggleFollow,
    }
}

export default connect(mapStateToProps,{
    toggleIsFollow:actionCreatorSetToggleIsFollow,
    toggleIsFetching:actionCreatorSetToggleIsFetching,
    follow:actionCreatorFollow,
    unFollow:actionCreatorUnfollow,
    setUsers:actionCreatorSetUsers,
    setCount:actionCreatorSetCount,
    setCountPage:actionCreatorSetCountPage,
    setAllUsers:actionCreatorSetAllUsers,
} )(FindUsers);