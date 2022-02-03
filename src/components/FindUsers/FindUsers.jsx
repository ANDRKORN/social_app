import React from "react";
import User from "./User/User";
import * as axios from "axios";
import styles from "./FindUsers.module.css";
import Loader from "../LoaderGif/Loader.jsx";

class FindUsers extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.countPage}&count=${this.props.count}`,
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
    function paginator(props, onPageChanged){
    let pagesCount = Math.ceil(props.allUsers / props.count);
    let max = props.countPage <= 9 ? 20 : props.countPage+10;     
    let pages = [];
    for (let i =props.countPage-10 < 1 ? 1 : props.countPage-10; i <= pagesCount; i++) {
      if (i < max) {
        pages.push(i);
      }
    }    
    let newPages = pages.map((p) => {
      return (
        <span
          className={toString(props.countPage === p && styles.selectedPage)}
          onClick={(e) => {
            onPageChanged(p);
          }}
        >
          {" "}{p}{" "}
        </span>
      );
    });
    return newPages
    }
    

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
        <div>{paginator(this.props, this.onPageChanged)}</div>
        <div>{this.props.isFetching ? <Loader /> : allUsers}</div>
        <button>Show more</button>
      </div>
    );
  }
}

export default FindUsers;
