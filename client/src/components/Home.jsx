import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import "./css/homeMobile.css";
import "./css/darkMode.css";

import road from "../images/road-fireworks.jpg";
import hibiscus from "../images/hibiscus.jpg";
import perspective from "../images/perspective.jpg";
import meltedHeart from "../images/melted-heart.jpg";


export default function Home() {

    // const [paintingsList, setPaintingsList] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchPaintings = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get('https://aw-backend.onrender.com/api/paintings');
    //             setPaintingsList(response.data)
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching paintings', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchPaintings();
    // }, []);

    // if (loading) {
    //     return (
    //         <div className="loading-screen">
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }

    const navigate = useNavigate();

    const paintingsList = [
        {
            id: 1,
            image: hibiscus,
            name: "Hibiscus",
            price: "125"
        },
        {
            id: 2,
            image: perspective,
            name: "It's all about perspective",
            price: "125"
        },
        {
            id: 3,
            image: meltedHeart,
            name: "Melted heart",
            price: "125"
        }
    ];

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting } });
    };

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="display">
                            <div class="canvas" onClick={() => handlePaintingClick(painting)}>
                                <img class="painting"
                                    src={painting.image} alt={painting.name} />
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