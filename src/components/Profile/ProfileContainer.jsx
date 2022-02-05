import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUsersThunkCreator(+this.props.match.params.userId);
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isLoad={this.props.isLoad}
        profile={this.props.profile}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLoad: state.profilePage.isLoad,
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUsersThunkCreator })(
  WithUrlDataContainerComponent
);
