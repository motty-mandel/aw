import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import "./css/homeMobile.css";
import "./css/darkMode.css";


export default function Home() {

    const [paintingsList, setPaintingsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://aw-backend.onrender.com/api/paintings');
                // needs to be changed back
                setPaintingsList(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching paintings", err);
                setLoading(false);
            }
        };

        fetchPaintings();
    }, []);

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting } });
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
                        <div className="display">
                            <div className="canvas" onClick={() => handlePaintingClick(painting)}>
                                <img className="painting"
                                    src={`https://aw-backend.onrender.com/${painting.image}`} alt={painting.name} />
                            </div>
                            <div className="info">
                                <p>Name: {painting.name} <br />
                                    Price: ${painting.price}</p>
                                    <button onClick={() => handleBuyClick(painting.stripeId)}>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};