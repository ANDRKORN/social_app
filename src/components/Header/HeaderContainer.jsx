import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorSetUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials:true
        })
        .then((respons)=>{if(respons.data.resultCode===0){
           this.props.actionCreatorSetUserData(respons.data.data)
        }})
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
export default connect(mapStateToPrps,{actionCreatorSetUserData})(HeaderContainer);