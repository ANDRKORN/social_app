import React from "react";
import prof_style from "./ProfileInfo.module.css";
import Loader from "../../LoaderGif/Loader";

const ProfileInfo = (props) => {
  if (props.profile == null) {
    return <Loader />;
  }
  console.log(props)
  return (
    <div style={{marginLeft: 20 + 'px'}}>
      <img
        alt=""
        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div style={{margin:20+'px',
                  backgroundColor:'red'}}>
        {props.profile.aboutMe}
      </div>
      <div style={{margin:20+'px',
                  backgroundColor:'red'}}>
        {props.profile.fullName}
      </div>
      <div style={{margin:20+'px',
                  backgroundColor:'red'}}>
        
      </div>
    </div>
  );
};

export default ProfileInfo;
