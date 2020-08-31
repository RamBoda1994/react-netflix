import React, { useState, useEffect } from 'react';
import logo from '../../images/netflix.png';
import avatar from '../../images/avatar.png';
import './Navbar.css';

function Navbar() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img
                src={logo}
                alt="Netflix Logo"
                className="navbar__logo"
            />
            <img
                src={avatar}
                alt="Netflix Avatar"
                className="navbar__avatar"
            />
        </div>
    )
}

export default Navbar;
