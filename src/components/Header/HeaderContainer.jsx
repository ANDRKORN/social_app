import React from 'react';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/auth-reducer';
import { LogoutThunkCreator } from '../../redux/auth-reducer'
import Header from './Header';

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authThunkCreator()
    }
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const mapStateToPrps=(state)=>({
    isAuth:state.authUser.isAuth,
    login:state.authUser.login    
});
export default connect(mapStateToPrps,{authThunkCreator, LogoutThunkCreator})(HeaderContainer);