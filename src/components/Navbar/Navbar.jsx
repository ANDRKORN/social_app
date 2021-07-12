import React from 'react';
import nav_style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={nav_style.nav}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div><div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;