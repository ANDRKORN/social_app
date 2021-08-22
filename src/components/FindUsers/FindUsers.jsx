import React from "react";
import User from "./User/User";
import * as axios from "axios";
import styles from "./FindUsers.module.css";
import Loader from "../LoaderGif/Loader.jsx";

class FindUsers extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.countPage}&count=${this.props.count}`,
        {
          withCredentials:true,
        }
      )
      .then((respons) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(respons.data.items);
        this.props.setAllUsers(respons.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCountPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`,
        {
          withCredentials:true,
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    let max = 20;
    let min = 1;
    let pagesCount = Math.ceil(this.props.allUsers / this.props.count);
    let pages = [];
    for (let i = min; i <= pagesCount; i++) {
      if (i < max) {
        pages.push(i);
      }
    }
    pages.push("...");
    let newPages = pages.map((p) => {
      if (p === "...") {
        return (
          <span
            onClick={(e) => {
              
            }}
          >
            {" "}
            {p}{" "}
          </span>
        );
      }
      return (
        <span
          className={toString(this.props.countPage === p && styles.selectedPage)}
          onClick={(e) => {
            this.onPageChanged(p);
          }}
        >
          {" "}{p}{" "}
        </span>
      );
    });

    let allUsers = this.props.users.map((u) => (
      <User
        key={u.id}
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
        <div>{newPages}</div>
        <div>{this.props.isFetching ? <Loader /> : allUsers}</div>
        <button>Show more</button>
      </div>
    );
  }
}

export default FindUsers;
