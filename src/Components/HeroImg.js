import React from 'react';

import './HeroImgStyles.css';

// import BackgroungImg from "../assets/bg.jpg";
import profilepic from '../../src/assets/profilepic.jpg'

import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    // <div className="hero">
    //     <div className="mask">
    //         <img className='Background' src={BackgroungImg} alt="BG" />
    //     </div>

    //     <div className="content">
    //         <p>HI, I'M A DEVOLOPER</p>
    //         <h1>React Developer.</h1>
            
    //     <div>
    //         <Link to="/project" className="btn">Projects</Link>
    //         <Link to="/contact" className="btn btn-light">Contact</Link>
    //     </div>
    //     </div>

      
    // </div>




    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Mamta Aashutosh</span> <br />Web Developer</span>
        <p className="introPara">I am a skilled web developer and designer with various skills.</p>
        <Link><button className='btn'>Hire me</button></Link>
      </div>

      <img src={profilepic} alt="profile" className="bg" />
    </section>
  )
}

export default HeroImg;
