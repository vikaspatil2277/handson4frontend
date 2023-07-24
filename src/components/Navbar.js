import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <h1 className="navbar-name">Nanda collection</h1>

    


    <div className="authorization">
        <div className="login">
            <Link to="/login" className='link'>Login</Link>
        </div>
        <div className="signUp">
            <Link to="/register" className='link'>Register</Link>
        </div>
    </div>

</nav>
  )
}

export default Navbar
