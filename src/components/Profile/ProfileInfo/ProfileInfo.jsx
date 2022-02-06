import React from "react";
//import prof_style from "./ProfileInfo.module.css";
import Loader from "../../LoaderGif/Loader";
import ProfileStatus from '../ProfilStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if (props.isLoad) {
    return <Loader />;
  }
  return (
    <div style={{ marginLeft: 20 + "px" }}>
      <div>
        <img src={props.profile.photos.large || props.profile.photos.small} alt="" />
      </div>
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        {props.profile.aboutMe}
      </div>
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        {props.profile.fullName}
      </div>
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        <ProfileStatus/>
      </div>
    </div>
  );
};

export default ProfileInfo;
