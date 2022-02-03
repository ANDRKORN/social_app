import React from "react";
import Profile from "./Profile";
import * as axios from 'axios'
import {connect} from 'react-redux'
import { actionCreatorSetUserProfile } from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
 
  componentDidMount(){     
    let userID;
    !this.props.match.params.userId?userID=2:userID=this.props.match.params.userId;
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userID}`
    )
    .then((respons) => {      
      this.props.actionCreatorSetUserProfile(respons.data);     
    });
  }
  
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}
let mapStateToProps=(state)=>({
  profile: state.profilePage.profile
})
;
let WithUrlDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{actionCreatorSetUserProfile})(WithUrlDataContainerComponent);
