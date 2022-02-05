
import { connect } from 'react-redux';
import { actionCreatorSetFirstUsers} from '../../redux/navBar-reducer';
import Navbar from './Navbar';

let mapStateToProps = (state) => {   
    return {
        users: state.navbarPage.users,        
    }
}

export default connect(mapStateToProps,{    
    setUsers:actionCreatorSetFirstUsers,     
} )(Navbar);