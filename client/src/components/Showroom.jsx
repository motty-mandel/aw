import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/Showroom.css";
import "./css/showroomMobile.css";

const Showroom = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { painting } = location.state || {};

    const image = [
        `https://aw-backend.onrender.com/${painting.image}`,
    ];

    useEffect(() => {
        window.scrollTo(100, 100);
    }, []);

    if (!painting) {
        return (
            <div className="error">
                <p>No painting data available. <span className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Go back</span></p>
            </div>
        );
    }

    return (
        <>
            <div className="backButton">
                <p className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Back</p>
            </div>
            <div className="showroom">
                <img className="image" src={image} />
            </div>
        </>
    );
};

export default Showroom;