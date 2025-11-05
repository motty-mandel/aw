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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth > 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    // ---------------------------------------
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
    // -------------------------------------------

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`App-${theme}`}>


            <header className={`d-flex flex-row align-items-center justify-content-between p-3 header ${isScrolled && isMobile ? 'shrink' : ''}`}>

                <div className="profile left-nav">
                    <img src={avigailProfile} alt="profile-pic" height={'150px'} />
                </div>

                <nav className="d-flex flex-column align-items-center center-nav">
                    <Link to={'/'}><span className="mb-0 header-span">Avigails Art</span></Link>
                    <img src={lightBorderPic} alt="flower-border" height={"70px"} />
                </nav>

                <div className="d-flex justify-content-end right-nav">
                    <div className="links">
                        <Link to={'/'}><p>Home</p></Link>
                        <Link to={'/sets'}><p>Painting sets</p></Link>
                        <Link to={'/connect'}><p>Connect</p></Link>
                        <p onClick={toggleTheme}>{btnName} mode</p>
                    </div>
                </div>


            </header>


        </div>
    );
}

{/*  */ }