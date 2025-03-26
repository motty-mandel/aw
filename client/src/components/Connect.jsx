import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

import "./css/Connect.css";
import "./css/connectMobile.css";
import "./css/darkMode.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Connect() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const form = useRef();

    useEffect(() => {
        emailjs.init('K4sVp1R5giOA_vyxm');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!nameRef.current.value || !emailRef.current.value || !messageRef.current.value) {
            alert('Please try again');
            return;
        }

        emailjs.sendForm('service_bgkimz8', 'template_j0k8d1e', form.current)
            .then(() => {
                console.log('Success');
                alert('Message sent successfully');
                clearInputs();
            }, (error) => {
                console.log('Failed...');
                alert('Please try again');
            })
    };

    const clearInputs = () => {

        const name = document.getElementsByClassName('name')[0];
        const email = document.getElementsByClassName('email')[0];
        const message = document.getElementsByClassName('message')[0];

        name.value = "";
        email.value = "";
        message.value = "";
    }


    return (
        <div className="connect-main d-flex flex-column align-items-center justify-content-center">

            <form className="form" id="contact-form" ref={form} onSubmit={sendEmail}>

                <input type="hidden" name="contact_number" value="697483" />

                <div className="form-group name-sec">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                        name="user_name"
                        type="name" 
                        className="form-control name"
                        id="exampleFormControlInput1"
                        ref={nameRef}
                    />
                </div>

                <div className="form-group email-sec">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input
                        name="user_email"
                        type="email"
                        className="form-control email"
                        id="exampleFormControlInput2"
                        ref={emailRef}
                    />
                </div>

                <div className="form-group message-sec">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                        name="message"
                        className="form-control message"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        ref={messageRef}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send</button>

            </form>
        </div>
    );
}