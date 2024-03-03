import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "./style.css"

export default function Register() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [name,setName] = useState("")
  const navigate = useNavigate()
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/register",{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
          email: email,
          passWorld: pass,
        }),
      })
      const request = await response.json();
      if(request.result === 'successfully') {
        navigate('/login')
      }
    }
    catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='content_register'>
        <div className='form_register'>
          <img
            className='logo_form'
            src='https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png'
            alt='logo'
          />
            <input
              className='input_form'
              placeholder='Name Login'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='input_form'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='input_form'
              placeholder='pass world'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
             <input
              className='input_form'
              placeholder="confirm pass world"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <div className='form_button'>
                <button className='button_login'><a href='/login' style={{color:"#000"}}>Log in</a></button>
                <button className='button_register' onClick={() => handleRegister()}>Register</button>
            </div>  
        </div>
    </div>
  )
}
