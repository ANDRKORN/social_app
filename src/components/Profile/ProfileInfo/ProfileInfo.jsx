import React from "react";
import prof_style from "./ProfileInfo.module.css";
import Loader from "../../LoaderGif/Loader";

const ProfileInfo = (props) => {
  if (props.profile == null) {
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
        {}
      </div>
    </div>
  );
};

export default ProfileInfo;
