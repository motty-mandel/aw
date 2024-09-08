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
    const [menuVisible, setMenuVisible] = useState(false);

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

    const menu = (e) => {
        e.stopPropagation();
        setMenuVisible(!menuVisible);
        let header = document.getElementById('header');
        if (!menuVisible) {
            header.style.width = '90%';
        } else {
            header.style.width = '100%';
        }
    };

    const resetMenu = () => {
        setMenuVisible(false);
        let header = document.getElementById('header');
        header.style.width = '100%';
    };

    useEffect(() => {
        if (menuVisible) {
            document.addEventListener('click', resetMenu);
        } else {
            document.removeEventListener('click', resetMenu);
        }
        return () => {
            document.removeEventListener('click', resetMenu);
        }
    }, [menuVisible]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div class={`App-${theme}`}>
            <div class="main-man d-flex align-items-center justify-content-between">

                <header class="header d-flex flex-row align-items-center justify-content-between p-3" id="header">

                    <div class="profile left-nav">
                        <img src={avigailProfile} alt="profile-pic" height={'150px'} />
                    </div>

                    <nav class="navbar d-flex flex-column align-items-center center-nav">
                        <span class="navbar mb-0 pb-0 header-span">Avigails Art</span>
                        <img src={lightBorderPic} alt="flower-border" height={"70px"} />
                    </nav>

                    <div class="right-nav d-flex align-items-center" id="right-nav">
                        <div class="btn-group dropleft">
                            <button type="button" class="btn-md btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MENU
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                </header>

            </div>
        </div>
    );
}