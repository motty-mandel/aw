import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import "./css/darkMode.css";
import "./css/headerMobile.css";

import lightBorderPic from "../images/flower-border-light.png";
import avigailProfile from "../images/avigailProfile.jpg";

export default function Header() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Light');
    const [btnName, setBtnName] = useState(localStorage.getItem('themeBtn') || 'Dark');

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark');
            setBtnName('Light');
            localStorage.setItem('theme', 'Dark');
            localStorage.setItem('themeBtn', 'Light');
        } else {
            setTheme('Light');
            setBtnName('Dark');
            localStorage.setItem('theme', 'Light');
            localStorage.setItem('themeBtn', 'Dark');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div class={`App-${theme}`}>
            <div class="main-man d-flex align-items-center justify-content-between">

                <header class="header d-flex flex-row align-items-center justify-content-between p-3">

                    <div class="profile left-nav">
                        <img src={avigailProfile} alt="profile-pic" height={'150px'} />
                    </div>

                    <nav class="navbar d-flex flex-column align-items-center center-nav">
                        <span class="navbar mb-0 pb-0 header-span">Avigails Art</span>
                        <img src={lightBorderPic} alt="flower-border" height={"70px"} />
                    </nav>

                    <div class="right-nav d-flex align-items-center">
                        <div class="btn-group dropleft">
                            <button type="button" class="btn-md btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MENU
                            </button>
                            <div class="dropdown-menu">
                                <Link to={'/'}><p>Home</p></Link>
                                <Link to={'/connect'}><p>Connect</p></Link>
                                <Link to={'/purchases'}><p>Purchase</p></Link>
                                <p onClick={toggleTheme}>{btnName} mode</p>
                            </div>
                        </div>
                    </div>

                </header>

            </div>
        </div>
    );
}