import React, { useState } from 'react'





//CSS import
import "../css/components/Home.css";

const hikingLink = () => {
  window.location = "https://hiking-the-white-mountains.herokuapp.com/hikes"
}

const witchLink = () => {
  window.location = "https://kleddy17.github.io/Project-1-/"
}

const findCareerLink = () => {
  window.location = "http://findcareer.surge.sh/login"
}




const Home = () => {

  return (
    <div>
      <div className="big-div">
        <br></br>

        <div className="header">
          <h2 className="name">Kristi Eddy</h2>
          <img className="selfie"
            src='https://i.postimg.cc/JzT066pD/C90-E0-BDE-651-F-4-B7-A-B5-F3-7-D17-C59-DB10-F-4-5005-c.jpg'
          />
          <p id="software-engineer"> Software Engineer</p>
        </div>

        <div className="brand-statement">
          <p className="about-me">
            I am a full stack software developer that is always striving for my next challenge. Currently, I spend most of my time designing websites, taking courses in different computer science subjects, bartending and participating in the #100DaysOfCode challenge to keep my skills sharp. When I'm not busy coding, you can find me obsessing over DIY projects and video games, or enjoying one of my many hobbies such as hiking or snowboarding.
          </p>
        </div>

      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="portfolio-text">
        <p className="portfolio-heading">My Portfolio</p>
      </div>

      <div className='project-container'>

        <div>
          <img className='hiking__img'
            onClick={hikingLink}
            src='https://wallpaperaccess.com/full/898085.jpg'
            alt=''
          />
          <br></br>
          <div className="hiking-title">
            <p>Hiking in the White Mountains</p>
          </div>
        </div>

        <div>
          <img className='findCareer__img'
            onClick={findCareerLink}
            src='https://i.postimg.cc/cCzTyBXD/a2390cc5-18a7-48e0-af19-2d4a76be7ad9-200x200.png'
            alt=''
          />
          <div className="career-title">
            <p>.find(career)</p>
          </div>
        </div>

        <div>
          <img className='witch__img'
            onClick={witchLink}
            src='https://wanderingcrystal.com/wp-content/uploads/2019/08/salem-witch-museum.jpg'
            alt=''
          />
          <div className="salem-title">
            <p>Salem Witch Triva</p>
          </div>
        </div>

      </div>
      <br></br>
      <br></br>

    </div>

  )
};

export default Home;
