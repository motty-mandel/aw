import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Footer.css";
import "./css/darkMode.css";
import "./css/footerMobile.css";

export default function Footer() {
    return (
        <footer className="text-center text-lg-start">

            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom social-media">

                <div className="mb-3">
                    <a href="https://www.instagram.com/artby_avigail/" target="_blank" className="me-4 text-reset instaLink">
                        <span className="footer-span">Get connected with me on Instagram:</span>
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                <div className="mb-3">
                    <a href="https://www.youtube.com/@AvigailMandel" target="_blank" className="me-4 text-reset youtubeLink">
                        <span className="footer-span">Get connected with me on Youtube:</span>
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <div>
                    <a href="https://open.spotify.com/artist/4TJuzvNqkGJhQ45XtqMXop" target="_blank" className="me-4 text-reset spotifyLink">
                        <span className="footer-span">Check out my music on Spotify:</span>
                        <i className="fab fa-spotify"></i>
                    </a>
                </div>

            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="bio">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-5 col-lg-4 col-xl-5 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Avigails Art
                            </h6>
                            <p className="bio-text">
                                Art means different things to different people.
                                To me it means an outlet for my joy, pain, distress, excitement, love
                                and hurt. Each piece means something to me, and something else entirely to you,
                                but that's how it is supposed to be. Never bottle up your feelings. There is
                                always a way to express it, you just have to find your way.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}
        </footer>
    );
}