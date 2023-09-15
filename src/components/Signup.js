
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav=useNavigate();
  
  
    async function submit(e) {
      e.preventDefault();
  
      try {
        const response = await axios.post("https://vikasnodehandson4backend.onrender.com/students/signUp", {
          name, phone, email, password
        })
        console.log(response.data);
        nav("/")
        alert("registered successfully plg login")
      }
      catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div className='main'>
        <div className="login_form_container">
          <div className="login_form">
            <h2>Sign Up</h2>
            <div className="input_group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                className="input_text"
                autoComplete="off"
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="text"
                placeholder="Email"
                className="input_text"
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="number"
                placeholder="Phone number"
                className="input_text"
                autoComplete='off'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="password"
                placeholder=" Password"
                className="input_text"
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button_group" id="login_button">
              <button onClick={submit}>Sign Up</button>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
export default Signup
