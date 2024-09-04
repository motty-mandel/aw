import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

import "./css/Connect.css";
import "./css/connectMobile.css";
import "./css/darkMode.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Connect() {

    const form = useRef();

    useEffect(() => {
        emailjs.init('K4sVp1R5giOA_vyxm');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bgkimz8', 'template_j0k8d1e', form.current)
            .then(() => {
                console.log('Success');
                alert('Message sent successfully');
            }, (error) => {
                console.log('Failed...', error);
                alert('Please try again');
            })
    };


    return (
        <div class="connect-main d-flex align-items-center justify-content-center">
            <form class="form" id="contact-form" ref={form} onSubmit={sendEmail}>

                <input type="hidden" name="contact_number" value="697483" />

                <div class="form-group name-input">
                    <label for="exampleFormControlInput1">Name</label>
                    <input name="user_name" type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full name" />
                </div>

                <div class="form-group email-input">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input name="user_email" type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>

                <div class="form-group message-input">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send</button>

            </form>
        </div>
    );
}