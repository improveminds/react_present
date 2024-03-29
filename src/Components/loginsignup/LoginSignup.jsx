import React, { useState } from 'react'
import './LoginSignup.css'
import UsernameVerification from './UserNameVerification'

import user_icon from '../assets/person.png' 
import email_icon from '../assets/email.png' 
import password_icon from '../assets/password.png' 


export const LoginSignup = () => {

  const [username, setUsername] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(true);  // To check user Name
  const [action,setAction] = useState("Login");
  const [token, setToken] = useState(null); // To Receve Token
  const [signUpData, setsignUpData] = useState({
    firstName:'',
    lastName:'',
    password:'',
    userName: '',
    role:'USER'
  });
  const [loginData, setLoginData] = useState({
    password:'',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(action ==='Sign Up')
      {
      try {
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signUpData)
        
        });
        console.log('+++++++++')
        console.log(JSON.stringify(signUpData))
        if (response.ok) {
          // Handle success
          console.log('Form submitted successfully');
        } else {
          // Handle error
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
    else
    if(action ==='Login')
    {
        
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        
        });
        console.log('+++++++++')
        console.log(JSON.stringify(loginData))
        if (response.ok) {
          // Handle success
          const  token_data =await response.json();
          console.log('login Form submitted successfully');
          console.log(token_data.token)
          const { token } = response.data; // Extract token from response data
          setToken(token);
        } else {
          // Handle error
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }

    };

  return (
    <form onSubmit={handleSubmit}>
    <div className='container'>
        <div className="header">

        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
        {
        action==="Login"?<div/>:
        <><div className="input">
              <img src={user_icon} alt="" />
              <input type="text" name="firstName" placeholder='First Name' value={signUpData.firstName} onChange={handleChange} required/>
              </div><div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="lastName" placeholder='Last Name' value={signUpData.lastName} onChange={handleChange} required />
                <input type="hidden" name="role" value={signUpData.firstName==='USER'} />
              </div>
              
              </>
        }
        
        <div className="input">
          <img src={user_icon}  alt="" />
          <input type = "text" placeholder='User Name' name="userName" value={action==="Login"?loginData.userName:signUpData.userName} onChange={action==="Login"?handleLoginChange:handleChange} required/>
          {/* Pass username, action, and setUsernameAvailable as props */}
          <UsernameVerification
                username={username}
                action={action}
                setUsernameAvailable={setUsernameAvailable}
            />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type= "password" name="password" placeholder='Password' value={action==="Login"?loginData.password:signUpData.password}onChange={action==="Login"?handleLoginChange:handleChange} required />
        </div>
        </div>
        {
        action==="Sign Up"?<div/>:
        <div className="forgot-password" >Lost Password ? <span>Click Here </span></div>
        }
        
        <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        <div className='submit-container'><button type="submit">Submit</button></div>
        </div>
      </div>
      </form>
  )
}
