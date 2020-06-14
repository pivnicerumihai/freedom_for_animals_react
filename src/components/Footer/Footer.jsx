import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <Fragment>
        <div className="footer">
            <div className="get_involved_table">
                <h3>Get Involved</h3>
                <p>Donate</p>
                <p>Fundraise</p>
                <p>Online Shopping</p>
                </div>
            <div className="email_updates">
                <h3>Get Email Updates</h3>
                <p>Get the latest news and campaigns by email.</p>
                <button>Sign Up</button>
            </div>
            <div className="social_media" >
                <h3>Find us on Social Media</h3>
                <p>Keep up to date and take action.</p>
                <div className="icons">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagramSquare} size="2x"></FontAwesomeIcon>
                </div>
            </div>
      
        </div>
        <p className="copyright">	&#xA9;  Mihai - Claudiu Pivnceru 2020</p>
        </Fragment>
    )
}

export default Footer;