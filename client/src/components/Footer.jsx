import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Footer.css";
import "./css/darkMode.css";
import "./css/footerMobile.css";

export default function Footer() {
    return (
        <footer>
            {/* <!-- Footer --> */}
            <footer class="text-center text-lg-start">

                {/* <!-- Section: Social media --> */}
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div class="me-5 d-none d-lg-block">
                        <span class="footer-span">Get connected with me on Instagram:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="https://www.instagram.com/artby_avigail/" class="me-4 text-reset instaLink">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="bio">
                    <div class="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-5 col-lg-4 col-xl-5 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Avigails Art
                                </h6>
                                <p class="bio-text">
                                    Art means different things to different people.
                                    To me it means an outlet for my joy, pain, distress, excitement, love
                                    and hurt. Each piece means something to me, and something else entirely to you,
                                    but thats how it is supposed to be. Never bottle up your feelings. There is 
                                    always a way to express it, you just have to find your way.
                                </p>
                            </div>
                            
                            {/* <!-- Grid column --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-email me-3"></i>mandelmottyisrael65@gmail.com</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}
            </footer>
            {/* <!-- Footer --> */}
        </footer>
    );
}