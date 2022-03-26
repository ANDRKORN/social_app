import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  getUsersStatusThunkCreator,
  updatePhotoThunkCreator,
  updateUsersStatusThunkCreator,
} from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";
import { AuthRedirectComponent } from "../../HOC/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.locathion.match.params.userId
        ? this.props.locathion.match.params.userId
        : this.props.userId
    );
    this.props.getUsersStatusThunkCreator(
      this.props.locathion.match.params.userId
        ? this.props.locathion.match.params.userId
        : this.props.userId
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.locathion.match.params.userId !==
      prevProps.locathion.match.params.userId
    ) {
      this.props.getUsersThunkCreator(
        this.props.locathion.match.params.userId
          ? this.props.locathion.match.params.userId
          : this.props.userId
      );
      this.props.getUsersStatusThunkCreator(
        this.props.locathion.match.params.userId
          ? this.props.locathion.match.params.userId
          : this.props.userId
      );
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isLoad={this.props.isLoad}
        profile={this.props.profile}
        status={this.props.status}
        userId={this.props.userId}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLoad: state.profilePage.isLoad,
  status: state.profilePage.status,
  userId: state.authUser.userID,
});

export default compose(
  withRouter,
  AuthRedirectComponent,
  connect(mapStateToProps, {
    getUsersThunkCreator,
    getUsersStatusThunkCreator,
    updateUsersStatusThunkCreator,
    updatePhotoThunkCreator,
  })
)(ProfileContainer);
