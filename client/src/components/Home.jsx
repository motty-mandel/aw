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
                setPaintingsList(response.data);
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

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="display">
                            <div class="canvas" onClick={() => handlePaintingClick(painting)}>
                                <img class="painting"
                                    src={`https://aw-backend.onrender.com${painting.image}`} alt={painting.name} />
                            </div>
                            <div class="info">
                                <p>Name: {painting.name} <br />
                                    Price: ${painting.price}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};