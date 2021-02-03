import React from 'react';

//React Routers
import{BrowserRouter as Router, Link} from 'react-router-dom'

// Components imports
import Home from "./components/Home";
// import Blog from "./components/Blog";
// import Skills from "./components/Skills";
import Content from "./components/Content";
import Layout from "./components/common/Layout"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

// CSS imports
import "./css/App.css";


const App = () => {
  return(
<div className = "App">
  <Router>
      <Nav/>
      <main>
        <Content/>
      </main>
      <Footer/>
      {/* <Route exact path ="/" component={Home}/> */}
      {/* <Route path="/Skills" component={Skills} /> */}
      {/* <Route path="/Resume" component={nav} />  */}
      {/* /* <Route path="/Projects" component={Projects} /> */}
</Router>
</div>
  );
};

export default App; 
