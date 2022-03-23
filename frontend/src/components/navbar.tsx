import React from "react";
import "./navbar.scss";

const Navbar: any = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-text-container">
                <ul className="list-navbar">
                    <a>Delivery</a>
                    <a>Bots</a>
                </ul>
            </div>

            <div className="navbar-logo-container">
                <img className="navbar-logo" src="https://global-uploads.webflow.com/5ddc307f68536f623db8c772/60b93129188d32f49610b1a1_Kiwibot%20for%20business.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar
