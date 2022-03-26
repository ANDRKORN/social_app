import React from 'react';
import { NavLink } from 'react-router-dom';
import head_style from './Header.module.css';

const Header = (props) => {
    return <header className={head_style.header}>
        <img alt='' src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <div>
            {props.isAuth ? <>{props.login}<button onClick={props.LogoutThunkCreator}>logout</button></>
            : (<NavLink to='/login'>Login</NavLink>)}            
        </div>
    </header>
}

export default Header;