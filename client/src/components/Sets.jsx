import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Sets.css";
import abstractFlowers from "../images/abstract-flowers.jpg";

export default function Sets() {

    const navigate = useNavigate();

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

    const paintingsList = [
        {
            id: 1,
            image: abstractFlowers,
            name: "Flowers",
            price: "500"
        },
    ];

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting } });
    };

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="displaySets">
                            <div class="canvasSets">
                                <img class="paintingSets"
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