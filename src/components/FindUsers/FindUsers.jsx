import React from "react";
import User from "../User/User";
import styles from "./FindUsers.module.css";
import Loader from "../LoaderGif/Loader.jsx";
import Paginator from "../Paginator/Paginator";

class FindUsers extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCountPage(pageNumber);
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
          {
            <Paginator
              allRecords={this.props.allUsers}
              numberOfRecords={this.props.count}
              eventOnClick={this.onPageChanged}
            />
          }
        </div>
        <div>{this.props.isFetching ? <Loader /> : allUsers}</div>
        <button
          onClick={() => {
            this.props.setCount(this.props.count + 5);
          }}
        >
          Show more
        </button>
      </div>
    );
  }
}

export default FindUsers;
