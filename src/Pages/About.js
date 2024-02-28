import React from 'react'
import headerImage from "../image/header-logo.svg"
import principal from "../image/principal.jpg"
import chairMan from "../image/chairman.jpg"
import Footer from './Footer'
import BannerImage from "../image/banner-image.jpeg"
import Header from './Header'

function About() {
  return (
<>

   <Header/>

    <div class="banner inner-page">
        <img src={BannerImage}/>
        <div class="banner-text">
            <h2>About <span>Us</span></h2>

        </div>
    </div>

    <div class="about-us">

        <div class="container">

            <div class="about-odd">
                <div class="about-us-content">
                    <h3>Dr. J. Stephen Raja, <br/><span>M.Sc., M.Phil., Ph.D.,</span></h3>
                    <p>As the Principal of Jairams Arts & Science College, Karur I welcome all, especially aspiring
                        students to our college. The inception of the JASC with a very simple thought, the desire to
                        provide an ideal atmosphere for higher education to all sections of the society. It has
                        distinguished itself as one of the leaders in nursing education in Karur. We believe strongly in
                        the adage, ‘Education is for life, not just for a living’ and we seek to implant in our students
                        a passion for learning that will incorporate the knowledge and understanding they will need, to
                        make a positive contribution to the communities in which they live and work.</p>
                </div>
                <div class="about-us-image">
                    <img src={principal}/>
                </div>
            </div>

        </div>

    </div>

    <div class="about-us-two">

        <div class="container">

            <div class="about-even">
                <div class="about-us-content">
                    <h3>Rtn. Er. R. Ramasamy, <br/><span>B.E., M.Sc.(Val)., M.I.E., FIV., </span></h3>
                    <p>We have adopted a quality policy of pursuing excellence and reaching an excellent level in arts
                        and sciences and teacher education. Our institutions fortify those students who succeed in
                        sports and games, and care for them to hold our flag high at national and international sports
                        events. This is the incredible that our athletes come home with a large number of medals and
                        records every year. We firmly believe that students must learn what they must learn before they
                        can continue to learn.

                        The personification of our institution is that the education received should help students
                        broaden their horizons at all stages of life. We believe that education is not limited to
                        regional or national borders, it should also cross national borders. We can proudly say that we
                        have attracted a large number of rural students.

                        There are many ways to influence the world, but there is no greater impact than expanding
                        education and empowering people. In turn, this will expand and educate people.</p>
                </div>
                <div class="about-us-image">
                    <img src={chairMan}/>
                </div>
            </div>

        </div>

    </div>









 <Footer/>
    </>
  )
}

export default About