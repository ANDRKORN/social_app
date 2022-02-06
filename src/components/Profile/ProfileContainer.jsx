import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";
import { AuthRedirectComponent } from "../../HOC/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.locathion.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.locathion.match.params.userId !== prevProps.locathion.match.params.userId) {
      this.props.getUsersThunkCreator(this.props.locathion.match.params.userId);
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

export default compose(
  withRouter,
  AuthRedirectComponent,
  connect(mapStateToProps, { getUsersThunkCreator })
)(ProfileContainer)


