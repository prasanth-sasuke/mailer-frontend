import React from 'react'
import BannerImage from "../image/banner-image.jpeg"
import aboutImage from "../image/about-image-2.jpg"
import aboutImage1 from "../image/about-image-1.jpg"
import Footer from './Footer'
import Header from './Header'

function Home() {
  return (

      <>
  
  <Header/>
  
    <div class="banner">
      <img src={BannerImage} alt="BannerImage"/>
      <div class="banner-text">
        <h2><span>Welcome to </span><br></br>Jairams Arts and Science College</h2>
        <br></br>
        <a href="about-us.html" class="common-btn">More About us</a>
      </div>
    </div>
  
    <div class="about-us">
  
      <div class="container">
  
        <div class="about-odd">
          <div class="about-us-content">
            <h3>Our <span>Vision</span></h3>
            <p>Jairams Arts and Science College, Karur affiliated to Bharathidasan University, was founded in 2009 by
              Jairams Educational Trust, an institution is dedicated to raise the students dreams in higher education. The
              college provides an ideal atmosphere for higher education to all sections of society. The college offers 13
              UG
              courses and 9 PG courses, 5 M.Phil. and 4 Ph.D. Programmes. The mission of the institution is to impart
              quality and value-based education for students to empower them to become economically independent, morally
              strong and above all society consciousness which leads them to the task of building a strong nation.</p>
          </div>
          <div class="about-us-image">
            <img src={aboutImage} alt="aboutImage"/>
          </div>
        </div>
  
      </div>
  
    </div>
  
    <div class="about-us-two">
  
      <div class="container">
  
        <div class="about-even">
          <div class="about-us-content">
            <h3>Our <span>Mission</span></h3>
            <p>Jairams Arts and Science College has very good infrastructure and it gives main priority to discipline and
              also provides opportunities to develop the overall personality of the students to enable them to face life
              challenges in the competitive global scenario. The college located in a spacious and peaceful environment at
              Attamparappu, 8 km away from the Karur Bus Terminal and 12 km away from Karur Railway Station. Faculties are
              well qualified and dedicated to student’s development. Our students are motivated to serve in the following
              service schemes N.C.C, N.S.S., Rotract Club, Consumer Club, Leo Club, Red Ribbon Club, Youth Red Cross,
              Green Club, Fine Arts Club and Thiruvalluvar Mandram.</p>
          </div>
          <div class="about-us-image">
            <img src={aboutImage1} alt='aboutImage1'/>
          </div>
        </div>
  
      </div>
  
    </div>
  
    <div class="quotes">
  
      <div class="container">
        <h3>Thirteen years in Education.<br></br>"<span>A new way</span> of creating future"</h3>
        <p>Jairams Arts and Science College, Karur affiliated to Bharathidasan University, was founded in 2009 by Jairams
          Educational Trust, an institution is dedicated to raise the students dreams in higher education. The college
          provides an ideal atmosphere for higher education to all sections of society. The college offers 13 UG courses
          and
          9 PG courses, 5 M.Phil. and 4 Ph.D. Programmes. The mission of the institution is to impart quality and
          value-based education for students to empower them to become economically independent, morally strong and above
          all society consciousness which leads them to the task of building a strong nation.</p>
        <p>Jairams Arts and Science College has very good infrastructure and it gives main priority to discipline and also
          provides opportunities to develop the overall personality of the students to enable them to face life challenges
          in the competitive global scenario. The college located in a spacious and peaceful environment at Attamparappu,
          8
          km away from the Karur Bus Terminal and 12 km away from Karur Railway Station. Faculties are well qualified and
          dedicated to student’s development. Our students are motivated to serve in the following service schemes N.C.C,
          N.S.S., Rotract Club, Consumer Club, Leo Club, Red Ribbon Club, Youth Red Cross, Green Club, Fine Arts Club and
          Thiruvalluvar Mandram.</p>
      </div>
  
    </div>
  
<Footer/>
    </>
      )
}

export default Home