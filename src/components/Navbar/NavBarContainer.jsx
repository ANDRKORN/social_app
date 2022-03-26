
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFirstUsersThunkCreator } from '../../redux/navBar-reducer';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
useEffect(()=>{    
    props.getUsers(1,3)
},[props.isGetUsers])

return <Navbar {...props}/>
}

let mapStateToProps = (state) => {   
    return {
        users: state.navbarPage.users, 
        isGetUsers: state.navbarPage.isGetUsers       
    }
}

export default connect(mapStateToProps,{    
    getUsers: getFirstUsersThunkCreator,     
} )(NavbarContainer);