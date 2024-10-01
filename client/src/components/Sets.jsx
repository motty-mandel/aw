import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Sets.css";
import "./css/setsMobile.css";

import abstractFlowers1 from "../images/abstract-flowers-1.jpg";
import abstractFlowers2 from "../images/abstract-flowers-2.jpg";
import abstractFlowers3 from "../images/abstract-flowers-3.jpg";
import check from "../images/check.jpg";
import ex from "../images/ex.jpg";

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
            image: abstractFlowers1,
            name: "Single flowers",
            price: "125"
        },
        {
            id: 2,
            image: abstractFlowers2,
            name: "Double flowers",
            price: "125"
        },
        {
            id: 3,
            image: abstractFlowers3,
            name: "Triple flowers",
            price: "125"
        },
        {
            id: 5,
            image: check,
            name: "Check",
            price: "125"
        },
        {
            id: 6,
            image: ex,
            name: "Ex",
            price: "125"
        },
    ];

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting } });
    };

    const getImageClass = (image) => {
        const img = new Image();
        img.src = image;
        if (img.width > img.height) {
            return "landscape";
        } else {
            return "portrait";
        }
    };

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="displaySets">
                            <div class="canvasSets" onClick={() => handlePaintingClick(painting)}>
                                <img class={`paintingSets ${getImageClass(painting.image)}`}
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