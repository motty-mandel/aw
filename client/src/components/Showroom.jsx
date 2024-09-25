import React from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import "./css/Showroom.css";
import "./css/showroomMobile.css";
import h from "../images/hibiscus.jpg";
import rf from "../images/road-fireworks.jpg";

const Showroom = () => {
    const location = useLocation();
    const { painting } = location.state;

    const carouselImages = [
        painting.image,
    ];

    return (
        <div className="showroom">
            <Carousel interval={null}>
                {carouselImages.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="image" src={image} alt={`Slide ${index}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Showroom;