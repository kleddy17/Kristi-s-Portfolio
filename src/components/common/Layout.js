import React from 'react'
import "../../css/components/Layout.css"

const Layout = (props) =>{
    return (
  <div> 
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div>{props.children}</div> 
    <footer className="page-footer">
      
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4"></p>  
              </div>
              <h5 className="skills-text">Skills</h5>
              <div className="skills-container">
              <i class="devicon-sequelize-plain-wordmark"></i>
              <i class="devicon-react-original-wordmark"></i>
              <i class="devicon-postgresql-plain-wordmark"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
              <i class="devicon-python-plain-wordmark"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-mongodb-plain-wordmark"></i>
              <i class="devicon-express-original-wordmark"></i>
              </div>
            </div>
          </div>


  <div className="footer-copyright">
    <div className="container"></div>
  </div>

</footer>
</div>
  )
}

export default Layout