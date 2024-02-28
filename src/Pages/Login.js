import React,{ useState } from 'react';
import axios from 'axios';
import BannerImage from "../image/banner-image.jpeg"
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'


function Login() {

  let navigator = useNavigate()
  let [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let {data} = await axios.post('http://localhost:8800/dev/signin',login)
      console.log(data.result.id);
      if(data.error){
        toast.error(data.message);
        setLogin({
          email: '',
          password: ''
        })
      }else{
        toast.success(data.message)
        navigator(`/detail/${data.result.id}`)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  return (
    <div>
<Header/>
<div class="Login-page-outer">
    <div class="Login-left-image">
        <img src={BannerImage}/>
        <a href="Home.html" class="back-to-home">Back to home</a>
    </div>
    <div class="Login-right-content">
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" id="username" name="username" placeholder="Username" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}/>
        <input type="password" id="password" name="Password" placeholder="Password" value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})}/>
        <button className='common-btn'>Login</button>
        </form>
    </div>
</div>
</div>

  )
}

export default Login