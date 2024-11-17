import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <div className="main">
            <h1>Thanks for buying with us!</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}