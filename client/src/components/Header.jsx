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
    const [btnName, setBtnName] = useState('Dark');

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark');
            setBtnName('Light')
            localStorage.setItem('theme', 'Dark');
        } else {
            setTheme('Light');
            setBtnName('Dark')
            localStorage.setItem('theme', 'Light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div class={`App-${theme}`}>
            <div class="main-man">

                <header class="header d-flex flex-row align-items-center justify-content-between p-2">

                    <div class="profile">
                        <img src={avigailProfile} alt="profile-pic" height={'150px'} />
                    </div>

                    <nav class="navbar d-flex flex-column align-items-center center-nav">
                        <span class="navbar mb-0 pb-0 header-span">Avigails Art</span>
                        <img src={lightBorderPic} alt="flower-border" height={"70px"} />
                    </nav>

                    <div class="btn-group dropleft dropdown2">
                        <button class="btn dropdown-toggle menuBtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </button>
                        <div class="dropdown-menu p-2 m-2 menuList" aria-labelledby="dropdownMenuButton">
                            <Link to={'/'}><p>Home</p></Link>
                            <Link to={'/connect'}><p>Get in touch</p></Link>
                            <Link to={'/purchases'}><p>Purchase</p></Link>
                            <button onClick={toggleTheme}>{btnName} mode</button>
                        </div>
                    </div>

                </header>

            </div>
        </div>
    );
}