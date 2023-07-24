import { useState } from "react";
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e){
    e.preventDefault();
    try{
      const response = await axios.post("https://vikasnodehandson4backend.onrender.com/students/login",{
        email,password
      })
      const data = response.data;
      console.log(data);
      console.log(data.message);
      console.log(data.loginToken);
      localStorage.setItem('token',data.token);
    }
    catch(error){
      console.log(error);
    }
}

  return (
      <div className='main'>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Login</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username / Email"
              className="input_text"
              autoComplete="off"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              className="input_text"
              autoComplete="off"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
            <button onClick={submit} >Submit</button>
          </div>
          <div className="footer">
            <p>Forgot Password ?</p>
            <Link to="/register" className='link'>SignUp</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;