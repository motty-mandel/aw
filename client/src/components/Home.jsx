import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import "./css/homeMobile.css";
import "./css/darkMode.css";

// http://localhost:5000
// https://aw-backend.onrender.com

export default function Home() {

    const [paintingsList, setPaintingsList] = useState([]);
    const [longPaintings, setLongPaintings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [delay, setDelay] = useState(true);
    const navigate = useNavigate();
    const paintingRefs = useRef({});

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                setLoading(true);
                const [paintingsListRes, longPaintingsRes] = await Promise.all([
                    axios.get("https://aw-backend.onrender.com/api/paintings"),
                    axios.get("https://aw-backend.onrender.com/api/longPaintings")
                ])
                setPaintingsList(paintingsListRes.data);
                setLongPaintings(longPaintingsRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching paintings", err);
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
        sessionStorage.setItem('clickedPaintingId', painting.id);
        navigate('/showroom', { state: { painting } });
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

    return (
        <div className="paintings-container">
            {loading && delay ? (
                <div className="loading-container">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <>
                    <div className="paintings-grid">
                        <div className="container">
                            <div className="row">

                                {paintingsList.map((painting) => (
                                    <div key={painting.id} className="col-6 col-md-6 col-lg-6 d-flex justify-content-center">
                                        <div className="display" ref={(el) => (paintingRefs.current[painting.id] = el)}>
                                            <div className="canvas" onClick={() => handlePaintingClick(painting)}>
                                                <img
                                                    className={`painting ${painting.orientation}`}
                                                    src={`https://aw-backend.onrender.com/${painting.image}`}
                                                    alt={painting.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <br />

                                {longPaintings.map((painting) => (
                                    <div key={painting.id} className="col-6 col-md-6 col-lg-6 d-flex justify-content-center">
                                        <div className="display" ref={(el) => (paintingRefs.current[painting.id] = el)}>
                                            <div className="canvas" onClick={() => handlePaintingClick(painting)}>
                                                <img
                                                    className={`painting ${painting.orientation}`}
                                                    src={`https://aw-backend.onrender.com/${painting.image}`}
                                                    alt={painting.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};