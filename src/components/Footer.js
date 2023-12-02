import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer-wrapper">
                <div className="first-footer-wrapper">
                    <div className="footer-items1">
                        <ul>
                            <NavLink className="foot-navlink" to="/products"><li>Casual Wear</li></NavLink>
                            <NavLink className="foot-navlink" to="/mission"><li> Mission</li></NavLink>
                            <li> Find Store</li>
                        </ul>
                    </div>
                    <div className="footer-items2">
                        <ul>
                            <li>FAQ</li>
                            <NavLink className="foot-navlink" to="/login"><li>Retailer Login</li></NavLink>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-items3">
                        <div className="tagline-img"></div>
                    </div>
                </div>
                <div className="second-footer-wrapper">
                    <div className="foot2-item1">
                        <h4>Subscribe to our mailing list</h4>
                        <input placeholder="Your email address"></input>
                        <button>subscribe</button>
                    </div>
                    <div className="foot2-item2">
                    <h4>Follow us</h4>
                    <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                    <img width="40" height="40" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                    </div>
                </div>
                <div className="third-footer-wrapper">
                    <div className="foot3-item1">
                        <h6>Deccan corner, Deccan, Pune 411004, Maharashtra</h6>
                    </div>
                    <div className="foot3-item2">
                        <h6>+91 9175487047</h6>
                        <h6>casually@casually.com</h6>
                    </div>
                </div>
                <div className="fourth-footer-wrapper">
                    <p>© 2023 Casually | All Rights Reserved</p>
                    <p>Designed and Developed by : <strong style={{color:"#00b495"}}>SWAPNIL NICHAL</strong></p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
