
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreatorSetToggleIsFollow, actionCreatorFollow, setUsersThunkCreator, actionCreatorSetCount, actionCreatorSetCountPage, actionCreatorUnfollow } from '../../redux/findUser-reducer';
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
    //toggleIsFetching:actionCreatorSetToggleIsFetching,
    follow:actionCreatorFollow,
    unFollow:actionCreatorUnfollow,
    //setUsers:actionCreatorSetUsers,
    setCount:actionCreatorSetCount,
    setCountPage:actionCreatorSetCountPage,
    //setAllUsers:actionCreatorSetAllUsers,
    setUsersThunkCreator,
} )(FindUsersContainer);