import "./FooterStyles.css";

import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}} />

                    <div>
                        <p>Ranchi</p>
                        <p>Jharkhand</p>
                    </div>
                </div>

                <div className="phone">
                    <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}} /> 7667755600 </h4>
                </div>

                <div className="email">
                    <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} /> deepsite333@gmail.com </h4>
                </div>
            </div>



            <div className="right">
                <h4>About Me</h4>
                   <p>This is me Mamta Ashutosh. I enjoy discussing new projects and design challenges. Seeking an opportunity with an organization where I am effectively able to utilize my skills and contribute to
                       my team. Want a growing tech career as a Web Developer. Offering skills in web development to develop
                       superior web applications.</p>

                    <div className="social">
                       <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                       <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                       <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer;
