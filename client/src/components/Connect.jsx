import React from "react";

import "./css/Connect.css";
import "./css/connectMobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Connect() {
    return (
        <div class="connect-main d-flex align-items-center justify-content-center">
            <form class="form">

                <div class="form-group name-input">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full name" />
                </div>

                <div class="form-group email-input">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>

                <div class="form-group message-input">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

            </form>
        </div>
    );
}