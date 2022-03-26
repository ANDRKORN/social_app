import Login from "./Login.jsx";
import { connect } from "react-redux";
import { LoginThunkCreator} from "../../redux/auth-reducer";
import { compose } from "redux"; 

const mapStateToPrps=(state)=>({
  isAuth:state.authUser.isAuth,  
});

export default compose(
  connect ( mapStateToPrps, {LoginThunkCreator})
)(Login)


