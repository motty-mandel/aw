import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import "./css/darkMode.css"

import BorderPic from "../images/flower-border.png";

export default function Header() {

    let btnName;
    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark');
            btnName = 'Dark';
        } else {
            setTheme('Light');
            btnName = 'Light'
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div class={`App-${theme}`}>
            <div class="main-man">

                <header class="header d-flex flex-row align-items-center justify-content-between p-2">

                    <div>
                        <div class="dropdown button1">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                        </div>
                    </div>

                    <nav class="navbar d-flex flex-column align-items-center center-nav">
                        <span class="navbar mb-0 pb-0 header-span">Avigails Art</span>
                        <img src={BorderPic} alt="flower-border" height={"70px"} />
                    </nav>

                    <div>
                        <div class="btn-group dropleft dropdown2">
                            <button class="btn dropdown-toggle menuBtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </button>
                            <div class="dropdown-menu p-2 m-2 menuList" aria-labelledby="dropdownMenuButton">
                                {/* Change to links */}
                                <p>Get in touch</p>
                                <p>Purchase</p>
                                <button onClick={toggleTheme}>{btnName} mode</button>
                            </div>
                        </div>
                    </div>

                </header>

            </div>
        </div>
    );
}