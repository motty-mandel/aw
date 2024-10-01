import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/Showroom.css";
import "./css/showroomMobile.css";

const Showroom = () => {

    const navigate =  useNavigate();
    const location = useLocation();
    const { painting } = location.state;

    const carouselImages = [
        painting.image,
    ];

    // const goBack = () => {
    //     navigate(-1);
    // }

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