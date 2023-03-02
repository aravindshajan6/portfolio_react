import React from 'react';
import logo1 from '../img/portfolio_img.jpg';
import '../styles/about.css';
import { GitHub, Email, Facebook, LinkedIn } from '@mui/icons-material';
import Typewriter from "typewriter-effect";
function About() {
  return (
    <div className='main1'>
      <div className='about'>
        <img className='biopic' src={logo1} alt='image1' />
        {/* <h2>Hi , My name is Aravind</h2> */}
        <div className='bio'>
          <p>
          <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
       .changeDelay(70) 
       .typeString("Hi, My name is Aravind ")
        
       .pauseFor(100)
      //  .deleteAll()
      //  .typeString("I'm a MERN stack developer with a passion for creative designing.")
       .start();
       }}
       />
    </div>
    <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
       .pauseFor(3000)
       .changeDelay(70) 
      
       .typeString("I'm a MERN stack developer with a passion for creative designing.")
         
       .pauseFor(1000)
      //  .deleteAll()
      //  .typeString("I'm a MERN stack developer with a passion for creative designing.")
       .start();
       }}
       />
    
            {/* I'm a <span>MERN</span> stack developer with a passion for creative
            designing. */}
          </p>
          <button className='resume b1'>Resume</button>
          <div className='socials '>
            <Email className='hvr-grow' />
            <Facebook className='hvr-grow' />
            <GitHub className='hvr-grow' />
            <LinkedIn className='hvr-grow' />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
