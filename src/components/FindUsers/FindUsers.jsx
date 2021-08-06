import React from 'react';
import User from './User/User';
import * as axios from 'axios'
import styles from './FindUsers.module.css'

class FindUsers extends React.Component {
         
    componentDidMount(){
        
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.countPage}&count=${this.props.count}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setAllUsers(respons.data.totalCount);   
                     
        });             
    }
    onPageChanged = (pageNumber) => {
        this.props.setCountPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
        
    render() {
        let pagesCount = Math.ceil (this.props.allUsers / this.props.count);
        let max=20;
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            if(i<max){
            pages.push(i);
            }
        }
        
       
        let allUsers = this.props.users.map(u => <User follow={this.props.follow}
        unfollow={this.props.unFollow}
            id={u.id}
            followed={u.followed}
            avatar={u.photos.small === null ? 'https://berserkon.com/images/avatar-vector.png' : u.photos.small}
            nameUser={u.name}
            country={'u.location.country'}
            city={'u.location.city'}
            status={u.status} />);
        
        return (<div>
            Users
            <div>
                { pages.map( p => {
                    return <span className={this.props.countPage ===  p && styles.selectedPage }
                    onClick={(e) => { this.onPageChanged(p); }}> {p} </span>
                })}
            </div>   
            {allUsers}
            <button>Show more</button>
        </div>)
    }
}





export default FindUsers;