import React from "react";
import "./navbar.scss";

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src="https://global-uploads.webflow.com/5ddc307f68536f623db8c772/60b93129188d32f49610b1a1_Kiwibot%20for%20business.svg" alt="" />
            </div>
            <div className="navbar-text-container">
                <a href="#">Delivery</a>
                <a href="#">Bot</a>
            </div>
        </div>
    )
}

export default Navbar
