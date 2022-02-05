import React from "react";
import User from "../User/User";
import styles from "./FindUsers.module.css";
import Loader from "../LoaderGif/Loader.jsx";
import { usersAPI } from "../../api/api";
import Paginator from "../Paginator/Paginator";

class FindUsers extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.countPage, this.props.count).then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setAllUsers(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCountPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.count)
    .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {    
    let allUsers = this.props.users.map((u) => (     
      <User
        key={u.id}
        toggleIsFollow={this.props.toggleIsFollow}
        isFollow={this.props.isFollow}
        follow={this.props.follow}
        unfollow={this.props.unFollow}
        id={u.id}
        followed={u.followed}
        avatar={
          u.photos.small === null
            ? "https://berserkon.com/images/avatar-vector.png"
            : u.photos.small
        }
        nameUser={u.name}
        country={"u.location.country"}
        city={"u.location.city"}
        status={u.status}
      />
    ));
    return (
      <div>
        Users
        <div>
          {<Paginator 
          allRecords = {this.props.allUsers}
          numberOfRecords= {this.props.count}
          eventOnClick = {this.onPageChanged} 
          />}
      </div>
      <div>{this.props.isFetching ? <Loader /> : allUsers}</div>
        <button>Show more</button>
      </div>
    );
  }
}

export default FindUsers;
