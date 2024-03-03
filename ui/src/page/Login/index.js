import React, {useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { MdError } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import {auth, provider} from "./configGG.js"
import {signInWithPopup} from "firebase/auth"


export default function Login() {
    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    const [errorMail,setErrorMail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [eyePass, setEyePass] = useState(false)
    const handleLoginGG = async () => {
      try {
          const result = await signInWithPopup(auth, provider);
          const user = result._tokenResponse;
          Cookies.set("userId", user.idToken,{ expires: 1 })
          Cookies.set("Name", user.displayName,{ expires: 1 })
          console.log(result)
          navigate('/')
      } catch (error) {
          console.error('Error signing in with Google:', error);
          alert("error email")
      }
  };

    const handleLogin = async () => {
      try {
        const response = await fetch('https://server-restaurant-7f27.onrender.com/', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            pass: pass,
          }),
        });
  
        const data = await response.json();
        console.log(data)
        if(data.result === "successfully") {
          navigate('/')
          Cookies.set("userId", data.cookie,{ expires: 1 })
          Cookies.set("Name", data.name,{ expires: 1 })
        }else if(data.result === "error Email") {
          setErrorMail(true);
        }else if(data.result === "error Pass") {
          setErrorPass(true);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
    const handleEyePass = () => {
      setEyePass(!eyePass)
    }
  return (
    <div className='content_login'>
        <div className='form'>
          <img
            className='logo_form'
            src='https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png'
            alt='logo'
          />
            <input
              className='input_form'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMail ? (
              <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", padding:"0 2px"}}>
                <p style={{color:"#Da0808"}}>email không tồn tại vui lòng đăng kí tài khoản</p>
                <MdError style={{color:"#Da0808",width:'20px',height:"20px"}} />
              </div>
            ) : null}
            <div className='content_pass'>
              <input
                className='input_form'
                placeholder='pass world'
                type={eyePass ? "password" : "text"}
                value={pass}
                onChange={(e) => setPass(e.target.value) }
                />
              {eyePass ? (
                <FiEyeOff className='content_eye' onClick={handleEyePass} />
              ): (
                <FiEye className='content_eye' onClick={handleEyePass} />
              )}
            </div>
              {errorPass ? (
                <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                  <p style={{color:"#Da0808"}}>mật khẩu sai vui lòng nhập lại</p>
                  <MdError style={{color:"#Da0808",width:'20px',height:"20px"}} />
                </div>
              ) : null}
            <div className='form_button'>
                <button style={{margin:"0 4px"}} className='button' onClick={() => handleLogin()}  >Log in</button>
                <button className='button'><a href='/register' style={{color:"#000"}}>Register</a></button>
            </div> 
            <div className='login_gg' onClick={() => handleLoginGG()}>
              <FcGoogle style={{width:"30px", height:'30px'}}/>
              <p style={{fontSize:"2rem", color:"#000"}}>Login with google</p>
            </div> 
        </div>
    </div>
  )
}
