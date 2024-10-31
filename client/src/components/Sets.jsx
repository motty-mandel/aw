import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Sets.css";
import "./css/setsMobile.css";

export default function Sets() {

    const [paintingsList, setPaintingsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [delay, setDelay] = useState(true);
    const navigate = useNavigate();
    const [imageClasses, setImageClasses] = useState({});

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://aw-backend.onrender.com/api/sets');
                setPaintingsList(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching paintings', err);
                setLoading(false);
            }
        };
 
        fetchPaintings();
        
        const timer = setTimeout(() => {
            setDelay(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting} });
    };

    const handleImageLoad = (id, event) => {
        const img = event.target;
        const newClass = img.naturalWidth > img.naturalHeight ? "landscape" : "portrait";
        setImageClasses((prevClasses) => ({
            ...prevClasses,
            [id]: newClass
        }));
    };

    const handleBuyClick = async (stripeId) => {
        console.log('stripeId:', stripeId);
        try {
            const response = await axios.post('https://aw-backend.onrender.com/create-checkout-session', {
                stripeId: stripeId,
            });
            const { url } = response.data;
            window.location.href = url;
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div className="displaySets">
                            <div className="canvasSets" onClick={() => handlePaintingClick(painting)}>
                            <img
                                    className={`paintingSets ${imageClasses[painting.id] || ''}`}
                                    src={`https://aw-backend.onrender.com/${painting.image}`}
                                    alt={painting.name}
                                    onLoad={(event) => handleImageLoad(painting.id, event)}
                                />
                            </div>
                            <div className="infoSets">
                                <p>Name: {painting.name} <br />
                                    Price: ${painting.price}</p>
                                    <button className='buttonSets' onClick={() => handleBuyClick(painting.stripeId)}>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};