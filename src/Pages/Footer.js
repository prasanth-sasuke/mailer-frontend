import React from 'react'
import logo from "../image/logo.png"
function Footer() {
  return (

           <footer>
        <div class="footer-content">
            <div class="footer-content-left">
                <img src={logo}/>
                <p>Jairams Arts and Science College, Karur affiliated to Bharathidasan University, was founded in 2009
                    by
                    Jairams Educational Trust, an institution dedicated to raise the students dreams in higher
                    education. The
                    college provides an ideal atmosphere for higher education to all sections of society.</p>
                <ul class="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <div class="footer-content-right">
                <h5>Contact Info</h5>
                    <p>Jairams Arts and Science College Karur Attampparappu, Kakkavadi (PO), Karur-639003, Tamil Nadu,
                        INDIA</p>
                    <p>M : 9952410253 | 7708061799</p>
                    <p>E : jairams.karur@gmail.com</p>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2024 Jairams Arts and Science College Karur</p>
        </div>
    </footer>
    
  )
}

export default Footer