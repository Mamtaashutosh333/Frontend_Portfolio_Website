import "./AboutContentStyles.css";


import React from 'react';
import { Link } from "react-router-dom";
import react1 from '../assets/react1.jpg';
import react3 from '../assets/react3.jpg';



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a front-end developer. I use to create responsive websites. I do have a knowledge of back-end and database also but i personally enjoy working with frontend. </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src={react3} className="img" alt="true" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent;
