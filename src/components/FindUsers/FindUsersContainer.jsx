
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreatorSetToggleIsFetching,actionCreatorSetAllUsers,actionCreatorSetUsers, followThunkCretor,unfollowThunkCretor, setUsersThunkCreator, actionCreatorSetCount, actionCreatorSetCountPage } from '../../redux/findUser-reducer';
import FindUsers from './FindUsers';


function FindUsersContainer(props){   
    useEffect(()=>{
        if(props)    
        props.setUsersThunkCreator(props.countPage,props.count)
    },[ props ])
    
    return <FindUsers {...props}/> 
}
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
    followThunkCretor,
    unfollowThunkCretor,
    toggleIsFetching:actionCreatorSetToggleIsFetching,    
    setUsers:actionCreatorSetUsers,
    setCount:actionCreatorSetCount,
    setCountPage:actionCreatorSetCountPage,
    setAllUsers:actionCreatorSetAllUsers,
    setUsersThunkCreator,
} )(FindUsersContainer);