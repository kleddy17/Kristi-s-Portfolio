import React from 'react';

//React Routers
import{Route, Link} from 'react-router-dom'

// Components imports
import Home from "./components/Home";
// import Blog from "./components/Blog";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Layout from "./components/common/Layout"

// CSS imports
import "./css/App.css";

const App = () => {
  return(
<div>
  <Layout>
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
          {/* <li><a className="grey-text text-lighten-3" href="https://ga-students.slack.com/U018GJQQ8L8"><i class="devicon-slack-plain"></i></a></li> */}
          <li><a className="hvr-grow" href="https://github.com/kleddy17"><i class="devicon-github-original"></i></a></li>
          <li><a className="hvr-grow" href="https://www.linkedin.com/in/kristi-eddy-72bb281b5/"><i class="devicon-linkedin-plain"></i></a></li>
      </ul>
    
      </div>
        {/* </nav> */}
    </nav> 
 
      <Route exact path ="/" component={Home}/>
      {/* <Route path="/Skills" component={Skills} /> */}
      {/* <Route path="/Resume" component={Resume} />  */}
      {/* /* <Route path="/Projects" component={Projects} /> */}
  </Layout> 
</div>
  );
};

export default App; 
