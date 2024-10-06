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

    const carouselImages = [
        `https://aw-backend.onrender.com/${painting.image}`,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!painting) {
        return (
            <div class="error">
                <p>No painting data available. <span className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Go back</span></p>
            </div>
        );
    }

    return (
        <>
            <div class="backButton">
                <p class="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Back</p>
            </div>
            <div className="showroom">
                <Carousel interval={null}>
                    {carouselImages.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img className="image" src={image} alt={`Slide ${index}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Showroom;