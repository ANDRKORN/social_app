
import { connect } from "react-redux";
import {
  setFollowCreator,
  followedUserThunkCreator,
  unfollowedUserThunkCreator,
} from "../../redux/user-reducer";
import User from "./User";

function UsersContainer(props) {
  return <User {...props} />;
}
let mapStateToProps = (state) => {
  return {
    userPage: state.userPage,
  };
};

export default connect(mapStateToProps, {
  followedUserThunkCreator,
  unfollowedUserThunkCreator,
  setFollowCreator,
})(UsersContainer);
