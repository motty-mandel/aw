import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/Home.css';
import "./css/darkMode.css";

import flower from "../images/flower.jpg"

export default function Home() {

    const paintingsList = [
        {
            id: 1,
            name: "Hibiscus",
            image: flower,
            price: "$100",
        },
        {
            id: 2,
            name: "Hibiscus 2",
            image: flower,
            price: "$200",
        },
        {
            id: 3,
            name: "Hibiscus 3",
            image: flower,
            price: "$300",
        },
        {
            id: 4,
            name: "Hibiscus 4",
            image: flower,
            price: "$400",
        }
    ]

    return (

        <div class="container">
            <div class="row">

                {paintingsList.map((list) => (
                    <div key={list.id} class="col-md-4 d-flex justify-content-center">
                        <div class="display">
                            <div class="canvas">
                                <img class="painting"
                                 src={list.image} alt="iphone" />
                            </div>
                            <div class="info">
                                <p>Name: {list.name} <br />
                                 Price: {list.price}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
}

