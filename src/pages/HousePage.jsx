import React from "react";
import './HousePage.css';
import TempHouse from '../assets/temporaryHouseImages.png';
import houseImage1 from '../assets/houseImage1.png';
import houseImage2 from '../assets/houseImage2.png';
import houseImage3 from '../assets/houseImage3.png';
import houseImage4 from '../assets/houseImage4.png';
import ic1 from '../assets/ic1.png';
import ic2 from '../assets/ic2.png';
import ic3 from '../assets/ic3.png';
import ic4 from '../assets/ic4.png';
import ic5 from '../assets/ic5.png';
import ic6 from '../assets/ic6.png';
import ic7 from '../assets/ic7.png';
import ic8 from '../assets/ic8.png';
import others from'../assets/gambar 6.png';

const HousePage= () => {

    return (
        <div className="container-fluid">

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-border">
                <img src={TempHouse}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav container container-navbar navbar-content">
                        <a className="nav-link navbar-text" href="#">CATEGORY <span className="sr-only">(current)</span></a>
                        <a className="nav-link navbar-text" href="#">ABOUT US</a>
                        <a className="nav-link navbar-text" href="#">CONTACT US</a>
                    </div>

                </div>
            </nav>

           <div className="container container-body">
               <p className="title">House Puri Botanical</p>
           </div>

            <div className="container container-body">
                <div className="row image-body image-row1">
                    <img src={houseImage1} className="image-house col-md-6"/>
                    <img src={houseImage2} className="image-house col-md-6"/>
                </div>

                <div className="row image-body">
                    <img src={houseImage3} className="image-house col-md-6"/>
                    <img src={houseImage4} className="image-house col-md-6"/>
                </div>
            </div>

            <div className="container container-body1">
                <div className="row house-detail">
                <div className="col-md-7">
                    <h3 className="title-detail">House PURI BOTANICAL</h3>
                    <div className="desc-margin">
                    <p className="desc-text">Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
                    <p className="desc-text">Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
                    </div>
                        <div className="row">
                        <div className="col-md-3 icon1">
                            <img className="icon-1" src={ic1}/>
                            <p className="icon-desc">3 Bedroom</p>
                        </div>

                        <div className="col-md-3 icon2">
                            <img className="icon-2" src={ic2}/>
                            <p className="icon-desc">3 Living Room</p>
                        </div>

                        <div className="col-md-3 icon3">
                            <img className="icon-3" src={ic3}/>
                            <p className="icon-desc">3 Bath Room</p>
                        </div>

                        <div className="col-md-3 icon4">
                            <img className="icon-4" src={ic4}/>
                            <p className="icon-desc">3 Dining Room</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 icon4">
                            <img className="icon-5" src={ic5}/>
                            <p className="icon-desc">3 MBP/S</p>
                        </div>

                        <div className="col-md-3 icon4">
                            <img className="icon-6" src={ic6}/>
                            <p className="icon-desc">3 Unit Ready</p>
                        </div>

                        <div className="col-md-3 icon4">
                            <img className="icon-7" src={ic7}/>
                            <p className="icon-desc">3 Refrigator</p>
                        </div>

                        <div className="col-md-3 icon4">
                            <img className="icon-8" src={ic8}/>
                            <p className="icon-desc">3 Television</p>
                        </div>
                    </div>

                </div>

                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body card-content">
                            <h5 className="card-title">START BOOKING</h5>
                            <div className="row card-content">
                                <p className="card-text house-price">$244</p>
                                <p className="card-text per-month">Per Month</p>
                            </div>
                            <p>How long you will stay ?</p>

                            <p>Pick a Date</p>

                            <p>You Will Pay $1646 per 6 Month</p>
                            <button type="button" className="btn button-booking">Continue Booking</button>

                        </div>
                    </div>
                </div>
                </div>
                <p className="contact-person">Contact Person : (021) 0181238123</p>

                <div className="others">
                <p className="others-title">Others you might like</p>
                    <div className="row">
                        <img className="col-md-4" src={others}/>
                        <img className="col-md-4" src={others}/>
                        <img className="col-md-4" src={others}/>
                    </div>
                </div>

            </div>



        <div className="container container-body ">
         <footer className="footer-text ">
             <div className="row">
             <div className="col-md-3 center-footer footer-text">
                 <h3 className="navbar-title">Temporary House</h3>
                 <p className="navbar-desc">We kaboom your beauty home instantly and comfortable</p>
             </div>

             <div className="col-md-3 center-footer footer-text">
                 <h3 className="navbar-title">For Beginners</h3>
                 <p className="navbar-desc">new Account</p>
                 <p className="navbar-desc">Start Booking</p>
                 <p className="navbar-desc">Use Payments</p>
             </div>

             <div className="col-md-3 center-footer footer-text">
                 <h3 className="navbar-title">Explore Us</h3>
                 <p className="navbar-desc">Our Careers</p>
                 <p className="navbar-desc">Privacy</p>
                 <p className="navbar-desc">Terms & Conditions</p>
             </div>

             <div className="col-md-3 center-footer footer-text">
                 <h3 className="navbar-title">Connect Us</h3>
                 <p className="navbar-desc">support@temporaryhouse.id</p>
                 <p className="navbar-desc">021 - 1304 - 2249</p>
                 <p className="navbar-desc">Temporaryhouse, Slipi, Jakarta</p>
             </div>
             </div>
         </footer>
        </div>
            <p className="copyright footer-text navbar-desc">Copyright 2019 • All rights reserved • TemporaryHouse</p>
        </div>


    )
}

export default HousePage;