import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (<div>
        <ul style={{listStyleType: 'none', display: 'flex', alignItems: 'flex-start', }}>
            <li style={{marginLeft: 10, padding: 10}}><NavLink to="/">Home</NavLink></li>
            <li style={{marginLeft: 10, padding: 10}}><NavLink to="/about">About</NavLink></li>
            <li style={{marginLeft: 10, padding: 10}}><NavLink to="/contact">Contact</NavLink></li>
            <li style={{marginLeft: 10, padding: 10}}><NavLink to="/blog">Blog</NavLink></li>
        </ul>
    </div>)
}

export default withRouter(Navbar);