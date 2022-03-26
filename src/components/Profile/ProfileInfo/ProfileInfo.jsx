import React from "react";
//import prof_style from "./ProfileInfo.module.css";
import Loader from "../../LoaderGif/Loader";
import ProfileStatus from '../ProfilStatus/ProfileStatus'

const ProfileInfo = (props) => {
  
 const onChangeFoto = (e) => {
   if(e.target.files.length) props.updatePhotoThunkCreator(e.target.files[0])
 }
  if (props.isLoad) {
    return <Loader />;
  }
  return (
    <div style={{ marginLeft: 20 + "px" }}>
      <div>
        <img style={{width:'200px'}} src={props.profile.photos.large || props.profile.photos.small || "https://berserkon.com/images/avatar-vector.png"} alt="" />
      </div>
      {props.profile.userId === props.userId ?
       <input type='file' accept=".jpg, .jpeg, .png" onChange={onChangeFoto}/>: <></>}
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        {props.profile.aboutMe}
      </div>
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        {props.profile.fullName}
      </div>
      <div style={{ margin: 20 + "px", backgroundColor: "green" }}>
        <ProfileStatus status={props.status} updateUsersStatusThunkCreator={props.updateUsersStatusThunkCreator}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
