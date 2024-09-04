import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import "./css/darkMode.css";

import flower from "../images/flower.jpg"


export default function Home() {

    const [paintingsList, setPaintingsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://aw-backend.onrender.com/api/paintings');
                setPaintingsList(response.data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching paintings', error);
                setLoading(false);
            }
        };

        fetchPaintings();
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <p>Loading...</p>
            </div>
        );
    }


    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="display">
                            <div class="canvas">
                                <img class="painting"
                                    src={flower} alt="iphone" />
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