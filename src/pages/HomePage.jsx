import React from "react";
import './HomePage.css';
import tempHouse from '../assets/temporaryHouseImages.png';

const HomePage = () => {


    return(
        <div>
            <nav className="navbar navbar-fixed-top container-fluid">
                <img src={tempHouse} className="" />
                <button type="button" className="btn btn-default navbar-btn navbar-right sign-in">Sign in</button>
                <div className="container">

                </div>
            </nav>

        </div>
    )
}

export default HomePage;