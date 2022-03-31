import Login from "./Login.jsx";
import { connect } from "react-redux";
import { LoginThunkCreator, authThunkCreator} from "../../redux/auth-reducer";
import { compose } from "redux"; 

const mapStateToPrps=(state)=>({
  isAuth:state.authUser.isAuth,
  login:state.authUser.login    
});

export default compose(
  connect ( mapStateToPrps, {LoginThunkCreator, authThunkCreator})
)(Login)