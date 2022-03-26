
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreatorSetToggleIsFetching,actionCreatorSetAllUsers,actionCreatorSetUsers, followThunkCretor,unfollowThunkCretor, setUsersThunkCreator, actionCreatorSetCount, actionCreatorSetCountPage } from '../../redux/findUser-reducer';
import { getAllUsers, getCount, getCountPage, getUser } from '../../selectors/selector';
import FindUsers from './FindUsers';


function FindUsersContainer(props){   
    useEffect(()=>{
        if(props)    
        props.setUsersThunkCreator(props.countPage,props.count)
    },[ props.countPage, props.count ])
    
    return <FindUsers {...props}/> 
}
let mapStateToProps = (state) => {    
    return {
        users: getUser(state),
        count: getCount(state),
        allUsers: getAllUsers(state),
        countPage: getCountPage(state),
        isFetching: state.findUsersPage.isFetching,
        isFollow: state.findUsersPage.isToggleFollow,
    }
}

export default connect(mapStateToProps,{
    followThunkCretor,
    unfollowThunkCretor,
    toggleIsFetching:actionCreatorSetToggleIsFetching,    
    setUsers:actionCreatorSetUsers,
    setCount:actionCreatorSetCount,
    setCountPage:actionCreatorSetCountPage,
    setAllUsers:actionCreatorSetAllUsers,
    setUsersThunkCreator,
} )(FindUsersContainer);