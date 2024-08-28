import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import "./css/darkMode.css";

import flower from "../images/flower.jpg"

export default function Home() {

    const [paintingsList, setPaintingsList] = useState([]);

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                const response = await axios.get('https://192.168.1.162:5000/api/paintings');
                setPaintingsList(response.data)
            } catch (error) {
                console.error('Error fetching paintings', error);
            }
        };

        fetchPaintings();
    }, []);

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((painting) => (
                    <div key={painting.id} class="col-md-4 d-flex justify-content-center">
                        <div class="display">
                            <div class="canvas">
                                <img class="painting"
                                 src={flower} alt="iphone" />
                            </div>
                            <div class="info">
                                <p>Name: {painting.name} <br />
                                 Price: {painting.price}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <p>Paintings List: {`${paintingsList}`}</p>
            </div>
        </div>

    );
};