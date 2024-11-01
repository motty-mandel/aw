import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/Showroom.css";
import "./css/showroomMobile.css";

const Showroom = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { painting } = location.state || {};
    const [imageClasses, setImageClasses] = useState({});

    const image = [
        `https://aw-backend.onrender.com/${painting.image}`,
    ];

    useEffect(() => {
        window.scrollTo(150, 200);
    }, []);

    const handleImageLoad = (id, event) => {
        const img = event.target;
        const newClass = img.naturalWidth > img.naturalHeight ? "landscapeShow" : "portraitShow";
        setImageClasses((prevClasses) => ({
            ...prevClasses,
            [id]: newClass
        }));
    };

    if (!painting) {
        return (
            <div className="error">
                <p>No painting data available. <span className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Go back</span></p>
            </div>
        );
    }

    return (
        <>
            <div className='showroomMain'>
                <div className="backButton">
                    <p className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Back</p>
                </div>
                <div className="showroom">
                    <img
                        className={`image ${imageClasses[painting.id] || ''}`}
                        src={image}
                        onLoad={(event) => handleImageLoad(painting.id, event)}
                    />
                </div>
                <div className='size'>
                    <p className="fa-solid fa-ruler-combined">{painting.size}</p>
                </div>
            </div>
        </>
    );
};

export default Showroom;