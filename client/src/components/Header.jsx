import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import BorderPic from "../images/flower-border.png";

export default function Header() {
    return (
        <div class="main-man">

            <header class="header d-flex flex-row align-items-center justify-content-between p-2">

                <div>
                    <div class="dropdown button1">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                    </div>
                </div>

                <nav class="navbar navbar-light bg-light d-flex flex-column align-items-center center-nav">
                    <span class="navbar mb-0 pb-0 header-span">Avigails Paintings</span>
                    <img src={BorderPic} alt="flower-border" height={"70px"} />
                </nav>

                <div>
                    <div class="btn-group dropleft dropdown2">
                        <button class="btn bg-dark dropdown-toggle text-white " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </button>
                        <div class="dropdown-menu p-2 m-2" aria-labelledby="dropdownMenuButton">
                            {/* Change to links */}
                            <p>Action</p>
                            <p>Another action</p>
                            <p>Something else here</p>
                        </div>
                    </div>
                </div>

            </header>

        </div>
    );
}