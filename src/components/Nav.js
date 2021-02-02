import React, {useState} from 'react'
import Layout from "./common/Layout"
import {Link} from "react-router-dom"


const nav = () =>{
   return(
    <div>

   <nav className = "whole-nav"> 
      {/* <nav className = "color"> */}
      <div className="col l4 offset-l2 s12">
        {/*  // make a flex container to center veritcal */}
      
        <ul className ="right-container">
          <li><a className="RESUME" href="https://docs.google.com/document/d/1f0OYxM6fODJtaYysmK_7UnyT_XMPvZhKlfQhas4T20E/edit">Resume</a></li>
          <li><a className ="home"><Link to = "/">Home</Link>{' '}</a></li>
          <li><a className ="skills"><Link to = "/Skills">Skills</Link>{' '}</a></li>
        </ul>
        <ul className = "left-container">
          <li><a className="hvr-grow" href='https://docs.google.com/forms/d/e/1FAIpQLSeQvHU0oP_S9J1d2SQ6Ij_QKrev8ccILOdLUoYfY1KI5FInOQ/viewform?usp=sf_link'><i class="fas fa-envelope-square"></i></a></li>
          <li><a className="hvr-grow" href="https://github.com/kleddy17"><i class="devicon-github-original"></i></a></li>
          <li><a className="hvr-grow" href="https://www.linkedin.com/in/kristi-eddy-72bb281b5/"><i class="devicon-linkedin-plain"></i></a></li>
      </ul>
      
    
      </div>
  
    </nav> 
  <Layout/> 
</div>
)
}

export default nav;