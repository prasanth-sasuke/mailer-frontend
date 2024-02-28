import React from 'react'
import headerImage from "../image/header-logo.svg"
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

  return (
    <div>
           <header>
  
  <div class="container">
    <div class="logo">
      {/* <a href="Home.html"> */}
        <img src={headerImage} alt='headerImage'/>
        {/* </a> */}
    </div>
    <ul class="menu">
      <li onClick={() => navigate("/")}>
        {/* <a href="Home.html"> */}
        Home
        {/* </a> */}
        </li>
      <li onClick={() => navigate("/about")}>
        {/* <a href="about-us.html"> */}
          About us
          {/* </a> */}
          </li>
      <li onClick={() => navigate("/detail")}>
        {/* <a href="Details.html"> */}
          Details
          {/* </a> */}
        </li>
      <li onClick={() => navigate("/login")}>
        {/* <a href="login.html" class="common-btn"> */}
          Login
          {/* </a> */}
          </li>
    </ul>
  </div>

</header>
    </div>
  )
}

export default Header