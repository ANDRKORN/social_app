import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux'
import { actionCreatorSetUserProfile } from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  updatePofile(){
    let userID;
    !this.props.match.params.userId?userID=2:userID=this.props.match.params.userId;    
    usersAPI.getInfoUser(userID).then((respons) => {      
      this.props.actionCreatorSetUserProfile(respons.data);     
    });
  }
  componentDidMount(){         
    this.updatePofile()
  }
  componentDidUpdate(prevProps){
    this.updatePofile()
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
