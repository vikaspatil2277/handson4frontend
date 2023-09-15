import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Header() {
    const nav = useNavigate();
    const [loginUser, setLoginUser] = useState(true);
   
    
  
    
  
    useEffect(() => {
      let token=localStorage.getItem("token")
      if (token==null) {
        setLoginUser(true)
        
      }
      else if(token) {
        setLoginUser(false)
          nav("/welcome")
      }
      else{
        return null;
      }
    },[nav]);
  
      
  
    const LogOut = () => {
        
        localStorage.removeItem('token');
        setLoginUser(true)
         nav("/")
     
    }

    return(

       <nav>

<h1 className="navbar-name">xyz</h1>

<div >

{
            !loginUser ?
              <div className="login">
               <Link to="/" className='link'   onClick={LogOut}>LogOut</Link>

             

            
              </div>
              :
              <div className="authorization">
                
              <div className="login">
                  <Link to="/login" className='link'>Login</Link>
              </div>
              <div className="signUp">
                  <Link to="/register" className='link'>Register</Link>
              </div>
            
          </div>
           
          }
           


           </div>
           

       </nav>


    )

}

export default Header;


