import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Sets.css";
import "./css/setsMobile.css";

export default function Sets() {

    const [paintingsList, setPaintingsList] = useState([]);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const [imageClasses, setImageClasses] = useState({});

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/sets');
                setPaintingsList(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching paaintings', err);
                setLoading(false);
            }
        };

        fetchPaintings();
    }, []);

    const handlePaintingClick = (painting) => {
        navigate('/showroom', { state: { painting } });
    };

    const handleImageLoad = (id, event) => {
        const img = event.target;
        const newClass = img.naturalWidth > img.naturalHeight ? "landscape" : "portrait";
        setImageClasses((prevClasses) => ({
            ...prevClasses,
            [id]: newClass
        }));
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
                        <div class="displaySets">
                            <div class="canvasSets" onClick={() => handlePaintingClick(painting)}>
                            <img
                                    className={`paintingSets ${imageClasses[painting.id] || ''}`}
                                    src={`http://localhost:5000${painting.image}`}
                                    alt={painting.name}
                                    onLoad={(event) => handleImageLoad(painting.id, event)}
                                />
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