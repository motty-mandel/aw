import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/Showroom.css";
import "./css/showroomMobile.css";
import "./css/darkMode.css";

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
        let newClass;
        if (img.naturalWidth >= 2 * img.naturalHeight) {
            newClass = 'wideShow';
        } else if (img.naturalWidth > img.naturalHeight) {
            newClass = 'landscapeShow';
        } else {
            newClass = 'portraitShow'
        }
        setImageClasses((prevClasses) => ({
            ...prevClasses,
            [id]: newClass
        }));
    };

    const handleBuyClick = async (stripeId) => {
        try {
            const response = await axios.post('https://aw-backend.onrender.com/create-checkout-session', {
                stripeId: stripeId,
            });
            const { url } = response.data;
            window.location.href = url;
        } catch (error) {
            console.error('Error creating checkout session:', error.response);
        }
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
            <div className='showroom-main'>

                <div className="information">
                    <p className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}> Back</p>
                    <p>${painting.price}</p>

                    {!painting.price ? (
                        <h1>Sold</h1>
                    ) : (
                        <>
                            <p className="fa-solid fa-ruler-combined measure">{painting.size}</p>
                            <button onClick={() => handleBuyClick(painting.stripeId)}>Buy</button>
                        </>
                    )}
                    
                </div>

                    <div className="name">
                        <p>{painting.name}</p>
                    </div>

                <div className="showroom">
                    <img
                        className={`image ${imageClasses[painting.id] || ''}`}
                        src={image}
                        onLoad={(event) => handleImageLoad(painting.id, event)}
                    />
                </div>

            </div>
        </>
    );
};

export default Showroom;